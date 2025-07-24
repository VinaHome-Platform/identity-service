export default () => ({
  connect: {
    port: parseInt(process.env.PORT_SERVICE || '3000', 10),
    host: process.env.HOST_SERVICE,
  },
  database: {
    connectionString: process.env.DATABASE_CONNECTION_STRING,
  },
  jwt: {
    secret: process.env.JWT_SECRET,
    expiresIn: process.env.JWT_EXPIRES_IN,
  },
  nats: {
    url: process.env.NATS_URL,
  },
});
