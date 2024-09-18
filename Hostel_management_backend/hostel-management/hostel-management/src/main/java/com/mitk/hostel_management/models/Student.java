package com.mitk.hostel_management.models;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Student")
public class Student {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "studentName")
	private String name;

	@Column(name = "USN", length = 10, unique = true)
	private String USN;

	@Column(name = "DOB")
	private Date DOB;

	@Column(name = "password")
	private String password;

	@Column(name = "studContact")
	private long studContact;

	@Column(name = "studEmail")
	private String studEmail;

	@Column(name = "parentName")
	private String parentName;

	@Column(name = "parentContact")
	private long parentContact;

	@Column(name = "isDeleted")
	private Boolean isDeleted;
	
	
	
	public Student() {
		super();
	}

	public Student(String name, String uSN, Date dOB, String password, long studContact, String studEmail,
			String parentName, long parentContact, Boolean isDeleted) {
		super();
		this.name = name;
		USN = uSN;
		DOB = dOB;
		this.password = password;
		this.studContact = studContact;
		this.studEmail = studEmail;
		this.parentName = parentName;
		this.parentContact = parentContact;
		this.isDeleted = isDeleted;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUSN() {
		return USN;
	}

	public void setUSN(String uSN) {
		USN = uSN;
	}

	public Date getDOB() {
		return DOB;
	}

	public void setDOB(Date dOB) {
		DOB = dOB;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getStudContact() {
		return studContact;
	}

	public void setStudContact(long studContact) {
		this.studContact = studContact;
	}

	public String getStudEmail() {
		return studEmail;
	}

	public void setStudEmail(String studEmail) {
		this.studEmail = studEmail;
	}

	public String getParentName() {
		return parentName;
	}

	public void setParentName(String parentName) {
		this.parentName = parentName;
	}

	public long getParentContact() {
		return parentContact;
	}

	public void setParentContact(long parentContact) {
		this.parentContact = parentContact;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}

}
