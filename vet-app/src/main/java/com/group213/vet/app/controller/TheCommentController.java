package com.group213.vet.app.controller;

import com.group213.vet.app.model.Animal;
import com.group213.vet.app.model.TheComment;
import com.group213.vet.app.service.TheCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/animals/comments")
public class TheCommentController {

    @Autowired
    TheCommentService theCommentService;

    @GetMapping("")
    public List<TheComment> getTheComment() { return theCommentService.listAllTheComments(); }

    @GetMapping("/{id}")
    public ResponseEntity<TheComment> getTheCommentById(@PathVariable Integer id){
        try {
            TheComment theComment = theCommentService.getTheComment(id);
            return new ResponseEntity<TheComment>(theComment, HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("")
    public ResponseEntity<?> addTheComment(@RequestBody TheComment theComment){
        try {
            theCommentService.saveTheComment(theComment);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch(Exception e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<?> updateTheComment(@RequestBody TheComment theComment, @PathVariable Integer id){
        try{
            TheComment existingComment = theCommentService.getTheComment(id);
           theComment.setCommentId(id);
            theCommentService.saveTheComment(theComment);
            return new ResponseEntity<>(HttpStatus.OK);
        }catch (NoSuchElementException e){
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/{id}")
    public void deleteTheComment(@PathVariable Integer id){
        theCommentService.deleteTheComment(id);
    }
}

