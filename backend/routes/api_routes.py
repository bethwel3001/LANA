from flask import Blueprint, jsonify, session
from backend.auth.spotify_oauth import init_spotify_oauth

api_bp = Blueprint('api', __name__, url_prefix='/api')

@api_bp.route('/me')
def get_user_data():
    spotify = init_spotify_oauth()
    if 'spotify_token' not in session:
        return jsonify(error="Unauthorized"), 401
    
    try:
        user_data = spotify.get('me').data
        return jsonify(user_data)
    except Exception as e:
        return jsonify(error=str(e)), 500

@api_bp.route('/dashboard')
def get_dashboard():
    # Will serve React build later
    return "Dashboard placeholder - React will handle this!"