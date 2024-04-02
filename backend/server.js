import app from "./app.js";
import cloudinary from "cloudinary";

// cloudinary.v2.config({
//   cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
//   api_key: process.env.CLOUDINARY_CLIENT_API,
//   api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
// });


cloudinary.v2.config({
  cloud_name: 'dfeeqvx3v',
  api_key: '196135458227717',
  api_secret: '_8X3FuqjrCpDfxFaxCq8oxn7fmo',
});

app.listen(process.env.PORT, () => {
  console.log(`Server running at port ${process.env.PORT}`);
});
