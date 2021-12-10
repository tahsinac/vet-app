# ENSF608 - Final Project Database
## Brandon Attai (UCID: 30146080)
## Kelten Falez (UCID: 30145189)
## Tahsin Chowdhury (UCID: 30141930)

DROP DATABASE IF EXISTS VET_APP_DB;
CREATE DATABASE VET_APP_DB; 
USE VET_APP_DB;

DROP TABLE IF EXISTS ANIMALS;
CREATE TABLE ANIMALS (
    animalID           integer AUTO_INCREMENT not null,
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
	alerts			  VARCHAR(30),
    
    
    primary key (animalID)
);

INSERT INTO ANIMALS (animalID, species, weight, tattooNum, cityTattoo, birthDate, breed, sex, rfid, microchip, diet, region, subspecies, distinguishingFeatures, color, alerts)
VALUES
('1', 'Dog', 3, 234234, 'HOC London', '12/07/2019', 'Beagle', 'MN', 17, 20, null, null, null, 'barks', 'Brown', null),
('2', 'Dog', 3, 234234, 'HOC Paris', '11/01/2018', 'Pitbull', 'MN', 30, 40, null, null, null, "barks a lot", "White",'needs attention'),
('3', 'Cow', 123, 981733, 'CBH India', '2018-02-29', 'Abigar', 'MN', 50, 60, 'Dairy', 'Spain', 'Taurus', null, null, 'needs attention');



DROP TABLE IF EXISTS USERS;
CREATE TABLE USERS (
    id                  integer AUTO_INCREMENT not null,
    username            VARCHAR(30),
    userType            VARCHAR(30),
    email               VARCHAR(30),
    activationDate      VARCHAR(30),
  	commenterFlag		BOOLEAN,

    
    primary key (ID)
);

INSERT INTO USERS (ID, username, userType, email, activationDate, commenterFlag)
VALUES
('1','John Doe','admin', 'admin@ucalgary.ca', '2021-03-04', FALSE),
('2','Jane Doe', 'animal health technician', 'a.technician@ucalgary.ca', '2021-03-04', TRUE),
('3','Joe Doe','teach techician', 'tt@ucalgary.ca', '2021-03-04', TRUE),
('4','Jack Doe', 'animal care attendant', 'aca.112@ucalgary.ca', '2021-03-04', FALSE),
('5','Just Doe', 'student', 'student123@ucalgary.ca', '2021-03-04', TRUE);



DROP TABLE IF EXISTS COMMENTS;
CREATE TABLE COMMENTS(
		commentID		integer AUTO_INCREMENT not null,
  	theDescription		VARCHAR(30),
  	animalID		integer,
  	userID			integer,
  
  
  	primary key (commentID),
  	foreign key (animalID) references ANIMALS(animalID) on update cascade,
  	foreign key (userID) references USERS(ID) on delete set null
);

INSERT INTO COMMENTS (commentID, theDescription, animalID, userID)
VALUES
('1', "No longer a good boy", '1', '2'),
('2', "Gaining weight", '2', '4'),
('3', "Broken leg", '2', '5');


DROP TABLE IF EXISTS IMAGES;
CREATE TABLE IMAGES(
		imageID				integer AUTO_INCREMENT not null,
  	imageType			VARCHAR(30),
  	uploaderID		integer,
  	animalID			integer,
  	createDate		VARCHAR(30),
  	address 			VARCHAR(30),
  
  
  	primary key (imageID),
  	foreign key (animalID) references ANIMALS(animalID) on update cascade,
  	foreign key (uploaderID) references USERS(ID) on delete set null
);

INSERT INTO IMAGES (imageID, imageType, animalID, uploaderID, createDate, address)
VALUES
('1', "profile", '1', '4', "02/02/2020", "img1.jpeg"),
('2', "injury", '2', '4', "02/02/2020", "img2.jpeg"),
('3', "treatment", '3', '4', "02/02/2020", "img3.jpeg"),
('4', "injury", '3', '4', "02/02/2020", "img4.jpeg");

DROP TABLE IF EXISTS HISTORY;
CREATE TABLE HISTORY(
	recordID 			integer AUTO_INCREMENT not null,
  	recordDate 		VARCHAR(30),
  	measurement		VARCHAR(30),
  	mvalue 				integer,
  	updaterID 		integer,
  	animalID			integer,
  
  	primary key (recordID),
  	foreign key (animalID) references ANIMALS(animalID) on update cascade,
  	foreign key (updaterID) references USERS(ID) on delete set null
);

INSERT INTO HISTORY(recordID, recordDate, measurement, mvalue, updaterID, animalID)
VALUES
(1, '2019-04-23', 'Weight', 66, 2, 1),
(2, '2019-07-23', 'Blood Concentration', 82, 2, 1),
(3, '2019-09-23', 'Blood Concentration', 91, 2, 1),
(4, '2019-04-26', 'Blood Concentration', 120, 3, 2),
(5, '2018-11-21', 'Heart beat', 33, 2, 2),
(6, '2019-04-23', 'temperature', 91, 3, 2),
(7, '2019-04-24', 'Dental Status', null, 2, 3);


DROP TABLE IF EXISTS PRESCRIPTIONS;
CREATE TABLE PRESCRIPTIONS(
    scriptRecord       integer AUTO_INCREMENT not null,
    theDate	           varchar(30),
    instructions       varchar(30),
    drugID             varchar(30),
    dosage             varchar(30),
    deliveryMethod     varchar(30),
    drugName           varchar(30),
  	prescriberID       integer,
    animalID           integer not null,
    # treatmentMethodId  integer not null,
    
    PRIMARY KEY (scriptRecord),
    FOREIGN KEY (prescriberID) REFERENCES USERS(ID) on delete set null,
    FOREIGN KEY (animalID) REFERENCES ANIMALS(animalID) on update cascade
    # foreign key (treatmentMethodId) references TreatmentMethod(treatmentId)
);

INSERT INTO PRESCRIPTIONS(scriptRecord, theDate, instructions, drugId, dosage, deliveryMethod, drugName, prescriberID, animalID)
VALUES
(1,  "08/12/2020", null, null, null, null, null, 3, 1),
(2, "01/10/2021", null, null, null, null, null, 3, 2),
(3, "01/10/2021", null, null, null, null, null, 3, 2),
(4, "01/10/2021", "Get treatment ASAP", null, "2x per day", null, "Tylenol", 3, 3);



DROP TABLE IF EXISTS ANIMAL_STATUS;
CREATE TABLE ANIMAL_STATUS (
    animalID     		integer,
    theDescription     varchar(50),
  	theDate					varchar(30),
  	location				varchar(30),
  	theStatus				varchar(30),
   

    FOREIGN KEY (animalID) REFERENCES ANIMALS(animalID) on update cascade
);

INSERT INTO ANIMAL_STATUS(animalID, theDescription, theDate, location, theStatus)
VALUES
(1, null, '2021-12-12', 'On Campus', 'Available'),
(2, 'Her foot is injured', '2021-11-01', 'Hospital', 'Injured');

DROP TABLE IF EXISTS MEDICAL_RECORDS_TYPE;
CREATE TABLE MEDICAL_RECORDS_TYPE (
    recordTypeID     integer not null,
    recordType             varchar(30),
   
    PRIMARY KEY (recordTypeID)
);

INSERT INTO MEDICAL_RECORDS_TYPE(recordTypeID, recordType)
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

DROP TABLE IF EXISTS HAVE;
CREATE TABLE HAVE(
    recordTypeID     integer not null,
    animalID         integer not null,
    
    FOREIGN KEY (recordTypeID) REFERENCES MEDICAL_RECORDS_TYPE(recordTypeID) on delete restrict on update cascade,
    FOREIGN KEY (animalID) REFERENCES ANIMALS(animalID) on delete restrict on update cascade,
    PRIMARY KEY (recordTypeID, animalID) 
);

DROP TABLE IF EXISTS TREATMENT_METHOD;
CREATE TABLE TREATMENT_METHOD (
    methodID     integer not null,
    methodtype         varchar(50),
   
    primary KEY (methodID)
);

INSERT INTO TREATMENT_METHOD(methodID, methodtype)
VALUES
(1,   'Physical Exam'),
(2,   'Blood Work'),
(3,   'Bordetella vaccine'),
(4,   'Dental cleaning'),
(5,   'Deworming'),
(6,   'Rabies Vaccination'),
(7,   'Rabies Vaccination');

DROP TABLE IF EXISTS CONTAIN;
CREATE TABLE CONTAIN(
    methodID     integer not null,
    scriptRecord integer not null,
    
    FOREIGN KEY (methodID) REFERENCES TREATMENT_METHOD(methodID) on delete restrict on update cascade,
    FOREIGN KEY (scriptRecord) REFERENCES PRESCRIPTIONS(scriptRecord) on delete restrict on update cascade,
    PRIMARY KEY (methodID, scriptRecord) 
);


