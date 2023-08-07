package com.travelapp.repository;

import com.travelapp.entity.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ILocationRepository extends JpaRepository<Location, Integer> {
    List<Location> findLocationByName(String locationName);

    List<Location> getAllLocations();

    Location findLocationById(int locationId);
}
