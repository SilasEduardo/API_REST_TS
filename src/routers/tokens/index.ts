import { Router } from 'express';
import multer from 'multer';

const uploadFileRouter =  Router();


const upload = multer({
  dest: "./tmp"
})

const file = upload.single("file")

uploadFileRouter.post("/", file, (request, response)=> {
    
})


export { uploadFileRouter }