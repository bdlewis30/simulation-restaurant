const axios = require('axios');

//74M
module.exports = {
    create: (req, res) => {
        const {menu_name, menu_desc, menu_price} = req.body
        const db = req.app.get('db')

        db.create_menu_item([menu_name, menu_desc, menu_price])
        .then(results => res.send(results)) //44D
    }
}