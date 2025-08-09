import express, { response } from 'express'
import mongoose from 'mongoose';
/**Changed the syntax of the original tutorial to the code ABOVE
 * seems there might have been an issue with trying to use his syntax and instead importing worked better
 * my guess is something to do with the mongoose API
 */
import Product from './models/product.model.js'
import { router } from './routes/product.route.js';

//Instead of just using the router variable name I changed to productRoute to match the tutorial naming conventions
const productRoute = router;

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

//routes
app.use("/api/products", productRoute)


app.get('/', (req,res) => {
    res.send("Hello from Node API Server Updated"); 
});



//Replaced API (now in product.controller.js file)
/**app.get('/api/products', async (req,res) => {

    try{

        const products = await Product.find({});
        res.status(200).json(products)

    } catch (error) {

        res.status(500).json({message: error.message});

    };

});
*/

//Replaced API (now in product.controller.js file)
/**app.get('/api/products/:id', async (req,res) => {

    try{

        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {

        res.status(500).json({message: error.message});

    };

});
*/

//Replaced API (now in product.controller.js file)
/**app.post('/api/products', async (req,res) => {
    try{

        const product = await Product.create(req.body);
        res.status(200).json(product);

    } catch(error) {

        res.status(500).json({message: error.message});

    };
    
}); 
*/

//Replaced API (now in product.controller.js file)
/**app.put('/api/products/:id', async (req,res) =>{

        try{

        const {id} = req.params;

        const product = await Product.findByIdAndUpdate(id, req.body);

        if(!product) {

            return res.status(404).json({message: "Product not found"})

        }

        const updatedProduct = await Product.findById(id)

        res.status(200).json(updatedProduct);

    } catch(error) {

        res.status(500).json({message: error.message});

    };

});
*/

//Replaced API (now in product.controller.js file)
/**app.delete('/api/products/:id', async (req,res) =>{

    try {

        const {id} = req.params;

        const product = await Product.findByIdAndDelete(id);

        if (!product){

            return res.status(404).json({message: "Product not found"})
        }

        res.status(200).json({message: "Product deleted successfully"})

    } catch (error){

        res.status(500).json({message: error.message});

    }

})
*/

mongoose.connect("mongodb+srv://admin:Pokef%40n101@backenddb.7pazrhc.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {

    console.log("Connected to the database!")
    app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

})
.catch(() => {

    console.log("Connection failed!")

});
/**Manually converted my password in the URL string above so it can be read.
 * The @ symbol is converted into %40 in order to be read in URL without issue
 * Manual conversion is not the most optimized solution and there were more
 * suggestions in the threadnI got this patch fix from:
 * 
 * https://stackoverflow.com/questions/7486623/mongodb-password-with-in-it
 */
