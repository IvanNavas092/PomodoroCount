export const environment = {
  production: false,
  cloudinary: {
    apiKey: '358767988695531',
    apiSecret: 'VFZIq6J_Kpnm4Vfmn1uU9eewEOo',
    cloudName: 'dglx7uc1t',
    url: 'cloudinary://358767988695531:VFZIq6J_Kpnm4Vfmn1uU9eewEOo@dglx7uc1t'
  },
  spotify: {
    CLIENT_ID: '8a3f3c699a324421b023cd845ef8aa4a',
    REDIRECT_URI: 'https://597e9fb4390e.ngrok-free.app/callback',
    SCOPES: [
      'streaming',
      'user-read-email',
      'user-read-private',
      'user-modify-playback-state',
      'user-read-playback-state',
      'user-read-currently-playing'
    ]
  }
};
