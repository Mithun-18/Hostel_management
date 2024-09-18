package com.mitk.hostel_management.controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mitk.hostel_management.models.Admin;
import com.mitk.hostel_management.models.Student;
import com.mitk.hostel_management.repository.StundentRepo;

@RestController
public class StudentController {
	@Autowired
	private StundentRepo studRepo;

	@GetMapping("/get-all-students")

	public List<Student> getAllStudents() {
		List<Student> stud = studRepo.getAll();
		return stud;
	}

	@PostMapping("/add-students")
	public Boolean addStudents(@RequestBody Student stud) {
		try {

			studRepo.save(stud);
			return true;
		} catch (Exception e) {
			System.out.println(e);
			return false;
		}
	}

	@GetMapping("/delete-student/{usn}")

	public Boolean deleteStudents(@PathVariable String usn) {
		try {
			studRepo.deleteByUsn(usn);
			return true;
		} catch (Exception e) {
			return false;
		}
	}
	
	@PostMapping("/student-login")
	public ResponseEntity<String> login(@RequestBody Student stud) {
        Student student = studRepo.studentLoginCredential(stud.getUSN(), stud.getPassword());
        
        if (student != null) {
            // Successful login
            return ResponseEntity.ok("Login successful!");
        } else {
            // Invalid credentials
            return ResponseEntity.status(401).body("Invalid USN or password");
        }
    }
	
//	
}
