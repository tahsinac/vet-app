# Final-Project 607 Final Project
## Group 213
* Brandon Attai (UCID:)
* Kelten Falez (UCID: 30145189)
* Tahsin Chowdhury (UCID: 30141930)

* Jira board link here

## Database Instructions
1. Ensure that dummyvet.sql has been loaded and executed in MySQL workbench
2. In the Java IDE,  `navigate to > src > main > resources` and open `application.properties`
3. In application.properties, change the following lines:
    ```spring.datasource.url=jdbc:mysql://localhost:3306/DUMMYVET
    spring.datasource.username=root
    spring.datasource.password=password
    spring.jpa.hibernate.naming.implicit-strategy=org.hibernate.boot.model.naming.ImplicitNamingStrategyLegacyJpaImpl
    spring.jpa.hibernate.naming.physical-strategy=org.hibernate.boot.model.naming.PhysicalNamingStrategyStandardImpl
4. Navigate to `> src > main > java` and run  `Application.java`


## API endpoints
1. User story: VETAPP-11 Add Users
    * API endpoint (POST): http://localhost:8080/users
User story: VETAPP-13 Edit Users
API endpoint (PUT): http://localhost:8080/users
User story: VETAPP-12 Review Comments
API endpoint (GET): http://localhost:8080/animals/comments
API endpoint (GET): http://localhost:8080/animals/comments/{id}
API endpoint (PUT): http://localhost:8080/animals/comments/{id}
User story: VETAPP-15, VETAPP-25 Make/Take Comments
API endpoint (POST): http://localhost:8080/animals/comments
User story: VETAPP-19, VETAPP-28 View & Search
API endpoint (GET): http://localhost:8080/animals
API endpoint (GET): http://localhost:8080/animals/{id}
User story: VETAPP-100 View photos
API endpoint (GET): http://localhost:8080/animals/photos
API endpoint (GET): http://localhost:8080/animals/photos/{id}
User story: VETAPP-27, VETAPP-24 Monitor Animal Status
API endpoint (GET): http://localhost:8080/animals/status
API endpoint (GET): http://localhost:8080/animals/{id}
User story: VETAPP-17, VETAPP-18, VETAPP 23 Change/Update Animal Status
API endpoint (PUT): http://localhost:8080/animals/status
API endpoint (PUT): http://localhost:8080/animals/{id}
User story: VETAPP14 Upload Photos
API endpoint (POST): http://localhost:8080/animals/photos
API endpoint (POST): http://localhost:8080/animals/photos/{id}
User story: VETAPP18 Update Treatment
API endpoint (PUT): http://localhost:8080/animals/treatments/{id}
User story: VETAPP18 Diagnose & Prescribe Treatment
API endpoint (POST): http://localhost:8080/animals/prescriptions
API endpoint (PUT): http://localhost:8080/animals/prescriptions{scriptRecord}
User story VETAPP-16 Request Treatment (ASK BRANDON!!!!!!)
API endpoint(GET): http://localhost:8080/animals/prescriptions
API endpoint(GET): http://localhost:8080/animals/prescriptions{scriptRecord}
