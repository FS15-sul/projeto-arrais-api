const router = require('express').Router();
const { getAquisicoes, getAquisicao } = require('../controllers/aquisicaoController')

router.get("/", async (req, res) => {
    res.send(await getAquisicoes())
})
router.get("/:id", async (req, res) => {
    res.send(await getAquisicao(req.params.id))
})

module.exports = router;