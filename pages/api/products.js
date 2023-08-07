import {Product} from "@/models/Product";
import {mongooseConnect} from "@/lib/mongoose";
// import { isAdminRequest } from "./auth/[...nextauth]";


export default async function handle(req, res) {
  const {method} = req;
  await mongooseConnect();
//   await isAdminRequest(req,res)


  if (method === 'GET') {
    if (req.query?.id) {
      res.json(await Product.findOne({_id:req.query.id}));
    } else {
      res.json(await Product.find());
    }
  }


}