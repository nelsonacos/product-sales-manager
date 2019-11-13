import mongoose, { Document, Schema } from 'mongoose';

export interface IProduct extends Document {
    name: string;
    type: String;
    sellIn: Number;
    startingPrice: Number;
    actualPrice: Number;
    createdAt: Date;
    updatedAt: Date;
}

const productSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true, lowercase: true, trim: true },
    type: { type: String, required: true, lowercase: true, trim: true },
    sellIn: { type: Number },
    startingPrice: { type: Number, required: true, min: 0 },
    actualPrice: { type: Number, required: true, min: 0 },
    createdAt: { type: Date, required: true, default: Date.now },
    updatedAt: { type: Date, required: true, default: Date.now }
});

export default mongoose.model<IProduct>('Product', productSchema);