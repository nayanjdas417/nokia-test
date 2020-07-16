require('dotenv').config()

export default {
  NODE_ENV: process.env.NODE_ENV,
  port: process.env.PORT || 3000,
  serviceName: process.env.SERVICE_NAME || 'test-service',
  uploadDirectory: process.env.UPLOAD_DIRECTORY || '/uploads'
}