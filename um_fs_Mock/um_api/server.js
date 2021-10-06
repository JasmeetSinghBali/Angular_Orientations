import express from 'express';
import {API_PORT,DB_URL} from './config';
import errorHandler from './middlewares/errorHandler';

const app = express();

import cluster from 'cluster';
import os from 'os';

import routes from './routes';
import mongoose from 'mongoose';


// Test Route
app.get('/',(req,res)=>{
    res.status(200).json({
        message: '✔ Up & Running..🦨',
        hint: 'valid routes prefixed with /api'
    })
})

// 🔋 DB connections 
mongoose.connect(DB_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => console.log('------✨MongoDB Connected✨-----'))
    .catch(err => console.log(err));

// 🎈 Middlewares - ErrorHandler,Routes
app.use(express.json());
app.use(express.urlencoded({
    extended: false
})
);
app.use('/api',routes);
app.use(errorHandler);

const numcores = os.cpus().length;
if(cluster.isMaster){
    for(let i=0;i<numcores;i++){
        cluster.fork();
    }
    // in case worker died
    cluster.on('exit',(worker,code,signal)=>{
        console.log(`worker died : ${worker.process.pid}`);
        // create a new worker
        cluster.fork();
    });
}else{
    app.listen(API_PORT,process.env.IP,()=>{
        console.log(`🌠 Server running at http://localhost:${API_PORT}\n Process: ${process.pid}`);
    });
}