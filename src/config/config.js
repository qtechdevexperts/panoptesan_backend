import dotenv from 'dotenv';
dotenv.config();

export default {
    api: {
        port: process.env.API_PORT?.trim()
    },
    db: {
        port: process.env.DB_PORT?.trim(),
        name: process.env.DB_NAME?.trim(),
        host: process.env.DB_HOST?.trim(),
        dialect: process.env.DB_DIALECT?.trim(),
        credentials: {
            user: process.env.DB_USER?.trim(),
            password: process.env.DB_PASSWORD?.trim()
        }
    }
}