from flask import Flask
from dotenv import load_dotenv
import os

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv('FLASK_SECRET_KEY')

# Import routes AFTER app creation to avoid circular import
from spotify_oauth import *

if __name__ == '__main__':
    app.run(port=5000, debug=True)