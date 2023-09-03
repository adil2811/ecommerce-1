import { BlogPost } from "@/models/Blog";
import {mongooseConnect} from "@/lib/mongoose";

export default async function handle(req, res) {
    const {method} = req;
    await mongooseConnect();

    if (method === 'GET') {
        if (req.query?.id) {
          res.json(await BlogPost.findOne({_id:req.query.id}));
        } else {
          res.json(await BlogPost.find());
        }
      }


}