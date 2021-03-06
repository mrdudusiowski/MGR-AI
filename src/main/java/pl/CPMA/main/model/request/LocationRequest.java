package pl.CPMA.main.model.request;

import javax.validation.constraints.NotBlank;

public class LocationRequest {

    private Double latitude;

    private Double longitude;

    @NotBlank
    private String androidID;

    public Double getLatitude() {
        return latitude;
    }
    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }
    public Double getLongitude() {
        return longitude;
    }
    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }
    public String getAndroidID() {
        return androidID;
    }
    public void setAndroidID(String androidID) {
        this.androidID = androidID;
    }
}
