import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
// import { isAdminRequest } from "./auth/[...nextauth]";


export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
//   await isAdminRequest(req,res)



if (method === 'GET') {
  if (req.query?.id) {
    res.json(await Product.findOne({ _id: req.query.id }));
  } else {
    // Pagination: Extract pagination parameters from query string
    const page = parseInt(req.query.page) || 1; // Current page (default to 1)
    const limit = parseInt(req.query.limit) || 10; // Number of items per page (default to 10)

    // Calculate skip value based on the current page and limit
    const skip = (page - 1) * limit;

    // Fetch products with pagination
    const products = await Product.find()
      .skip(skip)
      .limit(limit);

    res.json(products);
  }
}


}