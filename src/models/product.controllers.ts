import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    sellIn: Date;
    price: Number;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true, lowercase: true, trim: true },
    sellIn: { type: Date },
    startingPrice: { type: Number, required: true, min: 0 },
    ActualPrice: { type: Number, required: true, min: 0, },
    createdAt: { type: Date, required: true, default: Date.now() }
});

export default mongoose.model<IProduct>('Product', productSchema);