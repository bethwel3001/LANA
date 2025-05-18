import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Dashboard = () => {
  const { token, logout } = useAuth();
  const [userData, setUserData] = useState(null);
  const [topTracks, setTopTracks] = useState([]);
  const [topArtists, setTopArtists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    const fetchData = async () => {
      try {
        // Fetch user profile
        const userResponse = await fetch('https://api.spotify.com/v1/me', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const userData = await userResponse.json();
        setUserData(userData);

        // Fetch top tracks
        const tracksResponse = await fetch('https://api.spotify.com/v1/me/top/tracks?limit=5', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const tracksData = await tracksResponse.json();
        setTopTracks(tracksData.items);

        // Fetch top artists
        const artistsResponse = await fetch('https://api.spotify.com/v1/me/top/artists?limit=5', {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        const artistsData = await artistsResponse.json();
        setTopArtists(artistsData.items);

      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-green-500">Your Spotify Personality</h1>
          <button 
            onClick={logout}
            className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-full"
          >
            Logout
          </button>
        </header>

        {userData && (
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex items-center">
              {userData.images?.length > 0 && (
                <img 
                  src={userData.images[0].url} 
                  alt="Profile" 
                  className="w-20 h-20 rounded-full mr-4"
                />
              )}
              <div>
                <h2 className="text-2xl font-bold">{userData.display_name}</h2>
                <p className="text-gray-400">{userData.email}</p>
                <p className="text-gray-400">{userData.followers?.total} followers</p>
              </div>
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-green-500">Top Tracks</h2>
            <ul className="space-y-4">
              {topTracks.map((track, index) => (
                <li key={track.id} className="flex items-center">
                  <span className="text-gray-400 w-6">{index + 1}.</span>
                  <img 
                    src={track.album.images[2].url} 
                    alt={track.name} 
                    className="w-12 h-12 mr-3"
                  />
                  <div>
                    <p className="font-medium">{track.name}</p>
                    <p className="text-gray-400 text-sm">{track.artists.map(a => a.name).join(', ')}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4 text-green-500">Top Artists</h2>
            <ul className="space-y-4">
              {topArtists.map((artist, index) => (
                <li key={artist.id} className="flex items-center">
                  <span className="text-gray-400 w-6">{index + 1}.</span>
                  <img 
                    src={artist.images[2].url} 
                    alt={artist.name} 
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <p className="font-medium">{artist.name}</p>
                    <p className="text-gray-400 text-sm">{artist.genres.slice(0, 2).join(', ')}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;