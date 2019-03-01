const env = process.env;

module.exports = {
  mysql: {
    host: env.DATABASE_HOST || 'localhost',
    user: env.DATABASE_USER || 'root',
    password: env.DATABASE_PASSWORD || '111111',
    database: env.DATABASE_NAME || 'test',
    port: env.DATABASE_PORT || 3306
  },
  search_service: {
    host: env.HL_SEARCH_RPC_HOST || '172.16.52.84',
    port: env.HL_SEARCH_RPC_PORT || 10254
  },
  port: 3001
}