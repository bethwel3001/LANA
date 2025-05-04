# Spotifi 🎵

A web application that integrates with the Spotify Web API to authenticate users, view their playlists, and access personalized listening data using OAuth2.

---

## 🔧 Features

- 🔐 Spotify OAuth login (secure via HTTPS)
- 🎶 Access user playlists and top tracks
- 🧠 Personalized user data via Spotify API
- ⚡ Built with Flask (Python) and Authlib

---

## 🛠️ Tech Stack

- **Backend**: Python, Flask, Authlib
- **OAuth**: Spotify Web API
- **Frontend**: React + Tailwind CSS, Framer motion
- **Deployment**: Local HTTPS with Flask’s `--cert=adhoc` option

---

## 🚀 Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/bethwel3001/dashboard---stats.git
cd spotifi/backend
```
### 2. Set up environment
```bash
python -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```
### 3. Create .env file
```bash
FLASK_SECRET_KEY=your_flask_secret_key
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
REDIRECT_URI=https://127.0.0.1:5000/callback
SCOPE=user-read-private user-read-email user-read-playback-state user-top-read playlist-read-private
```
*⚠️ Never commit this file to GitHub!*
### 4. Run the app in dev mode
```bash
$env:FLASK_APP = "app.py"   # for PowerShell
python -m flask run --port=5000 --cert=adhoc
```
*Open https://127.0.0.1:5000 in your browser.*

---

## License
MIT License. See LICENSE for more information.

## 🙋‍♂️ Contributions
Pull requests and feature ideas welcome! Please open an issue first for major changes