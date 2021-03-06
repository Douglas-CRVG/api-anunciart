import joi from "joi";

const createSchema = joi.object({
    name: joi.string().required(),
    description: joi.string().required(),
    fileName: joi.string().required(),
});

export default createSchema;