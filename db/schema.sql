CREATE DATABASE alumni_db;

USE alumni_db;

CREATE TABLE signup_info (
    id INTEGER AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    p_password VARCHAR(50),
    PRIMARY KEY (id)
);

CREATE TABLE profile_info (
    bootcamp_year VARCHAR(25),
    profile_pic VARCHAR(100),
    github VARCHAR(100),
    portfolio VARCHAR(100), 
    favorite_language VARCHAR(50) NOT NULL,
    current_job VARCHAR(50),
    hiring BOOLEAN,
    job_searching BOOLEAN,
    PRIMARY KEY (id)
);