import { model, Schema, models } from "mongoose";

// Define a schema for blog posts
const blogPostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  metades: { 
    type: String,
    required: true,
  } ,// Description or meta description
  H1: String, // Heading 1
  content: String, // Content for Heading 1
  H2: String, // Heading 2
  content2: String, // Content for Heading 2
  H3: String, // Heading 3
  content3: String, // Content for Heading 3
  H4: String, // Heading 4
  content4: String, // Content for Heading 4
  images: [{ type: String }], // Array of image URLs
  datePosted: {
    type: Date,
    default: Date.now, // Automatically set the current date when creating a post
  },
  // You can add more fields like tags, categories, comments, etc. as needed
});

export const BlogPost = models.BlogPost || model("BlogPost", blogPostSchema);
