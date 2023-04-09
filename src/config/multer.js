const multer = require("multer");
const crypto = require("crypto");
const path = require("path");

const MAX_SIZE = 2097152;
const ALLOWED_FORMATS = ["image/jpeg", "image/jpg", "image/png"];

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "..", "..", "upload"));
  },
  filename: (req, file, cb) => {
    const fileExtension = file.originalname.split(".")[1];

    const fileToLower = file.originalname
      .split(" ")
      .join("-")
      .toLowerCase()
      .split(".")[0];

    const fileHashName = crypto.randomBytes(16).toString("hex");
    const fileName = `${fileHashName}-${fileToLower}.${fileExtension}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage, limits: { fileSize: MAX_SIZE }, fileFilter: (req, file, cb) => {
    if(ALLOWED_FORMATS.includes(file.mimetype)){
        cb(null, true)
    }else{
        cb(null, false)
        // return cb(new Error("Extensão do Arquivo não Suportado"))
        return cb(new multer.MulterError
          ("Extensão do Arquivo não Suportado"))
    }
}}).single('avatar');

//Apenas inseri o Single no final do upload

module.exports = upload