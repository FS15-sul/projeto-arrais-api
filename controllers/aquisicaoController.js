const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function getAquisicoes(){
    return await prisma.aQUISICAO.findMany()
}

module.exports = {
    getAquisicoes
}