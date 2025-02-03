const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient()

async function login(dados){
    return await prisma.uSUARIO.findFirst({
        where: {
            NM_USU: dados.usuario,
            AND: {
                NM_SENHA: dados.senha
            }
        }
    })
}

module.exports = {
    login
}