package com.travelapp.service;

import com.travelapp.entity.Flight;
import com.travelapp.entity.Tour;
import com.travelapp.repository.IFlightRepository;
import com.travelapp.service.interfaceService.IFlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class FlightService implements IFlightService {
    @Autowired
    private IFlightRepository flightRepository;

    @Override
    public void createFlight(Flight flight) {
        // Truy xuất thông tin về người dùng hiện tại
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // Kiểm tra có phải ADMIN
        if (authentication != null && authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"))) {
            flightRepository.save(flight);
        } else {
            throw new RuntimeException("Not allowed");
        }
    }

    @Override
    public List<Flight> getAllFlights() {
        return flightRepository.getAllFlights();
    }

    @Override
    public Flight findFlightById(Integer flightId) {
        return flightRepository.findFlightById(flightId);
    }

    @Override
    public Flight findFlightByCode(String flightCode) {
        return flightRepository.findFlightByCode(flightCode);
    }

    @Override
    public List<Flight> findByDepartureDateGreaterThanEqual(LocalDateTime departureStart) {
        return flightRepository.findByDepartureDateGreaterThanEqual(departureStart);
    }

    @Override
    public List<Flight> findFlightByLessThanPrice(double ticketPrice) {
        return flightRepository.findByPrice(ticketPrice);
    }

    @Override
    public void updateFlight(Flight flight) {
        // Lấy thông tin người dùng hiện tại từ SecurityContextHolder
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || !authentication.isAuthenticated()) {
            throw new IllegalArgumentException("Người dùng chưa đăng nhập");
        }
        //Kiểm tra Admin role hay không
        boolean isAdmin = authentication.getAuthorities().stream().anyMatch(authority -> authority.getAuthority().equals("ADMIN"));
        if (!isAdmin) {
            throw new IllegalArgumentException("Không có quyền update tour");
        }
        // Lưu vào repo
        flightRepository.save(flight);
    }

    @Override
    public void deleteFlight(String flightCode) {
        // check exists flight ?
        Flight flight = flightRepository.findFlightByCode(flightCode);
        if (flight == null) {
            throw new IllegalArgumentException("Flight không tồn tại!");
        }
        flightRepository.delete(flight);
    }
}

