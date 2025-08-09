
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary'


cloudinary.config({
  cloud_name: 'dw0vns4ca',
  api_key: '974883819917529',
  api_secret: '3OJKL3Hguk7It5XLLKq3iqRx0yw'
});


const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'products',
    // format: async (req, file) => 'png', 
    allowed_type: ['jpg', 'png']

  },
});

export {
  cloudinary,
  storage
}