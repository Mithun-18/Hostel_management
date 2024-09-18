package com.mitk.hostel_management.models;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Admin")
public class Admin {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column(name = "adminName")
	private String name;

	@Column(name = "uId", length = 10, unique = true)
	private String uId;

	@Column(name = "password")
	private String password;

	@Column(name = "adminContact")
	private long adminContact;

	@Column(name = "adminEmail")
	private String adminEmail;

	@Column(name = "type")
	private String type;
	
	public Admin() {
		super();
	}

	public Admin(String name, String uId, String password, long adminContact, String adminEmail, String type) {
		super();
		this.name = name;
		this.uId = uId;
		this.password = password;
		this.adminContact = adminContact;
		this.adminEmail = adminEmail;
		this.type = type;
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

	public String getUid() {
		return uId;
	}

	public void setUid(String uId) {
		this.uId = uId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public long getAdminContact() {
		return adminContact;
	}

	public void setAdminContact(long adminContact) {
		this.adminContact = adminContact;
	}

	public String getAdminEmail() {
		return adminEmail;
	}

	public void setAdminEmail(String adminEmail) {
		this.adminEmail = adminEmail;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
