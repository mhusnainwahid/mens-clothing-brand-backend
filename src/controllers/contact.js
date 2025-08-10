import Contact from "../models/contact.js"

export const addMessage = async (req,res)=>{
    try {
        const contact = await Contact.create(req.body)
        return res.status(200).json({
            message: "Message added successfully!",
            contact
        })
    } catch (error) {
        return res.status(500).json({
            message: "An error occurred while adding the message.",
            error: error.message
        })
    }
}