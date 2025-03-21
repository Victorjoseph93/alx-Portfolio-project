// authConfig.js

module.exports = {
  // Secret key for JWT (JSON Web Token) signing and verification
  jwtSecret: process.env.JWT_SECRET || 'jwt_secret_key',

  // Token expiration time (e.g., 1 hour)
  jwtExpiration: process.env.JWT_EXPIRATION || '1h',

  // Options for password hashing (e.g., bcrypt)
  bcryptSaltRounds: parseInt(process.env.BCRYPT_SALT_ROUNDS) || 10,

  // OAuth settings (if using OAuth for authentication)
  oauth: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || 'google_client_id',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'google_client_secret',
      redirectUri: process.env.GOOGLE_REDIRECT_URI || 'google_redirect_uri',
    },
    facebook: {
      clientId: process.env.FACEBOOK_CLIENT_ID || 'facebook_client_id',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'facebook_client_secret',
      redirectUri: process.env.FACEBOOK_REDIRECT_URI || 'facebook_redirect_uri',
    },
  },
};
