package com.store_management_system.service;

import com.store_management_system.dto.BrandDto;
import com.store_management_system.model.Brand;
import com.store_management_system.repository.BrandRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class BrandService {
    private final BrandRepository brandRepository;
    public BrandService(BrandRepository brandRepository) {
        this.brandRepository = brandRepository;
    }
    public ResponseEntity<List<BrandDto>> getAllBrands() {
        List<BrandDto> brandDtos = brandRepository.getAllBrands();
        return new ResponseEntity<>(brandDtos, HttpStatus.OK);
    }

    public ResponseEntity<Brand> addBrand(String name) {

            Brand brand = new Brand();
            brand.setName(name);
            Brand result = brandRepository.save(brand);
            return new ResponseEntity<>(result,HttpStatus.CREATED);

    }
}
