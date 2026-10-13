package com.store_management_system.service;

import com.store_management_system.model.Category;
import com.store_management_system.repository.CategoryRepository;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CategoryService {
    private final CategoryRepository categoryRepository;
    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }


    public ResponseEntity<Category> addCategory(String name) {
        Category category = new Category();
        category.setName(name);
        Category response =categoryRepository.save(category);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    public ResponseEntity<List<Category>> getAllCategory() {
        List<Category> response = categoryRepository.findAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}

