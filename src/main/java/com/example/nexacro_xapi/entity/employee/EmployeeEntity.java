package com.example.nexacro_xapi.entity.employee;

import lombok.Data;

import java.util.UUID;

@Data
public class EmployeeEntity {
    private int id;
    private String name;
    private int age;
    private String address;
    private String role;
}
