package com.krapivin.ecommerce.service;

import com.krapivin.ecommerce.dto.PaymentInfo;
import com.krapivin.ecommerce.dto.Purchase;
import com.krapivin.ecommerce.dto.PurchaseResponse;
import com.stripe.exception.StripeException;
import com.stripe.model.PaymentIntent;

public interface CheckoutService {
    PurchaseResponse placeOrder(Purchase purchase);
    PaymentIntent createPaymentIntent(PaymentInfo paymentInfo) throws StripeException;
}
