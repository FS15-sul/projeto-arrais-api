const { login } = require('../controllers/usuarioController');

const router = require('express').Router();

router.post("/login", async (req, res) => {
    res.send(await login(req.body))
})

module.exports = router;