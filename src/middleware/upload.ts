import multer from 'multer';
import path from 'path';
import vars from '../config/vars'

const { uploadDirectory } = vars;

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, `${uploadDirectory}/`)
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({
  fileFilter: (_req, file, cb) => {
    const extension = path.extname(file.originalname).toLowerCase()
    const mimetype = file.mimetype 
    if (mimetype !== 'application/x-tar') {
      return cb(new Error("INVALID_FILE"));
    }
    cb(null, true);
  },
  storage
});

export default upload;