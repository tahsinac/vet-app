package com.group213.vet.app.model;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@Getter @Setter
@NoArgsConstructor
@Table(name = "Animals")
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int animalId;
    private String species;
    private int weight;
    private int tattooNum;
    private String cityTattoo;
    private String birthDate;
    private String breed;
    private String sex;
    private long rfid;
    private long microchip;
    private String theStatus;
    private String diet;
    private String region;
    private String subspecies;
    private String distinguishingFeatures;
    private String color;
    private String requestedBy;
    private String alerts;
    public String approvalStatus;
    public String requestStatus;


    public Animal(int animalId, String species, int weight, int tattooNum, String cityTattoo, String birthDate,
                  String breed, String sex, int rfid, int microchip, String theStatus, String diet,
                  String region, String subspecies, String distinguishingFeatures, String color, String requestedBy,
                  String alerts, String approvalStatus, String requestStatus) {
        this.animalId = animalId;
        this.species = species;
        this.weight = weight;
        this.tattooNum = tattooNum;
        this.cityTattoo = cityTattoo;
        this.birthDate = birthDate;
        this.breed = breed;
        this.sex = sex;
        this.rfid = rfid;
        this.microchip = microchip;
        this.theStatus = theStatus;
        this.diet = diet;
        this.region = region;
        this.subspecies = subspecies;
        this.distinguishingFeatures = distinguishingFeatures;
        this.color = color;
        this.requestedBy = requestedBy;
        this.alerts = alerts;
        this.approvalStatus = approvalStatus;
        this.requestStatus = requestStatus;
    }

    public int getAnimalId() {
        return animalId;
    }

    @OneToMany(targetEntity = PrescriptionRecords.class, cascade = CascadeType.ALL)
    @JoinColumn(name = "animalId", referencedColumnName = "animalId")
    private List<PrescriptionRecords> prescriptionRecords;

    @OneToOne(targetEntity = AnimalStatus.class, cascade=CascadeType.ALL)
    @JoinColumn(name = "animalId", referencedColumnName = "animalId")
    private AnimalStatus animalStatus;

    @OneToOne(targetEntity = AnimalRequests.class, cascade=CascadeType.ALL)
    @JoinColumn(name = "animalId", referencedColumnName = "animalId")
    private AnimalRequests animalRequests;

    @OneToMany(targetEntity = AnimalPhoto.class, cascade=CascadeType.ALL)
    @JoinColumn(name = "animalId", referencedColumnName = "animalId")
    private List<AnimalPhoto> animalPhoto;

    @OneToMany(targetEntity = TheComment.class, cascade=CascadeType.ALL)
    @JoinColumn(name = "animalId", referencedColumnName = "animalId")
    private List <TheComment> theComment;

}