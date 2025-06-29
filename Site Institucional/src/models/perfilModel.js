var database = require("../database/config")

function cadastrarPlaylist(idUsuario, nomePlaylist) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ")

    var instrucaoSql = `
        INSERT INTO playlist (pkUsuario, nome, data_criacao) VALUES (${idUsuario}, '${nomePlaylist}', now())`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarPlaylist(pkUsuario) {
    var instrucaoSql = `
        SELECT * FROM playlist WHERE pkUsuario = ${pkUsuario};`;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMusicasRecentes(pkUsuario) {
    var instrucaoSql = `
        SELECT * FROM musicasRecentes WHERE fkUsuario = ${pkUsuario} ORDER BY idMusica DESC LIMIT 12;
        `;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarMusicasAleatoria() {
    var instrucaoSql = `
        SELECT * FROM musica LIMIT 12;
        `;
    console.log("Executando a instrução SQL: Consulta de resultados \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarPlaylist,
    buscarPlaylist,
    buscarMusicasRecentes,
    buscarMusicasAleatoria
}