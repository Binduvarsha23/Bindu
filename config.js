require('dotenv').config();
const info = require('./version.json');

module.exports = {
  appVersion: info.version,
  appBuild: info.build,
  port: process.env.PORT || 4000,
  secret: process.env.AUTH_SECRET || 'jwt-default-secret',
  mongo: {
    uri: process.env.MONGO_URI,
    srv: (process.env.MONGO_SRV || '').toString() === 'true',
    username: process.env.MONGO_USERNAME,
    password: process.env.MONGO_PASSWORD,
    authenticationDatabase: process.env.MONGO_AUTHENTICATION_DATABASE,
    hostname: process.env.MONGO_HOSTNAME,
    port: process.env.MONGO_PORT,
    database: process.env.MONGO_DATABASE_NAME || 'crumble',
  },
  dataFolder: './data',
  rootUser: {
    username: process.env.ROOT_USER_USERNAME,
    email: process.env.ROOT_USER_EMAIL,
    password: process.env.ROOT_USER_PASSWORD,
    firstName: process.env.ROOT_USER_FIRST_NAME,
    lastName: process.env.ROOT_USER_LAST_NAME,
  },
  ipAddress: {
    ip: process.env.MAPPED_IP === 'true' ? '0.0.0.0' : process.env.PUBLIC_IP_ADDRESS,
    announcedIp: process.env.MAPPED_IP === 'true' ? process.env.PUBLIC_IP_ADDRESS : null,
  },

nodemailerEnabled: process.env.MAILER_ENABLED === 'true',
nodemailer: {
  from: process.env.MAILER_FROM,
},
nodemailerTransport: {
  service: process.env.MAILER_SERVICE || undefined,
  host: process.env.MAILER_HOST || 'smtp.gmail.com',
  port: Number(process.env.MAILER_PORT) || 587,
  secure: process.env.MAILER_SECURE === 'true',
  auth: {
    user: process.env.MAILER_USERNAME,
    pass: process.env.MAILER_PASSWORD,
  },
},


  // hardcoded
  retryAfter: 10000,
  sizes: [256, 512, 1024, 2048],
  mediaCodecs: [
    {
      kind: 'audio',
      mimeType: 'audio/opus',
      clockRate: 48000,
      channels: 2,
    },
    {
      kind: 'video',
      mimeType: 'video/VP8',
      clockRate: 90000,
      parameters: { 'x-google-start-bitrate': 1000 },
    },
  ],
  rtcMinPort: 10000,
  rtcMaxPort: 12000,
  mediasoupLogLevel: 'warn',
};
