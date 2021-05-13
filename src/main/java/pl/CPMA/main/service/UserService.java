package pl.CPMA.main.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import pl.CPMA.main.model.User;
import pl.CPMA.main.repository.UserRepository;

import java.util.List;

@Component
public class UserService {
    @Autowired
    UserRepository repository;

    public void add(User user) {
        repository.save(user);
    }

    public void delete(long id) {
        repository.deleteById(id);
    }

    public List<User> getUsers() {
        return (List<User>) repository.findAll();
    }

    public User getUserById(long id) {
        return repository.findById(id).orElseThrow(() -> new UsernameNotFoundException("Couldn't find a User with id: " + id));
    }

    public User getUserByUsername(String username){
        return repository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Couldn't find a User with username: " + username));
    }
}
