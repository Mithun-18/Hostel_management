package com.mitk.hostel_management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.mitk.hostel_management.models.Admin;
import com.mitk.hostel_management.repository.AdminRepo;

@RestController
public class adminController {
	@Autowired
	private AdminRepo admnRepo;

	@PostMapping("/admin-login")
	public ResponseEntity<String> login(@RequestBody Admin admn) {

		Admin ad = admnRepo.adminLoginCredential(admn.getUid(), admn.getPassword());
		if (ad != null) {
			// Successful login
			return ResponseEntity.ok("Login successful!");
		} else {
			// Invalid credentials
			return ResponseEntity.status(401).body("Invalid UID or password");
		}
	}
}
