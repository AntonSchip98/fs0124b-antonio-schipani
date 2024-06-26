package it.schipani.businessLayer.services;

import it.schipani.businessLayer.dto.LoginResponseDto;
import it.schipani.businessLayer.dto.RegisterUserDto;
import it.schipani.businessLayer.dto.RegisteredUserDto;

import java.util.Optional;

public interface UserService {
    RegisteredUserDto register(RegisterUserDto user);

    Optional<LoginResponseDto> login(String username, String password);

    Optional<RegisteredUserDto> get(long id);
}
