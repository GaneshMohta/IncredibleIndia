import multer from 'multer'
import path from 'path'

const imgconfig = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,'uploads')
    },
    filename:(req, file , callback)=>{
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
})

export const upload = multer(
    {
        storage: imgconfig,
        limits:{fileSize:'1000000'},
        fileFilter:(req, file, callback)=>{
            const fileType = /jpeg|jpg|png|gif/
            const mimeType = fileType.test(file.mimetype)
            const extname = fileType.test(path.extname(file.originalname))
            if(mimeType && extname){
                return callback(null, true)
            }
            callback('Give proper file format to upload')
        }
    }).single('image')
