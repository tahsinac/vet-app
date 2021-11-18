package com.group213.vet.app.respository;

import com.group213.vet.app.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository  extends JpaRepository<User, Integer> {
}
