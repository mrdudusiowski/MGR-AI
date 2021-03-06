package pl.CPMA.core.payload.response;

import pl.CPMA.main.model.UserSettings;

import javax.jws.soap.SOAPBinding;
import java.util.List;

public class JWTResponse {

	private String accessToken;

	private String type = "Bearer";

	private Long id;

	private String name;

	private String surname;

	private String phone;

	private String username;

	private String email;

	private List<String> roles;

	private UserSettings userSettings;

	public JWTResponse(String accessToken, Long id, String name, String surname, String username, String email, String phone, List<String> roles, UserSettings userSettings) {
		this.accessToken = accessToken;
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.username = username;
		this.email = email;
		this.phone = phone;
		this.roles = roles;
		this.userSettings = userSettings;
	}

	public String getAccessToken() {
		return accessToken;
	}
	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
	}
	public String getTokenType() {
		return type;
	}
	public void setTokenType(String tokenType) {
		this.type = tokenType;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public List<String> getRoles() {
		return roles;
	}
	public UserSettings getUserSettings() { return userSettings; }
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getSurname() {
		return surname;
	}
	public void setSurname(String surname) {
		this.surname = surname;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
}
