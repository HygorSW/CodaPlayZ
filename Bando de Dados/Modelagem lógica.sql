CREATE DATABASE CodaPlayZ;
USE CodaPlayZ;

CREATE TABLE usuario (
    idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(300) NOT NULL,
    email VARCHAR(300) UNIQUE NOT NULL,
    senha VARCHAR(300) NOT NULL
);

CREATE TABLE playlist (
    idPlaylist INT AUTO_INCREMENT,
    pkUsuario INT NOT NULL,
    PRIMARY KEY (idPlaylist , pkUsuario),
    nome VARCHAR(300) NOT NULL,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT usuarioPlaylist FOREIGN KEY (pkUsuario)
        REFERENCES usuario (idUsuario)
);

CREATE TABLE musica (
    idMusica INT PRIMARY KEY AUTO_INCREMENT,
    idSpotify VARCHAR(300) UNIQUE
);

CREATE TABLE playlist_musica (
    fkPlaylist INT NOT NULL,
    fkMusica INT NOT NULL,
    data_adicao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (fkPlaylist , fkMusica),
    CONSTRAINT playlisAssociativa FOREIGN KEY (fkPlaylist)
        REFERENCES playlist (idPlaylist),
    CONSTRAINT musicaAssociativa FOREIGN KEY (fkMusica)
        REFERENCES musica (idMusica)
);

SELECT musica.*
FROM musica
JOIN playlist_musica ON musica.idMusica = playlist_musica.fkMusica
WHERE playlist_musica.fkPlaylist = 1;

SELECT * FROM playlist;
