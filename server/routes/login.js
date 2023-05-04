const jwt = require('jsonwebtoken');
const db = require('../database').databaseConnection;

const getUser = async (userId) => {
    const q1 = 'SELECT * FROM users WHERE user_id = ?'
    db.query(q1, userId, (err, data) => {
        resolve(data)
        })
}

module.exports = async (req, res) => {
    const q = 'SELECT role FROM user_roles WHERE user_id = ?'
    const userId = req.params.user_id

    const user = await new Promise((resolve => {
        const q1 = 'SELECT * FROM users WHERE user_id = ?'
        db.query(q1, userId, (err, data) => {
            if(err) console.error('ERROR', err);
        resolve(data)
        })
    }))

    const token = jwt.sign({user}, process.env.MY_SECRET, {expiresIn: "1h"});
    res.cookie("token", token, {
        httpOnly: true,
    })
    db.query(q, userId, (err, data) => {
        if(err) console.error('ERROR', err);
        res.json(data)
        })
};