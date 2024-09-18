package com.mitk.hostel_management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.mitk.hostel_management.models.Student;

import jakarta.transaction.Transactional;

public interface StundentRepo extends JpaRepository<Student, Long> {

	@Query("SELECT s FROM Student s WHERE s.isDeleted = false")
    List<Student> getAll();

	@Query("select id from Student where USN=?1")
	long findIdByUsn(String usn);

	@Modifying
    @Transactional
    @Query("UPDATE Student s SET s.isDeleted = true WHERE s.USN = ?1")
    int deleteByUsn(String usn);

	
	@Query("SELECT s FROM Student s WHERE s.USN = ?1 AND s.password = ?2 AND s.isDeleted = false")
	Student studentLoginCredential(String usn, String pwd);

}
