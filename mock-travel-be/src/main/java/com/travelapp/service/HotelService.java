package com.travelapp.service;

import com.travelapp.entity.Hotel;
import com.travelapp.entity.Tour;
import com.travelapp.repository.IHotelRepository;
import com.travelapp.service.interfaceService.IHotelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class HotelService implements IHotelService {
    @Autowired
    private IHotelRepository hotelRepository;

    @Override
    public void createHotel(Hotel hotel) {
        // Truy xuất thông tin về người dùng hiện tại
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        // Kiểm tra có phải ADMIN
        if (authentication != null && authentication.getAuthorities().contains(new SimpleGrantedAuthority("ADMIN"))) {
            hotelRepository.save(hotel);
        } else {
            throw new RuntimeException("Not allowed");
        }
    }

    @Override
    public List<Hotel> getAllHotels() {
        return hotelRepository.getAllHotels();
    }

    @Override
    public Hotel findHotelById(Integer hotelId) {
        return hotelRepository.findHotelById(hotelId);
    }

    @Override
    public Hotel findHotelByName(String hotelName) {
        return hotelRepository.findHotelByName(hotelName);
    }

    @Override
    public List<Hotel> findHotelByAddress(String address) {
        return hotelRepository.findHotelByAddress(address);
    }

    @Override
    public List<Hotel> findByPriceLessThan(double price) {
        return hotelRepository.findByPriceLessThan(price);
    }

    @Override
    public void updateHotel(Hotel hotel) {
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
        hotelRepository.save(hotel);
    }

    @Override
    public void deleteHotel(Integer hotelId) {
        // check exists hotel ?
        Hotel hotel = hotelRepository.findHotelById(hotelId);
        if (hotel == null) {
            throw new IllegalArgumentException("hotel không tồn tại!");
        }
        hotelRepository.delete(hotel);

    }
}
