const cloundinary = require("cloudinary").v2;


const uploadFileToCloudinary = async (file) => {

    //conif
        cloundinary.config({
        cloud_name:"dkc7o7cqz",
        api_key:"462547844441985",
        api_secret:"EGQrUcxZzkLr3tEUin7rufR1Xh4"
    })

    const cloundinaryResponse = await cloundinary.uploader.upload(file.path);
    return cloundinaryResponse;



};
module.exports = {
    uploadFileToCloudinary
}