//package com.group213.vet.app.model;
//
//import javax.persistence.*;
//
//@Entity
//@Table(name = "Animals")
//public class Animal {
//    private int id;
//    private int weight;
//    private int tattoo;
//    private String city_tattoo;
//    private String bod;
//    private String breed;
//    private String sex;
//    private int rfid;
//    private int microchip;
//    private String she_status;
//    private String draught;
//    private String meat;
//    private String region;
//    private String subspecies;
//    private String distinguishing;
//    private String features;
//    private String color;
//
//
//    public Animal() {
//    }
//
//    public void setId(int id) {
//        this.id = id;
//    }
//
//    public void setWeight(int weight) {
//        this.weight = weight;
//    }
//
//    public void setTattoo(int tattoo) {
//        this.tattoo = tattoo;
//    }
//
//    public void setCity_tattoo(String city_tattoo) {
//        this.city_tattoo = city_tattoo;
//    }
//
//    public void setBod(String bod) {
//        this.bod = bod;
//    }
//
//    public void setBreed(String breed) {
//        this.breed = breed;
//    }
//
//    public void setSex(String sex) {
//        this.sex = sex;
//    }
//
//    public void setRfid(int rfid) {
//        this.rfid = rfid;
//    }
//
//    public void setMicrochip(int microchip) {
//        this.microchip = microchip;
//    }
//
//    public void setShe_status(String she_status) {
//        this.she_status = she_status;
//    }
//
//    public void setDraught(String draught) {
//        this.draught = draught;
//    }
//
//    public void setMeat(String meat) {
//        this.meat = meat;
//    }
//
//    public void setRegion(String region) {
//        this.region = region;
//    }
//
//    public void setSubspecies(String subspecies) {
//        this.subspecies = subspecies;
//    }
//
//    public void setDistinguishing(String distinguishing) {
//        this.distinguishing = distinguishing;
//    }
//
//    public void setFeatures(String features) {
//        this.features = features;
//    }
//
//    public void setColor(String color) {
//        this.color = color;
//    }
//
//    public Animal(int id, int weight, int tattoo, String city_tattoo, String bod,
//                  String breed, String sex, int rfid,
//                  int microchip, String she_status, String draught,
//                  String meat, String region, String subspecies,
//                  String distinguishing, String features, String color) {
//        this.id = id;
//        this.weight = weight;
//        this.tattoo = tattoo;
//        this.city_tattoo= city_tattoo;
//        this.bod = bod;
//        this.breed = breed;
//        this.sex = sex;
//        this.rfid = rfid;
//        this.microchip = microchip;
//        this.she_status = she_status;
//        this.draught = draught;
//        this.meat = meat;
//        this.region = region;
//        this.subspecies = subspecies;
//        this.distinguishing = distinguishing;
//        this.features = features;
//        this.color = color;
//    }
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    public int getId() {
//        return id;
//    }
//
//    public int getWeight() {
//        return weight;
//    }
//
//    public int getTattoo() {
//        return tattoo;
//    }
//
//    public String getCity_tattoo() {
//        return city_tattoo;
//    }
//
//    public String getBod() {
//        return bod;
//    }
//
//    public String getBreed() {
//        return breed;
//    }
//
//    public String getSex() {
//        return sex;
//    }
//
//    public int getRfid() {
//        return rfid;
//    }
//
//    public int getMicrochip() {
//        return microchip;
//    }
//
//    public String getShe_status() {
//        return she_status;
//    }
//
//    public String getDraught() {
//        return draught;
//    }
//
//    public String getMeat() {
//        return meat;
//    }
//
//    public String getColor() {
//        return color;
//    }
//
//    public String getFeatures() {
//        return features;
//    }
//
//    public String getDistinguishing() {
//        return distinguishing;
//    }
//
//    public String getSubspecies() {
//        return subspecies;
//    }
//
//    public String getRegion() {
//        return region;
//    }
//}