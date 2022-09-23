import mongoose, {Schema} from "mongoose";
import bcrypyt from 'bcrypt';

const UserSchema = new Schema({
    username : String,
    hashedPassword : String,
});

UserSchema.methods.setPassword = async function(passwrod) {
    const hash = await bcrypyt.hash(passwrod, 10);
    this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function(password) {
    const result = await bcrypyt.compare(password, this.hashedPassword);
    return result;
};

UserSchema.methods.serialize = function() {
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
};

UserSchema.statics.findByUsername = function(username) {
    return this.findOne({ username });
};


const User = mongoose.model('User', UserSchema);
export default User;