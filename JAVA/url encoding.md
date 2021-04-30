### encode

```java
package api.io.multi;

import java.io.*;
import java.net.*;
import java.nio.file.*;
import java.util.stream.*;

public class encode {
	public static void main(String[] args) throws Exception {	
		Path path = Paths.get("C:/study/utf-8.contents.txt");
		Stream<String> lines = Files.lines(path);
        String val = lines.collect(Collectors.joining(System.lineSeparator()));  
		String encodeVal = ""; 
		encodeVal = URLEncoder.encode(val, "euc-kr"); 
		
		BufferedWriter writer = new BufferedWriter(new FileWriter("C:/study/testtest.txt"));
        writer.write(encodeVal);
        writer.close();
    }

}
```

### decode

```java
package api.io.multi;

import java.io.*
import java.net.*;
import java.nio.file.*;
import java.util.stream.*;

public class decode {
	public static void main(String[] args) throws Exception {	
		Path path = Paths.get("C:/study/testtest.txt");
		Stream<String> lines = Files.lines(path);
        String val = lines.collect(Collectors.joining(System.lineSeparator()));  
		String encodeVal = ""; 
		encodeVal = URLDecoder.decode(val, "euc-kr"); 
		
		BufferedWriter writer = new BufferedWriter(new FileWriter("C:/study/testtesttest.txt"));
        writer.write(encodeVal);
        writer.close();
    }

}
```
