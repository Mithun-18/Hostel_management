package com.mitk.hostel_management.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.mitk.hostel_management.models.Admin;
import com.mitk.hostel_management.models.Student;


public interface AdminRepo extends JpaRepository<Admin, Long> {
	@Query("select a from Admin a where a.uId = ?1 and a.password = ?2")
	Admin adminLoginCredential(String uID, String pwd);
}
