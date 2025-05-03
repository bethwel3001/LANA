from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()  # Load environment variables

app = Flask(__name__)
app.secret_key = os.getenv('FLASK_SECRET_KEY')

# Essential configuration for local development
app.config.update(
    SESSION_COOKIE_SECURE=False,
    SESSION_COOKIE_SAMESITE='Lax'
)

# Import routes AFTER app creation to avoid circular imports
from spotify_oauth import *

if __name__ == '__main__':
    app.run(port=5000, debug=True)