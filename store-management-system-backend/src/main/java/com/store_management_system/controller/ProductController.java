package com.store_management_system.controller;

import com.store_management_system.dto.ProductDTO;
import com.store_management_system.service.ProductService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequestMapping("/product")
@RestController
public class ProductController {


    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> productDTOList = productService.getAllProducts();
        return new ResponseEntity<>(productDTOList, HttpStatus.OK);
    }
}
