package com.travelapp.service;

import com.travelapp.entity.Location;
import com.travelapp.entity.Tour;
import com.travelapp.repository.ILocationRepository;
import com.travelapp.service.interfaceService.ILocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LocationService implements ILocationService {
    @Autowired
    private ILocationRepository locationRepository;

    @Override
    public List<Location> getAllLocations() {
        return locationRepository.getAllLocations();
    }

//    @Override
//    public Location findLocationById(Integer locationId) {
//        return locationRepository.;
//    }

    @Override
    public List<Location> findLocationsByName(String locationName) {
        return locationRepository.findLocationByName(locationName);
    }

//    @Override
//    public List<Location> findLocationsByCountry(String country) {
//        return null;
//    }

    @Override
    public void createLocation(Location location) {
        // Truy xuất thông tin về người dùng hiện tại
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // Kiểm tra có phải ADMIN
        if (authentication != null && authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"))) {
            locationRepository.save(location); // Lưu thông tin địa điểm vào cơ sở dữ liệu
        } else {
            throw new RuntimeException("Not allowed");
        }
    }

    @Override
    public void updateLocation(Location location) {
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
        locationRepository.save(location);
    }

    @Override
    public void deleteLocation(Integer locationId) {
        // check exists location ?
        Location location = locationRepository.findLocationById(locationId);
        if (location == null) {
            throw new IllegalArgumentException("Tour không tồn tại!");
        }
        locationRepository.delete(location);
    }
}

