package com.store_management_system.repository;

import com.store_management_system.dto.BrandDto;
import com.store_management_system.model.Brand;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BrandRepository extends JpaRepository<Brand, Long> {

    @Query("""
            select new com.store_management_system.dto.BrandDto(
                       d.id,
                       d.name
                       )
                       From Brand d
            """)
    List<BrandDto> getAllBrands();
}
