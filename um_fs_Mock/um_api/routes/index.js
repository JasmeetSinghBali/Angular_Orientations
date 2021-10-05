import express from 'express';
const router = express.Router();

import {registerController,loginController,refreshController,whoamiController,userController} from '../controllers';

import auth from '../middlewares/auth';
import admin from '../middlewares/admin';

// ✔ Auth Routes
router.post('/register',registerController.register);
router.post('/login',loginController.login);
router.get('/whoami',auth,whoamiController.me);
router.post('/refresh',refreshController.refresh);
router.post('/logout',auth,loginController.logout);

// ✔ userManagment routes CRUD
// router.get('/user',[auth,admin],userController.getall);
// router.get('/user/:id',auth,userController.getsingle);
router.post('/user',[auth,admin],userController.store);
// router.put('/user/:id',auth,userController.update);
// router.delete('/user/:id',[auth,admin],userController.remove);


export default router;