from flask import Flask
from backend.config import Config
from backend.routes.auth_routes import auth_bp
from backend.routes.api_routes import api_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)
    
    # Register blueprints
    app.register_blueprint(auth_bp)
    app.register_blueprint(api_bp)
    
    # Security headers
    @app.after_request
    def add_headers(response):
        response.headers['Content-Security-Policy'] = "default-src 'self'"
        return response
        
    return app

if __name__ == '__main__':
    app = create_app()
    app.run(port=5000)  # Remove SSL for now