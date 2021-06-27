package pl.CPMA.main.model;

import pl.CPMA.core.model.BaseEntity;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(	name = "devices",
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "androidID")
        })
public class Device extends BaseEntity {

    @NotBlank
    @Size(max = 20)
    private String androidID;

    @NotBlank
    @Size(max = 20)
    private String manufacturer;

    @NotBlank
    private String phoneModel;

    @NotBlank
    @Size(max = 20)
    private String deviceVersion;

    @NotBlank
    @Size(max = 20)
    private String brand;

    @NotBlank
    @Size(max = 20)
    private String product;

    @NotBlank
    @Size(max = 20)
    private String androidVersionRelease;

    @Column(name="androidVersion")
    private Integer androidVersion;

    @Column(name="screen_width")
    private Integer width;

    @Column(name="screen_height")
    private Integer height;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "device_localisation_id")
    private Localisation localisation;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "battery_status_id")
    private Battery battery;

    public Device(String androidID, String manufacturer, String brand, String product, String phoneModel, String deviceVersion, String versionRelease, int version, int width, int height) {
        this.androidID = androidID;
        this.manufacturer = manufacturer;
        this.brand = brand;
        this.product = product;
        this.phoneModel = phoneModel;
        this.deviceVersion = deviceVersion;
        this.androidVersionRelease = versionRelease;
        this.androidVersion = version;
        this.width = width;
        this.height = height;
    }

    public Device() {

    }

    public String getAndroidID() { return androidID; }
    public void setAndroidID(String androidID) { this.androidID = androidID; }
    public String getManufacturer() { return manufacturer; }
    public void setManufacturer(String manufacturer) { this.manufacturer = manufacturer; }
    public String getPhoneModel() { return phoneModel; }
    public void setPhoneModel(String phoneModel) { this.phoneModel = phoneModel; }
    public String getDeviceVersion() { return deviceVersion; }
    public void setDeviceVersion(String deviceVersion) { this.deviceVersion = deviceVersion; }
    public String getBrand() { return brand; }
    public void setBrand(String brand) { this.brand = brand; }
    public String getProduct() { return product; }
    public void setProduct(String product) { this.product = product; }
    public String getAndroidVersionRelease() { return androidVersionRelease; }
    public void setAndroidVersionRelease(String versionRelease) { this.androidVersionRelease = versionRelease; }
    public Integer getAndroidVersion() { return androidVersion; }
    public void setAndroidVersion(Integer version) { this.androidVersion = version; }
    public Integer getWidth() { return width; }
    public void setWidth(Integer width) { this.width = width; }
    public Integer getHeight() { return height; }
    public void setHeight(Integer height) { this.height = height; }
    public User getUser() { return user; }
    public void setUser(User user) { this.user = user; }
    public Localisation getLocalisation() { return localisation; }
    public void setLocalisation(Localisation localisation) { this.localisation = localisation; }
    public Battery getBattery() { return battery; }
    public void setBattery(Battery battery) { this.battery = battery; }
}
