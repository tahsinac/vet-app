package com.group213.vet.app.model;


import javax.persistence.*;

@Entity // Annotate the class is an entity in the database
@Table(name="Users") //Annotate the name of the table in the database
public class User {

    private int id;
    private String the_name;
    private String email;
    private String activation_date;

    public User(){

    }

    public User(int id, String the_name, String email, String activation_date){
        this.id = id; //Can set to use Random UUID
        this.the_name = the_name;
        this.email = email;
        this.activation_date = activation_date;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //Generate strategies for the values of primary keys
    public int getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }

    //Getters and Setters
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getThe_name() {
        return the_name;
    }

    public void setThe_name(String the_name) {
        this.the_name = the_name;
    }

    public String getActivation_date() {
        return activation_date;
    }

    public void setActivation_date(String activation_date) {
        this.activation_date = activation_date;
    }
}
