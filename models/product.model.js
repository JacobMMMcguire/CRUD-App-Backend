//const mongoose = require('mongoose');
/**Changed the syntax of the original tutorial to the code below
 * seems there might have been an issue with trying to use his syntax and instead importing worked better
 * my guess is something to do with the mongoose API
 */
import mongoose from 'mongoose';

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },

        quantity: {
            type: Number,
            required: true,
            default: 0
        },

        price: {
            type: Number,
            required: true,
            default: 0
        },

        image: {
            type: String,
            required: false
        },

    },
    {
        timestamps: true
        //Provides timestamps for when something was created/updated
    }
);

const Product = mongoose.model("Product", ProductSchema);

//module.export = Product;
/**Changed the syntax of the original tutorial to the code below
 * seems there might have been an issue with trying to use his syntax and instead importing worked better
 * my guess is something to do with the mongoose API
 */
export default Product;