import {comparePassword, hashPassword} from '../helpers/authHelper.js'
import userModel from '../models/userModel.js'
import JWT from "jsonwebtoken";
export const registerController = async(req, res)=>{
    try {
        const {name, email, password, phone, address} = req.body;
        // validation
        if(!name){
            return res.send({message:'Name is a required field.'});
        }

        if(!email){
            return res.send({message:'Email is a required field.'});
        }

        if(!password){
            return res.send({message:'Password is a required field.'});
        }

        if(!phone){
            return res.send({message:'Phone is a required field.'});
        }

        if(!address){
            return res.send({message:'Address is a required field.'});
        }

        // check user 
        const existingUser = await userModel.findOne({email});

            if(existingUser){
                return res.status(200).send({
                    success:true,
                    message:'Alreay register user, please login'
                })
            }

        // register user
        const hashedPassword = await hashPassword(password);
        // save
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message:'User register successfully!',
            user
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:'Error in register',
            error
        })
    }
}

// POST LOGIN

 export const loginController = async(req, res)=>{
    try {
        const {email, password} = req.body;
        // validation
        if(!email  || !password){
            return res.status(404).send({
                success:false,
                message:'Invalid email OR Password'
            })
        }
        const user = await userModel.findOne({email});
        
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not register.',

            })
        }

        const match = await comparePassword(password, user.password);

        if(!match){
            return res.status(200).send({
                success:false,
                message: 'Invalid Password'
            })
        }

        // token 
        const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {expiresIn:'3d'});
        res.status(200).send({
            success:true,
            message:'Login successfully',
            user:{name:user.name, email:user.email},
            token
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            'message':'Error in login',
            error
        })
    }
 }

 export const testController = (req, res)=>{
    res.send("Protected controller")
 }
