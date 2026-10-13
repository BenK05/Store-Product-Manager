package com.store_management_system.controller;

import com.store_management_system.model.Category;
import com.store_management_system.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@Controller
@RequestMapping("/category")
public class CategoryController {
    private final CategoryService categoryService;
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }
    @PostMapping()
    public ResponseEntity<Category> addCategory(@RequestParam String name) {
        return categoryService.addCategory(name);
    }

    @GetMapping("/all")
    public ResponseEntity<List<Category>> getAllCategories() {

        ResponseEntity<List<Category>>  response=categoryService.getAllCategory();
        log.info(response.getBody().toString());
        return response;
    }
}
