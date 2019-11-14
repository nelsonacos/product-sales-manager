import mongoose, { Document, Schema } from 'mongoose';

export interface ITransaction extends Document {
    name: String;
    SalePrice: Number;
    createdAt: Date;
}

const transactionSchema: Schema = new Schema({
    name: { type: String, required: true, lowercase: true, trim: true },
    salePrice: { type: Number, required: true, min: 0 },
    createdAt: { type: Date, required: true, default: Date.now() }
});

export default mongoose.model<ITransaction>('Transaction', transactionSchema);