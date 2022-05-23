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
-> 이렇게 curl으로 처리할 수도 있지만 키바나를 이용하는게 훨씬 편리하다
http://IP:5601/app/management/data/index_lifecycle_management/policies
