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

CREATE TABLE artista (
    idArtista INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    idSpotify VARCHAR(300)
);


CREATE TABLE musica (
    idMusica INT AUTO_INCREMENT,
    fkArtista INT,
    PRIMARY KEY (idMusica , fkArtista),
    titulo VARCHAR(300) NOT NULL,
    idSpotify VARCHAR(300) UNIQUE,
    CONSTRAINT artistaMusica FOREIGN KEY (fkArtista)
        REFERENCES artista (idArtista)
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