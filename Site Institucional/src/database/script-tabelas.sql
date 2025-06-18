CREATE DATABASE CodaPlayZ;
USE CodaPlayZ;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(300) NOT NULL,
    email VARCHAR(300) UNIQUE NOT NULL,
    senha VARCHAR(300) NOT NULL,
    imagem_perfil TEXT
);

CREATE TABLE musicasRecentes (
    idMusica INT PRIMARY KEY AUTO_INCREMENT,
    fkUsuario INT,
    CONSTRAINT musicaUsuario FOREIGN KEY (fkUsuario) REFERENCES usuario (idUsuario),
    idSpotify VARCHAR(300)
);

CREATE TABLE playlist (
    idPlaylist INT PRIMARY KEY AUTO_INCREMENT,
    pkUsuario INT NOT NULL,
    nome VARCHAR(300) NOT NULL,
    descriacao TEXT,
    imagem_playlist TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT usuarioPlaylist FOREIGN KEY (pkUsuario)
        REFERENCES usuario (idUsuario)
);

CREATE TABLE musica (
    idMusica INT AUTO_INCREMENT,
    idSpotify VARCHAR(300),
    pkPlaylist INT,
    PRIMARY KEY (idMusica, pkPlaylist),
    CONSTRAINT playlistMusica FOREIGN KEY (pkPlaylist) REFERENCES playlist (idPlaylist)
);

SELECT musica.*
FROM musica
JOIN playlist_musica ON musica.idMusica = playlist_musica.fkMusica
WHERE playlist_musica.fkPlaylist = 1;

SELECT * FROM usuario;

SELECT * FROM playlist;
