import Joi from 'joi';


const userSchema = Joi.object({
    name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    password: Joi.string()
    .pattern(new RegExp('^[a-zA-Z0-9&#@!%$*]{8,40}$')).required(),
    role: Joi.string()
});

export default userSchema;