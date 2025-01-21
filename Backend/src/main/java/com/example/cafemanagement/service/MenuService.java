
package com.example.cafemanagement.service;

import com.example.cafemanagement.model.Menu;
import com.example.cafemanagement.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public List<Menu> getAllMenuItems() {
        return menuRepository.findAll();
    }
}
