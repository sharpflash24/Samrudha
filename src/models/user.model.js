import  mongoose, { Schema }  from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
        },
        refreshToken: {
            type: String,
        }
    },
    {
        timestamps: true,
    }
)

export const User = mongoose.model("User", userSchema);