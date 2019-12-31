const Spot = require('../models/Spot');
module.exports = {

    async show(req, res) {
        const { user_id } = req.headers;

        if(!user_id){
            return res.status(400).json({error: "Usuário não tem Spots cadastrados"});
        } 
        const spotsDashboard = await Spot.find({ user: user_id });

        return res.json(spotsDashboard);
    }
};