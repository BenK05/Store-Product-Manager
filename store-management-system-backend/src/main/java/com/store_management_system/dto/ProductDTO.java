package com.store_management_system.dto;

import com.store_management_system.Data.State;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDTO {
    private Long productId;
    private String productName;
    private Float price;
    private int stock;
    private State state;

    public ProductDTO(
            Long productId,
            String productName,
            Float price,
            Long stock,
            State state
    ) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.stock = stock.intValue();
        this.state = state;
    }
}
