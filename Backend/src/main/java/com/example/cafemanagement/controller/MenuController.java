
package com.example.cafemanagement.controller;

import com.example.cafemanagement.model.Menu;
import com.example.cafemanagement.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/menu")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @GetMapping
    public List<Menu> getAllMenuItems() {
        return menuService.getAllMenuItems();
    }
}
