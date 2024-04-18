// import { generateService } from './dist/index';
const { generateService } = require('./dist/index.js');
generateService({
  schemaPath: 'https://petstore.swagger.io/v2/swagger.json',
  serversPath: './servers',
});
