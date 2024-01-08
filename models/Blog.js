import { model, Schema, models } from "mongoose";

const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  metades: { 
    type: String,
    required: true,
  } ,
  alttitle :{
    type: String,
    required: true,
  },
  H1: String, 
  content: String, 
  H2: String, 
  H3: String, 
  content3: String,
  H4: String, 
  content4: String, 
  images: [{ type: String }], 
  datePosted: {
    type: Date,
    default: Date.now, 
  },
});

export const BlogPost = models.BlogPost || model("BlogPost", blogPostSchema);
