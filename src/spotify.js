const authEndpoint = "https://accounts.spotify.com/authorize?"
const clientId = "6f3b1f88d810477b857651bf41eed2ff"
const redirectUri = "http://localhost:3000/"


//FOR READING THE LIBRARY AND THE PLAYLISTS
const scopes = ["user-library-read", "playlist-read-private"]


//FOR LOGIN ENDPOINT
export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
