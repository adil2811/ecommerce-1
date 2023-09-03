import {model, Schema , models } from "mongoose"

// Define a schema for blog posts
const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
//   author: {
//     type: String,
//     required: true,
//   },
  images: [{type:String}],
  datePosted: {
    type: Date,
    default: Date.now, // Automatically set the current date when creating a post
  },
  // You can add more fields like tags, categories, comments, etc. as needed
});


export const BlogPost = models.BlogPost || model('BlogPost',blogPostSchema)
