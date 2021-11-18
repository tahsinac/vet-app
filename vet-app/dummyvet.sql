DROP DATABASE IF EXISTS DUMMYVET;
CREATE DATABASE DUMMYVET; 
USE DUMMYVET;

DROP TABLE IF EXISTS Animal;
CREATE TABLE Animal (
	id					integer not null,
	weight				integer,
    tattoo				integer,
	city_tattoo			VARCHAR(30),
    bod					VARCHAR(30),
	breed				VARCHAR(30),
    sex					VARCHAR(30),
    rfid				integer,
    microchip			integer,
    she_status			VARCHAR(30),
    draught				VARCHAR(30),
    meat				VARCHAR(30),
    region				VARCHAR(30),
    subspecies			VARCHAR(30),
    distinguishing		VARCHAR(30),
    features			VARCHAR(30),
    color				VARCHAR(30),
    
    
	primary key (id)
);

INSERT INTO Animal (id, weight, tattoo, city_tattoo, bod, breed, sex, rfid, microchip, she_status, draught, meat, region, subspecies, distinguishing, features, color)
VALUES
('1','3','234234','HOC London', '2018-08-15', 'Beagle', 'MN', '19', '5','Available', null, null, null, null, null, null, 'Black and white'),
('2','68','564543','ABC Paris', '2018-08-31', 'Vanners', 'FM', '17', '2', 'Injured',null, null, null, null, 'High-stepping trot, flashy', 'appearance', null);


DROP TABLE IF EXISTS AnimalStatusHistory;
CREATE TABLE AnimalStatusHistory (
	id					integer,
	date_and_time		VARCHAR(30),
    location			VARCHAR(30),
	the_description		VARCHAR(30),
	the_status			VARCHAR(30),
	animal				integer,
    
	primary key (id)
);

INSERT INTO AnimalStatusHistory (id, date_and_time, the_description, location, the_status, animal)
VALUES
('1','2021-12-12', null, 'In Campus', 'Available', '1'),
('2','2021-11-01', 'Her foot is injured', 'Hospital', 'Injured', '2');


DROP TABLE IF EXISTS History;
CREATE TABLE History (
	id					integer,
	the_date			VARCHAR(30),
	the_type			VARCHAR(30),
	the_value			VARCHAR(30),
    the_user			integer,
	animal				integer,
    
	primary key (id)
);

INSERT INTO History (id, the_date, the_type, the_value, the_user, animal)
VALUES
('1','2019-04-01', 'weight', null, '2', '1'),
('2','2019-04-26', 'blood concentration', null, '3', '1');

DROP TABLE IF EXISTS Images;
CREATE TABLE Images (
	id					integer,
	the_user			integer,
	create_date			VARCHAR(30),
	address				VARCHAR(30),
	animal				integer,
    the_type			VARCHAR(30),
    
	primary key (id)
);

INSERT INTO Images (id, the_user, create_date, address, animal, the_type)
VALUES
('1','1', '2021-03-08', 'image1.png', '1', 'profile'),
('2','4', '2021-03-09', 'image2.png', '2', 'injury');


DROP TABLE IF EXISTS AnimalStatusImages;
CREATE TABLE AnimalStatusImages (
	id					integer,
	status_history		integer,
	image				integer,

    
	primary key (id)
);

INSERT INTO AnimalStatusImages (id, status_history, image)
VALUES
('1','1', '1'),
('2','2', '1');


DROP TABLE IF EXISTS Users;
CREATE TABLE Users (
	id					integer AUTO_INCREMENT not null,
	the_name			VARCHAR(30),
	email				VARCHAR(30),
    activation_date		VARCHAR(30),

    
	primary key (id)
);

INSERT INTO Users (id, the_name, email, activation_date)
VALUES
('1','user 1', 'admin@ucalgary.ca', '2021-03-04'),
('2','user2', 'a.technician@ucalgary.ca', '2021-03-04');

DROP TABLE IF EXISTS MedicalRecordsType;
CREATE TABLE MedicalRecordsType (
    id                    integer not null,
    the_type            varchar(30),
    primary key (id)
);

INSERT INTO MedicalRecordsType(id, the_type)
VALUES
(1, "XRAY"),
(2, "DICOm");

DROP TABLE IF EXISTS Prescription;
CREATE TABLE Prescription (
    id                    integer not null,
    the_user            integer,
    animal                integer,
    create_date            varchar(30),
    the_description        varchar(30),
    
    primary key (id),
    foreign key (animal) references Animal(id),
    foreign key (the_user) references Users(id)
);

INSERT INTO Prescription(id, the_user, animal, create_date, the_description)
VALUES
(1, 1, 1, "2021/11/02", "take meds"),
(2, 2, 2, "2021/11/02", "take meds forever");

DROP TABLE IF EXISTS PrescriptionItem;
CREATE TABLE PrescriptionItem (
    id                    integer not null,
    the_type            varchar(30),
    method                varchar(30),
    the_name            varchar(30),
    prescription        integer,
    
    primary key (id),
    foreign key (prescription) references Prescription(id)
);

INSERT INTO PrescriptionItem(id, the_type, method, the_name, prescription)
VALUES
(1, "Hourly", 1, "body temparature care", 1),
(2, "Mourly", 2, "something care", 2);



DROP TABLE IF EXISTS TreatmentMethod;
CREATE TABLE TreatmentMethod (
    id                    integer not null,
    the_type            varchar(30),
    primary key (id)
);

INSERT INTO TreatmentMethod(id, the_type)
VALUES
(1, "Physical exam"),
(2, "Blood work");

DROP TABLE IF EXISTS TheComment;
CREATE TABLE TheComment (
    id                    integer not null,
    the_user            integer,
    animal                integer,
    the_description        varchar(30),
    
    primary key (id),
    foreign key (animal) references Animal(id),
    foreign key (the_user) references Users(id)
);

INSERT INTO TheComment(id, the_user, animal, the_description)
VALUES
(1, 1, 1, "He's ill."),
(2, 1, 2, "She's hurt.");


