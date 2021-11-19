DROP DATABASE IF EXISTS DUMMYVET;
CREATE DATABASE DUMMYVET; 
USE DUMMYVET;

CREATE TABLE Users (
    id                  integer AUTO_INCREMENT not null,
    username            VARCHAR(30),
    theType             VARCHAR(30),
    email               VARCHAR(30),
    activationDate      VARCHAR(30),

    
    primary key (id)
);

INSERT INTO Users (id, username, theType, email, activationDate)
VALUES
('1','user1','admin', 'admin@ucalgary.ca', '2021-03-04'),
('2','user2', 'animal technician', 'a.technician@ucalgary.ca', '2021-03-04'),
('3','user3','teach tech', 'tt@ucalgary.ca', '2021-03-04'),
('4','user4', 'animal technician', 'b.technician@ucalgary.ca', '2021-03-04');

DROP TABLE IF EXISTS Animals;
CREATE TABLE Animals (
    animalId           integer AUTO_INCREMENT not null,
    species             VARCHAR(30),
    weight              integer,
    tattooNum           integer,
    cityTattoo          VARCHAR(30),
    birthDate           VARCHAR(30),
    breed               VARCHAR(30),
    sex                 VARCHAR(30),
    rfid                long,
    microchip           long,
    theStatus              VARCHAR(30),
    diet                VARCHAR(30),
    region              VARCHAR(30),
    subspecies          VARCHAR(30),
    distinguishingFeatures   VARCHAR(30),
    color               VARCHAR(30),
    requestedBy			integer,
	alerts			  VARCHAR(30),
    
    
    primary key (animalId),
    foreign key (requestedBy) references Users(id)
);

INSERT INTO Animals (animalId, species, weight, tattooNum, cityTattoo, birthDate, breed, sex, rfid, microchip, theStatus, diet, region, subspecies, distinguishingFeatures, color, requestedBy, alerts)
VALUES
('1', 'Dog', 3, 234234, 'HOC London', '12/07/2019', 'Beagle', 'MN', 176387613813, 20, 'Available', null, null, null, 'barks', 'Brown', null, null),
('2', 'Dog', 3, 234234, 'HOC Paris', '11/01/2018', 'Pitbull', 'MN', 30, 40, 'Available', null, null, null, "barks a lot", "White", 2, 'needs attention'),
('3', 'Cow', 123, 981733, 'CBH India', '2018-02-29', 'Abigar', 'MN', 50, 60, 'Sick', 'Dairy', 'Spain', 'Taurus', null, null, '2', 'needs attention');
-- (1, 'test', 1, 1, 'test', 'test', 'test','test',10, 10, 'test', null, null, null, 'test', 'test');

DROP TABLE IF EXISTS AnimalStatus;
CREATE TABLE AnimalStatus (
<<<<<<< HEAD
    statusId           integer AUTO_INCREMENT not null,
=======
>>>>>>> kelten_1
    animalId           integer,
    theDate            VARCHAR(30),
    theDescription     VARCHAR(30),
    location           VARCHAR(30),
    theStatus          VARCHAR(30),
<<<<<<< HEAD

    primary key (statusId),
    foreign key (animalId) references Animals(animalId)
);

INSERT INTO AnimalStatus (statusId, animalId, theDate, theDescription, location, theStatus)
VALUES
('1', '1','2021-12-12', null, 'In Campus', 'Available'),
('2', '2','2021-11-01', 'Her foot is injured', 'Hospital', 'Injured');
=======
	
    foreign key (animalId) references Animals(animalId)
);

INSERT INTO AnimalStatus (animalId, theDate, theDescription, location, theStatus)
VALUES
('1','2021-12-12', null, 'In Campus', 'Available'),
('2','2021-11-01', 'Her foot is injured', 'Hospital', 'Injured');
>>>>>>> kelten_1

DROP TABLE IF EXISTS AnimalStatusImages;
CREATE TABLE AnimalStatusImages (
    imageId            integer AUTO_INCREMENT not null,
    animalId           integer,
    statusHistory      integer,
    
    primary key (imageId),
    foreign key (animalId) references Animals(animalId)
);

INSERT INTO AnimalStatusImages(imageId, animalId, statusHistory)
VALUES
(1, 2, 1),
(2, 2, 2);

DROP TABLE IF EXISTS ExampleHistory;
CREATE TABLE ExampleHistory (
    recordId            integer,
    theDate            VARCHAR(30),
    measurement        VARCHAR(30),
    theValue           VARCHAR(30),
    theUser            integer,
    animal              integer,
    
    primary key (recordId),
    foreign key (animal) references Animals(animalId),
    foreign key (theUser) references Users(id)
);

INSERT INTO ExampleHistory (recordId, theDate, measurement, theValue, theUser, animal)
VALUES
('1','2019-04-01', 'weight', null, '2', '1'),
('2','2019-04-26', 'blood concentration', null, '3', '1');

DROP TABLE IF EXISTS Images;
CREATE TABLE Images(
<<<<<<< HEAD
    imageId            integer AUTO_INCREMENT not null,
=======
    imageId            integer,
>>>>>>> kelten_1
    userId            integer,
    creationDate         VARCHAR(30),
    theFile                VARCHAR(30),
    animalId            integer,
    theType            VARCHAR(30),
    
    primary key (imageId),
    foreign key (userId) references Users(id),
    foreign key (animalId) references Animals(animalId)
);

INSERT INTO Images (imageId, userId, creationDate, theFile, animalId, theType)
VALUES
('1','1', '2021-03-08', 'image1.png', '1', 'profile'),
('2','4', '2021-03-09', 'image2.png', '2', 'injury');



DROP TABLE IF EXISTS TheComment;
CREATE TABLE TheComment (
    commentId           integer AUTO_INCREMENT not null,
    userId              integer,
    animalId            integer,
    theDescription      varchar(30),
    
    primary key (commentId),
    foreign key (animalId) references Animals(animalId),
    foreign key (userId) references Users(id)
);

INSERT INTO TheComment(commentId, userId, animalId, theDescription)
VALUES
(1, 1, 1, "He's ill."),
(2, 1, 2, "She's hurt.");


DROP TABLE IF EXISTS TreatmentMethod;
CREATE TABLE TreatmentMethod (
    treatmentId        integer not null,
    theType            varchar(30),
    primary key (treatmentId)
);

INSERT INTO TreatmentMethod(treatmentId, theType)
VALUES
(1, "Physical exam"),
(2, "Blood work"),
(3,	'Bordetella vaccine'),
(4,	'Dental cleaning'),
(5,	'Deworming'),
(6,	'Rabies Vaccination'),
(7,	'Chemo Treatment');


DROP TABLE IF EXISTS PrescriptionRecords;
CREATE TABLE PrescriptionRecords(
    scriptRecord       integer AUTO_INCREMENT not null,
    userId             integer not null,
    animalId           integer not null,
    theDate            varchar(30),
    instructions       varchar(30),
    drugId             varchar(30),
    dosage             varchar(30),
    deliveryMethod     varchar(30),
    drugName           varchar(30),
<<<<<<< HEAD
--     treatmentMethodId  integer not null,
    
    primary key (scriptRecord),
    foreign key (userId) references Users(id),
    foreign key (animalId) references Animals(animalId)
    -- foreign key (treatmentMethodId) references TreatmentMethod(treatmentId)
);

INSERT INTO PrescriptionRecords(scriptRecord, userId, animalId, theDate, instructions, drugId, dosage, deliveryMethod, drugName)-- , treatmentMethodId)
VALUES
(1, 3, 1, "08/12/2020", null, null, null, null, null),-- , 1),
(2, 3, 2, "01/10/2021", null, null, null, null, null),-- , 2),
(3, 3, 2, "01/10/2021", null, null, null, null, null),
(4, 3, 1, "01/10/2021", null, null, null, null, null);-- , 3);
=======
    treatmentMethodId  integer not null,
    
    primary key (scriptRecord),
    foreign key (userId) references Users(id),
    foreign key (animalId) references Animals(animalId),
    foreign key (treatmentMethodId) references TreatmentMethod(treatmentId)
);

INSERT INTO PrescriptionRecords(scriptRecord, userId, animalId, theDate, instructions, drugId, dosage, deliveryMethod, drugName, treatmentMethodId)
VALUES
(1, 3, 1, "08/12/2020", null, null, null, null, null, 1),
(2, 3, 2, "01/10/2021", null, null, null, null, null, 2),
(3, 3, 2, "01/10/2021", null, null, null, null, null, 3);
>>>>>>> kelten_1
 


DROP TABLE IF EXISTS MedicalRecordsType;
CREATE TABLE MedicalRecordsType (
    id               integer not null,
    type             varchar(30),
   
    primary key (id)
);

INSERT INTO MedicalRecordsType(id, type)
VALUES
(1,   'XRAY'),
(2,   'DICOm'),
(3,   'SOAP'),
(4,   'FORM'),
(5,   'IMAGE'),
(6,   'NOTE'),
(7,   'LAB'),
(8,   'LINK'),
(9,   'RECHECKS'),
(10,  'DX'),
(11,  'SURGERY'),
(12,  'XRAY'),
(13,  'TRANSFERS'),
(14,  'STUDENT SOAP'),
(15,  'PROB'),
(16,  'INVOICE'),
(17,  'PRODUCT NOTE');


