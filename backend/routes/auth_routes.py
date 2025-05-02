# backend/routes/auth_routes.py
from flask import Blueprint, redirect, url_for, session, request
from backend.auth.spotify_oauth import init_spotify_oauth
import traceback

auth_bp = Blueprint('auth', __name__, url_prefix='/auth')

@auth_bp.route('/login')
def login():
    try:
        spotify = init_spotify_oauth()
        callback_url = url_for('auth.callback', _external=True)
        print(f"\n🔑 Initiating Spotify login. Callback URL: {callback_url}")
        return spotify.authorize(callback=callback_url)
    except Exception as e:
        traceback.print_exc()
        return f"Login initialization failed: {str(e)}", 500

@auth_bp.route('/callback')
def callback():
    try:
        print("\n🔄 Handling Spotify callback")
        spotify = init_spotify_oauth()
        
        # Check for auth errors from Spotify
        if 'error' in request.args:
            error = request.args.get('error')
            message = request.args.get('error_description', '')
            print(f"❌ Spotify auth error: {error} - {message}")
            return f"Spotify authentication failed: {error}", 400

        # Handle OAuth response
        resp = spotify.authorized_response()
        print("\n🎯 Spotify Response Received:")
        print(f"Response Keys: {list(resp.keys()) if resp else 'Empty response!'}")

        if not resp or 'access_token' not in resp:
            print("❌ Missing access token in response!")
            print(f"Full response: {resp}")
            print(f"Request args: {dict(request.args)}")
            return "Authentication failed: No access token received", 400

        # Store token and debug
        session['spotify_token'] = (resp['access_token'], '')
        print(f"✅ Auth Successful! Token: {resp['access_token'][:15]}...")
        print(f"Token Expires in: {resp.get('expires_in', 'Unknown')}s")
        
        return redirect(url_for('api.get_dashboard'))

    except Exception as e:
        print("\n🔥 Critical Error in Callback:")
        traceback.print_exc()
        return f"Authentication failed: {str(e)}", 500