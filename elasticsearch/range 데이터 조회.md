```
        String url = "http://ip:9200/[index]/_search";
        String body = "{\"query\": {\"range\": {\"createTime\": {\"gte\": "+fromTime+",\"lt\": "+toTime+"}}}}";

        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Content-Type", "application/json");

        HttpEntity<String> entity = new HttpEntity<>(body, httpHeaders);
        ResponseEntity<Map> responseEntity = restTemplate
            .exchange(url, HttpMethod.POST, entity, Map.class);
        LinkedHashMap hitsList = (LinkedHashMap) responseEntity.getBody().get("hits");
        ArrayList<HashMap<String,HashMap>> hitsMap = (ArrayList) hitsList.get("hits");
```
