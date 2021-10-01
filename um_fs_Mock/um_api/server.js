import express from 'express';
import {API_PORT,DB_URL} from './config';
import errorHandler from './middlewares/errorHandler';

const app = express();
import routes from './routes';
import mongoose from 'mongoose';


// 🔋 DB connections 
mongoose.connect(DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    .then(() => console.log('------MongoDB Connected-----'))
    .catch(err => console.log(err));

// 🎈 Middlewares
app.use(express.json());
app.use(express.urlencoded({
    extended: false
})
);
app.use('/api',routes);
app.use(errorHandler);


app.listen(API_PORT,process.env.IP,()=>{
    console.log(`🌠 Server running at PORT:${API_PORT}`);
});