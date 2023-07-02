package com.example.nexacro_xapi.common;

import com.example.nexacro_xapi.entity.response.ColumnEntity;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.nexacro.java.xapi.data.DataSet;
import com.nexacro.java.xapi.data.PlatformData;
import com.nexacro.java.xapi.tx.HttpPlatformRequest;
import jakarta.servlet.http.HttpServletRequest;

import java.io.InputStream;
import java.util.*;

public class NexacroConvert {

    public static DataSet getRequestData(HttpServletRequest request, String dataSetData) {
        try {
            InputStream inputStream = request.getInputStream();
            HttpPlatformRequest httpPlatformRequest = new HttpPlatformRequest(inputStream);

            // receive data
            httpPlatformRequest.receiveData();
            PlatformData data = httpPlatformRequest.getData();
            return data.getDataSetList().get(dataSetData);
        } catch (Exception e) {
            return null;
        }
    }
    public static List<Map<String, String>> convertDatasetToListMap(DataSet dataSet) {
        List<Map<String, String>> rs = new ArrayList();

        if (dataSet !=  null) {
            int rowSize = dataSet.getRowCount();

            for (int i = 0; i < rowSize; i++) {
                Map<String, String> row = dataSet.getRowToMap(0);
                rs.add(row);
            }
        }
        return rs;
    }

    public static Map<String, String> convertObjectToMap(Object object) {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.convertValue(object, Map.class);
    }

    public static List<ColumnEntity> convertEntityToColumn(Object object) {
        List<ColumnEntity> columnEntities = new ArrayList<>();
        Map<String, String> objectMap = convertObjectToMap(object);

        for (Map.Entry<String, String> om: objectMap.entrySet()) {
            ColumnEntity columnEntity = new ColumnEntity();
            columnEntity.setId(om.getKey());
            columnEntity.setType("STRING");
            columnEntity.setSize("256");
            columnEntities.add(columnEntity);
        }

        return columnEntities;
    }
}
