import { Schema, model } from "mongoose";
import { IUser } from "./user.interface";

const userSchema = new Schema<IUser>({
    id: {
        type: String,
    },
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    }
})

const User = model<IUser>("User", userSchema);
export default User;