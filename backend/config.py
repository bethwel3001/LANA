import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SPOTIFY_CLIENT_ID = os.getenv('SPOTIFY_CLIENT_ID')
    SPOTIFY_CLIENT_SECRET = os.getenv('SPOTIFY_CLIENT_SECRET')
    SECRET_KEY = os.getenv('FLASK_SECRET_KEY')
    REDIRECT_URI = 'http://127.0.0.1:5000/auth/callback'
    SCOPE = 'user-top-read user-read-private user-read-email'