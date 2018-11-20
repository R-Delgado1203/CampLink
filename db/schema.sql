DROP DATABASE IF EXISTS alumni_db;
CREATE DATABASE alumni_db;

USE alumni_db;

CREATE TABLE signup_info (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    bootcamp_year VARCHAR(25),
    email VARCHAR(100) NOT NULL,
    p_password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE profile_info (
    id INTEGER AUTO_INCREMENT NOT NULL,
    profile_pic VARCHAR(100),
    github VARCHAR(100),
    portfolio VARCHAR(100), 
    favorite_language VARCHAR(50),
    current_job VARCHAR(50),
    hiring BOOLEAN,
    job_searching BOOLEAN,
    PRIMARY KEY (id)
);