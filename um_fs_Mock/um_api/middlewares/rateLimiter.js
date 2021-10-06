import rateLimit from 'express-rate-limit';

//rate-limiter
const limiter = rateLimit({
    windowMs: 5 * 1000, // 5 sec
    max: 2 // limit each IP to 2 request per windowMs
  });
  
  
  export default limiter;