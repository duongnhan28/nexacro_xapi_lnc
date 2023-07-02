package com.example.nexacro_xapi.api.service;

import com.example.nexacro_xapi.api.mapper.EmployeeMapper;
import com.example.nexacro_xapi.common.NexacroConvert;
import com.example.nexacro_xapi.entity.employee.EmployeeEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeMapper employeeMapper;

    public List<Map<String, String>> getAll(Map<String, String> data) {
        List<Map<String, String>> rows = new ArrayList<>();
        EmployeeEntity employeeEntity = new EmployeeEntity();

        if (data != null) {
            employeeEntity.setName(data.get("name"));
        }

        List<EmployeeEntity> employeeEntities = employeeMapper.getAll(employeeEntity);
        for (EmployeeEntity employee : employeeEntities) {
            Map<String, String> row = NexacroConvert.convertObjectToMap(employee);
            rows.add(row);
        }

        return rows;
    }
}
