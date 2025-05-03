from flask import session, redirect, request, url_for, jsonify
import requests
import os
import traceback
from app import app

# Configuration
SPOTIFY_CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
REDIRECT_URI = 'http://127.0.0.1:5000/callback'

@app.route('/login')
def login():
    """Handle login requests with error feedback"""
    try:
        # Check for existing errors
        error = request.args.get('error')
        if error:
            return jsonify(
                status="error",
                message=f"Authentication failed: {error}"
            ), 400

        # Proceed with Spotify auth
        params = {
            'client_id': SPOTIFY_CLIENT_ID,
            'response_type': 'code',
            'redirect_uri': REDIRECT_URI,
            'scope': 'user-top-read',
            'show_dialog': 'true'
        }
        auth_url = f"https://accounts.spotify.com/authorize?{'&'.join([f'{k}={v}' for k,v in params.items()])}"
        return redirect(auth_url)

    except Exception as e:
        traceback.print_exc()
        return jsonify(
            status="error",
            message="Login initialization failed"
        ), 500

@app.route('/callback')
def callback():
    """Handle Spotify OAuth callback"""
    try:
        # 1. Verify authorization code
        code = request.args.get('code')
        if not code:
            return redirect(url_for('login', error='missing_code'))

        # 2. Exchange code for token
        headers = {'Content-Type': 'application/x-www-form-urlencoded'}
        data = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': REDIRECT_URI,
            'client_id': SPOTIFY_CLIENT_ID,
            'client_secret': SPOTIFY_CLIENT_SECRET
        }
        
        response = requests.post(
            'https://accounts.spotify.com/api/token',
            headers=headers,
            data=data
        )
        response.raise_for_status()
        
        # 3. Store session data
        token_data = response.json()
        session['spotify_token'] = token_data['access_token']
        return redirect(url_for('dashboard'))

    except requests.HTTPError as e:
        traceback.print_exc()
        return redirect(url_for('login', error='token_exchange_failed'))
    
    except Exception as e:
        traceback.print_exc()
        return redirect(url_for('login', error='server_error'))

@app.route('/dashboard')
def dashboard():
    """Protected endpoint example"""
    if 'spotify_token' not in session:
        return redirect(url_for('login', error='unauthorized'))
    return jsonify(status="success", message="Welcome to dashboard!")