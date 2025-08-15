import { model, Schema } from "mongoose"

const userSchema = new Schema({
    name:{
        type: String
    },
    email:{
        type: String
    },
    password:{
        type: String
    },
    role:{
        type: String
    },
    token:{
        type: String
    },
    isVerified:{
        type: Boolean,
        default: false
    },
    verificationCode:{
        type: String
    },
    codeExpires:{
        type: Date
    }
})

const User = model('User',userSchema)
export default User

