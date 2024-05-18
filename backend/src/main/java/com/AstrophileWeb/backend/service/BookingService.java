package com.AstrophileWeb.backend.service;

import com.AstrophileWeb.backend.model.Booking;
import com.AstrophileWeb.backend.model.ClientServices;
import com.AstrophileWeb.backend.repositories.BookingRepository;
import com.AstrophileWeb.backend.repositories.ClientServicesRepository;
import com.AstrophileWeb.backend.model.User;
import com.AstrophileWeb.backend.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    private final BookingRepository bookingRepository;

    @Autowired
    public BookingService(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Optional<Booking> getBookingById(Integer id) {
        return bookingRepository.findById(id);
    }

    public Booking saveBooking(Booking booking) {
        return bookingRepository.save(booking);
    }

    public void deleteBooking(Integer id) {
        bookingRepository.deleteById(id);
    }
}
