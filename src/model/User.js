import mongoose from 'mongoose'
const { Schema } = mongoose;

const userSchema = new Schema(
    { 
        username: String,
        email:  {
            type: String,
            required: true,
            unique: true
        },
        password: String,
        passwordResetCode: {
            data: String,
            expiresAt: Date,
        },
    },
    { timestamps: true }
);

const User = mongoose.model('User', userSchema)

export default User