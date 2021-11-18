package com.group213.vet.app.controller;

import com.group213.vet.app.model.Animal;
import com.group213.vet.app.model.AnimalStatus;
import com.group213.vet.app.service.AnimalService;
import com.group213.vet.app.service.AnimalStatusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(path = "/animals/status")
public class AnimalStatusController {

    @Autowired
    AnimalStatusService animalStatusService;

    @GetMapping("")
    public List<AnimalStatus> getAnimalStatus(){
        return animalStatusService.listAllAnimalStatus();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnimalStatus> getAnimalStatusById(@PathVariable Integer id){
        try {
            AnimalStatus animalStatus = animalStatusService.getAnimalStatus(id);
            return new ResponseEntity<AnimalStatus>(animalStatus, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
