package com.store_management_system.service;

import com.store_management_system.dto.ProductDTO;
import com.store_management_system.repository.InventoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {
    private final InventoryRepository inventoryRepository;

    public ProductService(InventoryRepository inventoryRepository) {
        this.inventoryRepository = inventoryRepository;
    }

    public List<ProductDTO> getAllProducts() {
        return  inventoryRepository.findAllProductWithQuantity();
    }
}
