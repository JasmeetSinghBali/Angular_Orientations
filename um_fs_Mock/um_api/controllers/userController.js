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
  },
  // =========== UPDATE EXISTING User via user id=========
  async update(req,res,next){
      const {error}=userSchema.validate(req.body);
      if(error){
        return next(error);
      }

      if(!req.params.id){
        return next(CustomErrorHandler.serverError());
      }

      // Update new user in DB
      const {name,email,password,role}=req.body;
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      let document;

      try{
        document= await User.findOneAndUpdate({_id:req.params.id},{
          name,
          email,
          password: hashedPassword,
          role
        },{new:true});
      }catch(err){
        return next(err);
      }

      res.status(200).json(document);
  },
  async getall(req,res,next){
    let data;
    try{
      // use mongoose-pagination to avoid error from mongo if large amount of data.
      // -updatedAt '-' sign indicates that updatedAt and __v will not be included in the response
      data = await User.find().select('-updatedAt -__v -password -createdAt').sort({ _id: -1 }); // sort({_id}:-1) sorts documents with respect to id in descending order
      if(!data){
        return next(new Error('No Data Found!!'));
      }
    }catch(err){
      return next(CustomErrorHandler.serverError());
    }
    return res.json(data);
  }
}

export default userController;