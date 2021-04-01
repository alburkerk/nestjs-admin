// eslint-disable-next-line @typescript-eslint/no-var-requires
const AdminUser = require('nestjs-admin').AdminUserEntity;

module.exports = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'sa',
  password: '_ToTo1234',
  database: 'nest-admin',
  entities: [__dirname + '/dist/**/*.entity.js', AdminUser],
  //   migrations: ['dist/migration/*.js'],
  synchronize: false,
};
