package pl.CPMA.main.model.request;

import javax.validation.constraints.NotBlank;

public class BatteryRequest {

    private Float batteryLevel;

    @NotBlank
    private String androidID;

    public BatteryRequest(Float batteryLevel, String androidID) {
        this.batteryLevel = batteryLevel;
        this.androidID = androidID;
    }

    public Float getBatteryLevel() {
        return batteryLevel;
    }
    public void setBatteryLevel(Float batteryLevel) {
        this.batteryLevel = batteryLevel;
    }
    public String getAndroidID() {
        return androidID;
    }
    public void setAndroidID(String androidID) {
        this.androidID = androidID;
    }
}
