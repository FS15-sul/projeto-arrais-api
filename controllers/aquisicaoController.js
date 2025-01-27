const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function getAquisicoes() {
    return await prisma.aQUISICAO.findMany()
}

async function getAquisicao(id) {
    return await prisma.AQUISICAO.findFirst({
        where:{
            CD_AQUISICAO: Number(id)
        },
        // include: {
        //     VEICULO: true // Inclui as informações do modelo do veículo
        // }
    })
}

module.exports = {
    getAquisicoes,
    getAquisicao
}