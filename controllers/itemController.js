const itemModel = require('../models/item.model');

const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).send(items);
        console.log(items)
    } catch (error) {
        console.log(error)
    }
}
module.exports = {getItemController};