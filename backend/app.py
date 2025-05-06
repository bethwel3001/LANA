from flask import Flask
from flask_cors import CORS
from flask_session import Session
from dotenv import load_dotenv
import os

load_dotenv()

def create_app():
    # Initialize core Flask app
    app = Flask(__name__)
    
    # Load configuration
    app.secret_key = os.getenv('FLASK_SECRET_KEY')
    app.config.update(
        SESSION_TYPE='filesystem',
        SESSION_FILE_DIR=os.path.join(os.getcwd(), 'sessions'),
        SESSION_COOKIE_NAME='spotify_session',
        SESSION_COOKIE_HTTPONLY=True,
        SESSION_COOKIE_SECURE=False,
        SESSION_COOKIE_SAMESITE='Lax',
        SESSION_COOKIE_DOMAIN='localhost',
        PERMANENT_SESSION_LIFETIME=3600
    )
    
    # Initialize extensions
    Session(app)
    
    # Configure CORS
    CORS(
        app,
        resources={r"/*": {
            "origins": "http://localhost:3000",
            "supports_credentials": True,
            "expose_headers": ["Content-Type", "Authorization"],
            "allow_headers": ["Content-Type", "Authorization", "Set-Cookie"]
        }},
        send_wildcard=True
    )

    # Middleware to add cookie header
    @app.after_request
    def add_cookie_header(response):
        response.headers.add('Access-Control-Allow-Credentials', 'true')
        return response

    # Import and register blueprints
    from spotify_oauth import auth_routes
    app.register_blueprint(auth_routes)

    return app

# Create app instance
app = create_app()

if __name__ == '__main__':
    app.run(port=5000, debug=True)
