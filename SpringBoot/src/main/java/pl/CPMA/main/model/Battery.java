package pl.CPMA.main.model;

import pl.CPMA.core.model.BaseEntity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(	name = "battery_status")
public class Battery extends BaseEntity {

    @Column(name = "batteryLevel")
    private Float batteryLevel;

    @OneToOne(mappedBy = "battery")
    private Device device;

    public Battery(Float batteryLevel) {
       this.batteryLevel = batteryLevel;
    }

    public Battery() {
    }

    public Float getBatteryLevel() { return batteryLevel; }
    public void setBatteryLevel(Float batteryLevel) { this.batteryLevel = batteryLevel; }
    public void setDevice(Device device) { this.device = device; }
}
