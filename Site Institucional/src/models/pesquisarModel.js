var database = require("../database/config")

function adicionarMusica(idPlaylist,idSpotify) {
    var instrucaoSql = `
            INSERT INTO musica (pkPlaylist, idSpotify) VALUES ('${idPlaylist}','${idSpotify}');`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function adicionarMusicaRecente(idUsuario,idSpotify) {
    var instrucaoSql = `
            INSERT INTO musicasRecentes (pkUsuario, idSpotify) VALUES ('${idUsuario}','${idSpotify}');`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    adicionarMusica,
    adicionarMusicaRecente
}