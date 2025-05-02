from flask import session
from authlib.integrations.flask_client import OAuth
from backend.config import Config

oauth = OAuth()

def init_spotify_oauth(app):
    oauth.init_app(app)
    
    spotify = oauth.register(
        name='spotify',
        client_id=Config.SPOTIFY_CLIENT_ID,
        client_secret=Config.SPOTIFY_CLIENT_SECRET,
        access_token_url='https://accounts.spotify.com/api/token',
        authorize_url='https://accounts.spotify.com/authorize',
        api_base_url='https://api.spotify.com/v1/',
        client_kwargs={'scope': Config.SCOPE}
    )

    # This replaces the `@spotify.tokengetter` pattern
    def get_spotify_token():
        return session.get('spotify_token')

    return spotify
