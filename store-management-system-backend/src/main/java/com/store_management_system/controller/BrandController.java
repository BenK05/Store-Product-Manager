package com.store_management_system.controller;

import com.store_management_system.dto.BrandDto;
import com.store_management_system.model.Brand;
import com.store_management_system.service.BrandService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/brand")
public class BrandController {
    private final BrandService brandService;

    public BrandController(BrandService brandService) {
        this.brandService = brandService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<BrandDto>> getAllBrands() {
        ResponseEntity<List<BrandDto>> brandList =brandService.getAllBrands();
        log.info("brandList={}", brandList);
        return brandList;
    }

    @PostMapping()
    public ResponseEntity<Brand> addBrand(@RequestParam String name) {
        try{
            return brandService.addBrand(name);
        } catch (Exception e){
            log.error("addBrand Failed={}: Exception={}", name,e.getMessage());
            throw e;
        }
    }
}
