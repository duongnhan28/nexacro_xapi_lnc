package com.example.nexacro_xapi.entity.response;

import lombok.Data;

import java.util.List;
import java.util.Map;

@Data
public class RowsEntity {
    private List<Map<String, String>> row;
}