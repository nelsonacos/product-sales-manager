import { connect } from 'mongoose';

export async function startConnection() {
    try {
        await connect('mongodb://localhost/product-sales-manager-db', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    console.log('DB is connected');
    } catch (err) {
        throw err;
    }

}