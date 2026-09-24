package com.store_management_system.model;

import com.store_management_system.Data.Color;
import jakarta.persistence.*;

@Entity
@Table(name = "productvariants")
public class ProductVariant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "product_id")
    private Product product;

    private String sku;

    @ManyToOne
    @JoinColumn(name = "size_id")
    private Size size;
    @Enumerated(EnumType.STRING)
    private Color color;
    private float price;
    private String barcode;




}
