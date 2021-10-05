import {User} from '../models';
import CustomErrorHandler from '../services/CustomErrorHandler';
import Joi from 'joi';
import userSchema from '../validators/userValidation';
import bcrypt from 'bcryptjs';



const userController={
  // ============= CREATE NEW user ===============
  async store(req,res,next){
      //validation
      const {error}=userSchema.validate(req.body);
      if(error){
        return next(error);
      }

      // Store new user in DB
      const {name,email,role}=req.body;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);

      let document;
      try{
        document= await User.create({
          name,
          email,
          password:hashedPassword,
          role
        });
      }catch(err){
        return next(err);
      }

      res.status(201).json(document);
  }
}

export default userController;