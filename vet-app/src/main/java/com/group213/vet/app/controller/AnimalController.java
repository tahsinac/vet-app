//package com.group213.vet.app.controller;
//
//import com.group213.vet.app.model.Animal;
//import com.group213.vet.app.service.AnimalService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//import java.util.NoSuchElementException;
//
//@RestController
//@RequestMapping(path = "/animals")
//public class AnimalController {
//
//    @Autowired
//    AnimalService animalService;
//
//    @GetMapping("")
//    public List<Animal> getAnimal(){
//        return animalService.listAllAnimal();
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Animal> getAnimalById(@PathVariable Integer id){
//        try {
//            Animal animal = animalService.getAnimal(id);
//            return new ResponseEntity<Animal>(animal, HttpStatus.OK);
//        }catch (NoSuchElementException e){
//            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//        }
//    }
//
//    @PostMapping("/new")
//    public ResponseEntity<?> addAnimal(@RequestBody Animal animal){
//        try {
//            animalService.saveAnimal(animal);
//            return new ResponseEntity<>(HttpStatus.CREATED);
//        }catch(Exception e){
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }
//
//    @PutMapping("/modify/{id}")
//    public ResponseEntity<?> updateAnimal(@RequestBody Animal animal, @PathVariable Integer id){
//        try{
//            Animal existingAnimal = animalService.getAnimal(id);
//            animal.setId(id);
//            animalService.saveAnimal(animal);
//            return new ResponseEntity<>(HttpStatus.OK);
//        }catch (NoSuchElementException e){
//            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
//        }
//    }
//
//
//    @DeleteMapping("/remove/{id}")
//    public void deleteAnimal(@PathVariable Integer id){
//        animalService.deleteAnimal(id);
//    }
//}