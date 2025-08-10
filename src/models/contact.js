import { model, Schema } from 'mongoose'

const contactSchema = new Schema ({
    name:{
        type: String
    },
    email:{
        type: String
    },
    subject:{
        type: String
    },
    message:{
        type: String
    }
})

const Contact = model('Contact', contactSchema)
export default Contact