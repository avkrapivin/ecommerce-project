package com.krapivin.ecommerce.dto;

import com.krapivin.ecommerce.entity.Address;
import com.krapivin.ecommerce.entity.Customer;
import com.krapivin.ecommerce.entity.OrderItem;
import com.krapivin.ecommerce.entity.Order;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {
    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;
}
