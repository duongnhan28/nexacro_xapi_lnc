package com.example.nexacro_xapi.entity.response;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class Dataset {
    private String id;
    private List<ColumnEntity> columns;
    private List<Map<String,String>> rows;
}
