//Load .env variables
//require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');


const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minLength: 7,
        match: /^([a-z|A-Z|0-9]*)$/i
    },
    isDeleted: {
        type: Number,
        required: true,
        default: 0
    },
    privateKey: {
        type: String,
        required: true,
        trim: true
    },
   
    // token: {
    //     type: String,
    //     required: true
    // }
    
})

UserSchema.pre('save', async function(next){

    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 8);
    }
    next();
})

UserSchema.pre('save', function(next){
    if (this.isModified('privateKey')) {
        if (this.privateKey.slice(0, 2) == "0x"){
            this.privateKey = this.privateKey.slice(2);
        }
        this.privateKey = crypto.AES.encrypt(this.privateKey, process.env.SYS_SECRET_KEY).toString(); 
    }
    next();
})



UserSchema.methods.genToken = async function(){
    const user = this;
    token = jwt.sign({username: user.username}, process.env.SYS_SECRET_KEY, {expiresIn: '2 hours'});
    return(token);
}

const User = mongoose.model('User', UserSchema);

module.exports = User;

// test = async() => {
//     const new_user = new User({
//         username: "KhangLuong",
//         password: "1234567",
//         privateKey: "12345",
//         tokens: []
//     })
//     await new_user.save(); 
//     console.log('done');
// }

// try{
//     test();
// }catch(e){
//     console.log(e);
// }

