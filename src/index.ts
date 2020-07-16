import app from './middleware/express';

import vars from './config/vars'
import * as fs from 'fs';

const { port, serviceName, NODE_ENV, uploadDirectory } = vars;

app.listen(port, () => {
  console.log(`${serviceName} is running at port ${port} in ${NODE_ENV} mode`);
  if (!fs.existsSync(uploadDirectory)) {
    fs.mkdirSync(uploadDirectory);
  }
});