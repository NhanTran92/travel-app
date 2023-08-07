package com.travelapp.service;

import com.travelapp.entity.Booking;
import com.travelapp.entity.User;
import com.travelapp.repository.IBookingRepository;
import com.travelapp.service.interfaceService.IBookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
@Service

public class BookingService implements IBookingService {
    @Autowired
    private IBookingRepository bookingRepository;

    @Override
    public void createBooking(Booking booking) {

    }

    @Override
    public void deleteBooking(Integer bookingId) {

    }

    @Override
    public List<Booking> getAllBookings() {
        return null;
    }

    @Override
    public List<Booking> findBookingByUserName(User userName) {
        return null;
    }

    @Override
    public Booking findBookingById(Integer bookingId) {
        return null;
    }
}
