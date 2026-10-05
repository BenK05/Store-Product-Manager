package com.store_management_system.service;

import com.store_management_system.dto.ProductDTO;
import com.store_management_system.model.Product;
import com.store_management_system.repository.InventoryRepository;
import com.store_management_system.repository.ProductRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private ProductRepository productRepository;
    private InventoryRepository inventoryRepository;


    public List<ProductDTO> getAllProducts() {
        return  inventoryRepository.findAllProductWithQuintity();
    }
}
