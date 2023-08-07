package com.travelapp.service.interfaceService;

import com.travelapp.entity.Booking;
import com.travelapp.entity.User;

import java.util.List;

public interface IBookingService {

    void createBooking(Booking booking);

    void deleteBooking(Integer bookingId);

    List<Booking> getAllBookings();

    List<Booking> findBookingByUserName(User userName);

    Booking findBookingById(Integer bookingId);
}
