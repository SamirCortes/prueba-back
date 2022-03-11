import { createConnection } from 'typeorm';
import './env';
import { DB_USERNAME, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT } from './env';
import { Proyecto } from '../entity/proyecto';

export const connectDB = async () => {
    await createConnection({
        type: 'mysql',
        username: DB_USERNAME,
        password: DB_PASSWORD,
        port: DB_PORT,
        host: DB_HOST,
        database: DB_NAME,
        entities: [Proyecto],
        synchronize: true,
        ssl: false
    })
}