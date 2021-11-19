package com.group213.vet.app.controller;

import com.group213.vet.app.model.AnimalPhoto;
import com.group213.vet.app.model.AnimalStatus;
import com.group213.vet.app.service.AnimalPhotoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping(path = "/animals/photos")
public class AnimalPhotoController {

    @Autowired
    AnimalPhotoService animalPhotoService;

    @GetMapping("")
    public List<AnimalPhoto> getAnimalPhoto(){
        return animalPhotoService.listAllAnimalPhoto();
    }

    @GetMapping("/{id}")
    public ResponseEntity<AnimalPhoto> getAnimalPhotoById(@PathVariable Integer id){
        try {
            AnimalPhoto animalPhoto = animalPhotoService.getAnimalPhoto(id);
            return new ResponseEntity<AnimalPhoto>(animalPhoto, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> addAnimalPhoto(@RequestBody AnimalPhoto animalPhoto){
        try {
            animalPhotoService.saveAnimalPhoto(animalPhoto);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateAnimalPhoto(@RequestBody AnimalPhoto animalPhoto, @PathVariable Integer id){
        try{
            AnimalPhoto existingAnimalPhoto = animalPhotoService.getAnimalPhoto(id);
            animalPhoto.setAnimalId(id);
            animalPhotoService.saveAnimalPhoto(animalPhoto);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> removePhoto(@PathVariable Integer id){
        try{
            animalPhotoService.deleteAnimalPhoto(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch(EmptyResultDataAccessException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

}
