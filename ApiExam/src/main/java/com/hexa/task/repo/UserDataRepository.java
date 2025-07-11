package com.hexa.task.repo;

import com.hexa.task.model.UserData;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserDataRepository extends JpaRepository<UserData, Integer> {

	Optional<UserData>findByName(String username);
}