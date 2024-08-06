import Joi from "joi";
const leaderboardSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    score: Joi.number().required(),
});
export default leaderboardSchema;
