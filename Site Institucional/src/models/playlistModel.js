var database = require("../database/config")

function buscarMusica(idPlaylist) {
    var instrucaoSql = `
            SELECT * FROM playlist WHERE idPlaylist = ${idPlaylist};`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function deletarMusica(idPlaylist, idMusica) {
    var instrucaoSql = `
        DELETE FROM playlist_musica WHERE fkPlaylist = ${idPlaylist} AND fkMusica = ${idMusica};`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function editarPlaylist(idPlaylist, nomePlaylist, descricaoPlaylist) {
    var instrucaoSql = `
        UPDATE playlist 
        SET nome = '${nomePlaylist}', 
            descriacao = '${descricaoPlaylist}' 
        WHERE idPlaylist = ${idPlaylist};
    `;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPlaylist(pkPlaylist) {
    var instrucaoSql = `
        SELECT * FROM playlist WHERE idPlaylist = ${pkPlaylist};`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarMusica,
    deletarMusica,
    editarPlaylist,
    buscarPlaylist
}