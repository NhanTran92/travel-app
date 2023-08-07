package com.travelapp.service.interfaceService;

import com.travelapp.entity.Hotel;

import java.util.List;

public interface IHotelService {
    void createHotel(Hotel hotel);

    List<Hotel> getAllHotels();

    Hotel findHotelById(Integer hotelId);

    Hotel findHotelByName(String hotelName);


    List<Hotel> findHotelByAddress(String address);

    List<Hotel> findByPriceLessThan(double price);

    void updateHotel(Hotel hotel);

    void deleteHotel(Integer hotelId);
}
