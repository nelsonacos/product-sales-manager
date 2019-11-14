import Product from '../models/product.models';
import cron from 'node-cron';

export async function dailyProductUpdate() {
    await Product.updateMany({ type: 'normal' }, { $set: { sellIn: -1, actualPrice: -1 } });
    await Product.updateMany({ type: 'fast' }, { $set: { sellIn: -1, actualPrice: -2 } });
}

cron.schedule("0 0 * * *", () => dailyProductUpdate());