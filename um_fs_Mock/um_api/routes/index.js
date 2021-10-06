import express from 'express';
const router = express.Router();

import {registerController,loginController,refreshController,whoamiController,userController} from '../controllers';

import auth from '../middlewares/auth';
import admin from '../middlewares/admin';
import limiter from '../middlewares/rateLimiter';

// ✔ Auth Routes
router.post('/register',limiter,registerController.register);
router.post('/login',limiter,loginController.login);
router.get('/whoami',[limiter,auth],whoamiController.me);
router.post('/refresh',limiter,refreshController.refresh);
router.post('/logout',[limiter,auth],loginController.logout);

// ✔ userManagment routes CRU
router.get('/user',[limiter,auth,admin],userController.getall);
router.post('/user',[limiter,auth,admin],userController.store);
router.put('/user/:id',[limiter,auth],userController.update);



export default router;