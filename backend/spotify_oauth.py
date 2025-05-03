from flask import session, redirect, request, url_for
from functools import wraps
import requests
import os
from app import app 

# Spotify OAuth config
SPOTIFY_CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
SPOTIFY_CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
REDIRECT_URI = 'http://127.0.0.1:5000/auth/callback'

# Decorator to protect routes
def login_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if 'spotify_token' not in session:
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    return decorated

@app.route('/login')
def login():
    params = {
        'client_id': SPOTIFY_CLIENT_ID,
        'response_type': 'code',
        'redirect_uri': REDIRECT_URI,
        'scope': 'user-top-read user-read-private'
    }
    auth_url = f"https://accounts.spotify.com/authorize?{'&'.join([f'{k}={v}' for k,v in params.items()])}"
    return redirect(auth_url)

@app.route('/callback')
def callback():
    try:
        code = request.args.get('code')
        data = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': REDIRECT_URI,
            'client_id': SPOTIFY_CLIENT_ID,
            'client_secret': SPOTIFY_CLIENT_SECRET
        }
        response = requests.post('https://accounts.spotify.com/api/token', data=data).json()
        session['spotify_token'] = response['access_token']
        return redirect(url_for('dashboard'))
    except:
        return "Authentication failed", 400

@app.route('/dashboard')
@login_required
def dashboard():
    return "DASHBOARD! AUTH WORKS!"