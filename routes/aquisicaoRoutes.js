const router = require('express').Router();
const { getAquisicoes } = require('../controllers/aquisicaoController')

router.get("/", async (req, res) => {
    res.send(await getAquisicoes())
})

module.exports = router;