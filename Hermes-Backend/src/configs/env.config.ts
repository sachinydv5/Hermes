require('dotenv').config()


export const config = {
  NODE_ENV: process.env.NODE_ENV ?? "production",
  PORT: process.env.PORT ?? "3001",
  ATLAS_URI: process.env.mongodb_uri
}
