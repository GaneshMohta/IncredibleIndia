import mongoose from 'mongoose'

const blogSchema = mongoose.Schema({
    Titleid:String,
    Title : {
        type:String,
        required:true
    },
    image : String,
    QuillContent : String,
    selectedCategories : [{
        type:String,
        required:true
    }],
    Date :  {
        type: Date,
        default: Date.now,
      },
})

const Blog =mongoose.model("blogs",blogSchema);

export default Blog;
