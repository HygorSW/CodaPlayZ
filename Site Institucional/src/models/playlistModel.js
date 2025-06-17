var database = require("../database/config")

function buscarMusica(idPlaylist) {
    var instrucaoSql = `
            SELECT * FROM playlist WHERE idPlaylist = ${idPlaylist};`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMusica
}