package com.travelapp.service;

import com.travelapp.entity.User;
import com.travelapp.entity.payment.MomoPayment;
import com.travelapp.entity.payment.Payment;
import com.travelapp.entity.payment.VNPayment;
import com.travelapp.repository.IPaymentRepository;
import com.travelapp.service.interfaceService.IPaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class PaymentService implements IPaymentService {

    @Autowired
    private IPaymentRepository paymentRepository;

    @Override
    public void createPayment(Payment payment) {
        // Xử lý logic kiểm tra tính hợp lệ của thông tin thanh toán,kiểm tra amount > 0, paymentDate không null
        if (payment.getAmount() <= 0 || payment.getPaymentDate() == null) {
            throw new IllegalArgumentException("Thông tin thanh toán không hợp lệ");
        }
        // Lưu thông tin thanh toán vào cơ sở dữ liệu
        paymentRepository.save(payment);
    }

    @Override
    public void updatePayment(Payment payment) {
        // Xử lý logic kiểm tra tồn tại của payment
        Payment existingPayment = paymentRepository.findById(payment.getId()).orElse(null);
        if (existingPayment == null) {
            throw new IllegalArgumentException("Thanh toán không tồn tại");
        }
        // Cập nhật thông tin thanh toán
        existingPayment.setAmount(payment.getAmount());
        existingPayment.setPaymentDate(payment.getPaymentDate());

        paymentRepository.save(existingPayment);
    }

    @Override
    public void deletePayment(Integer paymentId) {
        //  kiểm tra tồn tại của payment
        Payment existingPayment = paymentRepository.findById(paymentId).orElse(null);
        if (existingPayment == null) {
            throw new IllegalArgumentException("Thanh toán không tồn tại");
        }
        // Xóa thanh toán
        paymentRepository.deleteById(paymentId);
    }

    @Override
    public Payment getPaymentById(Integer paymentId) {
        return paymentRepository.findById(paymentId).orElse(null);
    }

    @Override
    public List<Payment> getPaymentsByUserId(Integer userId) {
        return paymentRepository.findByUserId(userId);
    }


    @Override
    public List<Payment> getPaymentByVNPayment(VNPayment vnPayment) {
        return paymentRepository.findByVNPayment(vnPayment);
    }

    @Override
    public List<Payment> getPaymentByMomoPayment(MomoPayment momoPayment) {
        return paymentRepository.findByMomoPayment(momoPayment);
    }

    @Override
    public List<Payment> getPaymentsByAmountGreaterThan(double amount) {
        return paymentRepository.findByAmountGreaterThan(amount);
    }
    @Override
    public List<Payment> getPaymentsByPaymentDateBetween(Date startDate, Date endDate) {
        return paymentRepository.findByPaymentDateBetween(startDate, endDate);
    }

    @Override
    public List<Payment> getPaymentsByUserAndAmountGreaterThan(User user, double amount) {
        return paymentRepository.findByUserAndAmountGreaterThan(user, amount);
    }

    @Override
    public List<Payment> getPaymentsByUserAndPaymentDateBetween(User user, Date startDate, Date endDate) {
        return paymentRepository.findByUserAndPaymentDateBetween(user, startDate, endDate);
    }

    @Override
    public double getTotalPaymentsByUserId(Integer userId) {
        return paymentRepository.getTotalPaymentsByUserId(userId);
    }

    @Override
    public double getTotalPaymentsByUserAndPaymentDateBetween(User user, Date startDate, Date endDate) {
        return paymentRepository.getTotalPaymentsByUserAndPaymentDateBetween(user, startDate, endDate);
    }

}
