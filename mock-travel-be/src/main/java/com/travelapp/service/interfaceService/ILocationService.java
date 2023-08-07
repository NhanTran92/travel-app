package com.travelapp.service.interfaceService;

import com.travelapp.entity.Location;

import java.util.List;

public interface ILocationService {
    List<Location> getAllLocations();

    List<Location> findLocationsByName(String locationName);

//    List<Location> findLocationsByCountry(String country);

    void createLocation(Location location);

    void updateLocation(Location location);

    void deleteLocation(Integer locationId);
}
