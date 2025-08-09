

export const uploadImage = (req,res) =>{
    try {
        return res.status(200).json({
            imageUrl: req.file.path
        })
    } catch (error) {
        return res.status(500).json({
            message: "Image not upload successfully!",
            error: error.message
        })
    }
}