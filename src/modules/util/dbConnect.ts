import mongoose from 'mongoose';
import logger from './logger';

export async function connect() {
    const uri = process.env.uri;
    if (!uri) {
        logger.error("URI not founded");
        process.exit();
    }
    else {
        try {
            await mongoose.connect(uri)
            console.log("Connected")
        }
        catch (error) {
            console.error('Error connecting to MongoDB:', error);
            throw error;
        }
    }

}