* Index ilm policy?
ilm의 뜻은 index lifecycle management의 약자입니다. 즉 해당 인덱스의 생명주기를 뜻하게 됩니다.   
인덱스에 생명주기를 설정하여 기간이 오래된 인덱스를 자동적으로 삭제하게 하여 용량을 절약할 수 있습니다.    

- api	PUT http://localhost:9200/_ilm/policy/my-log-index
- header	Content-type: application/json
- body	
```
{
    "policy": {
        "phases": {
            "delete": {
                "min_age": "3d",
                "actions": {
                    "delete": {}
                }
            }
        }
    }
}
```
