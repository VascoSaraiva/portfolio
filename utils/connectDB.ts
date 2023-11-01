import mongoose from 'mongoose';

let isConnected = false; // track the connection

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        return;
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI!, {
            dbName: "portfolioDB",
        })

        isConnected = true;

    } catch (error) {
        console.log('ERROR' + error);
    }
}