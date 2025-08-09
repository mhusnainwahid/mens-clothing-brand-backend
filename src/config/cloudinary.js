
import cloudinary from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

cloudinary.v2.config({
  cloud_name: 'dw0vns4ca',
  api_key: '974883819917529',
  api_secret: '3OJKL3Hguk7It5XLLKq3iqRx0yw',
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary.v2,
  params: {
    folder: 'products',
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

export {
  cloudinary,
  storage
}
