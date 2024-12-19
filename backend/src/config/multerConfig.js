import multer from 'multer'

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads/")
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now() + '-' + file.originalname);
    },
})

export const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000}, //1MB file size limite
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
          cb(null, true);
        } else {
          cb(new Error('Invalid file type'));
        }
      },
})
