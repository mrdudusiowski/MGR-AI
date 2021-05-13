package pl.CPMA.main.model;

import org.hibernate.annotations.Type;

import javax.persistence.*;

@Entity
@Table(name="image_model")
public class ImageModel {
    @Id
    @Column(name = "id")
    @GeneratedValue
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "type")
    private String type;

    @Lob
    @Column(name = "pic")
    @Type(type = "org.hibernate.type.ImageType")
    private byte[] pic;

    @OneToOne(mappedBy = "imageModel")
    private User user;

    public ImageModel() { }

    public ImageModel(String name, String type, byte[] pic, User user) {
        this.name = name;
        this.type = type;
        this.pic = pic;
        this.user = user;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
    public String getType() { return type; }
    public void setType(String type) { this.type = type; }
    public byte[] getPic() { return pic; }
    public void setPic(byte[] pic) { this.pic = pic; }
    public void setUser(User user) { this.user = user; }
}
