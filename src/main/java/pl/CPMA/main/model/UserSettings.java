package pl.CPMA.main.model;

import pl.CPMA.main.model.enums.Languages;
import pl.CPMA.main.model.enums.ViewType;

import javax.persistence.*;

@Entity
@Table(name = "user_settings")
public class UserSettings {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column
    private Integer items_on_page = 10;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private ViewType viewType = ViewType.VIEW_LIST;

    @Enumerated(EnumType.STRING)
    @Column(length = 20)
    private Languages language = Languages.EN;

    @OneToOne(mappedBy = "userSettings")
    private User user;

    public UserSettings() {
    }

    public UserSettings(Integer id, Integer items_on_page, ViewType viewType, Languages language, User user) {
        this.id = id;
        this.items_on_page = items_on_page;
        this.viewType = viewType;
        this.language = language;
        this.user = user;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getItems_on_page() {
        return items_on_page;
    }

    public void setItems_on_page(Integer items_on_page) {
        this.items_on_page = items_on_page;
    }

    public ViewType getViewType() { return viewType; }

    public void setViewType(ViewType viewType) { this.viewType = viewType; }

    public Languages getLanguage() {
        return language;
    }

    public void setLanguage(Languages language) {
        this.language = language;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
