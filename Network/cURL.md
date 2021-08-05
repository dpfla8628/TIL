[다운로드](https://curl.se/download.html)  
  
## cURL이란? 

다양한 프로토콜을 지원하는 데이터 전송용 Command Line Tool이다.  
(HTTP, HTTPS, FTP, SFTP, SMTP 등을 지원한다.)  


-d, --data: <data> Send specified data in POST request.  
-H, --header: <header> Headers to supply with request. 
-X, --request: The request method to use. ex) GET, POST  
  
### [GET방식]  

```
curl -d "key1=value1&key2=value2" \
-H "Content-Type: application/x-www-form-urlencoded" \
-X GET http://localhost:8000/data
```

### [POST방식]    
#### [URL형식 데이터]    
```
curl -d "key1=value1&key2=value2" \  
-H "Content-Type: application/x-www-form-urlencoded" \  
-X POST http://localhost:8000/data  
```
#### [JSON형식 데이터]  
```
curl -d '{"key1":"value1", "key2":"value2"}' \
-H "Content-Type: application/json" \
-X POST http://localhost:8000/data
```
# 원도우 curl에서는 '를 "로 변경하고, "를 ""로 변경하고 호출해야한다  
```
curl -d "{""key1"":""value1"", ""key2"":""value2""}" \
-H "Content-Type: application/json" \
-X POST http://localhost:8000/data
```


   
