package com.store_management_system.repository;

import com.store_management_system.dto.ProductDTO;
import com.store_management_system.model.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    @Query("""
        SELECT new com.store_management_system.dto.ProductDTO(
            p.id,
            p.name,
            MIN(pv.price),
            SUM(i.quantity),
            p.state
        )
        FROM Inventory i
        JOIN i.productVariant pv
        JOIN pv.product p
        GROUP BY p.id, p.name, p.state
    """)
    List<ProductDTO> findAllProductWithQuintity();
}
