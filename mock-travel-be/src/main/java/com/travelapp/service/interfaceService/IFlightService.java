package com.travelapp.service.interfaceService;

import com.travelapp.entity.Flight;

import java.time.LocalDateTime;
import java.util.List;

public interface IFlightService {
    void createFlight(Flight flight);

    List<Flight> getAllFlights();

    Flight findFlightById(Integer flightId);

    Flight findFlightByCode(String flightCode);

    List<Flight> findByDepartureDateGreaterThanEqual(LocalDateTime departureStart);

    List<Flight> findFlightByLessThanPrice(double ticketPrice);

    void updateFlight(Flight flight);

    void deleteFlight(String flightCode);
}
