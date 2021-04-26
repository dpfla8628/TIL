
## ▶️기반 스트림  

- **FileOutputStream**  

: 바이트 단위로 데이터를 파일에 저장할 때 사용하는 바이트 기반 출력 스트림.  

- **FileInputStream**  

: 파일로부터 바이트 단위로 읽어 들일 때 사용하는 바이트 기반 스트림  
 
## ▶️보조 스트림  

: 다른 스트림과 연결되어 여러가지 편리한 기능을 제공  

### -문자 변환  

- **InputStreamReader**  

: 바이트 입력 스트림에 연결되어 문자 입력 스트림인 Reader로 변환 시키는 보조스트림.  

- **OutputStreamWriter**  

: 바이트 출력 스트림에 연결되어 문자 출력 스트림인 Writer로 변환시키는 보조 스트림.  

### - 바이트 기반 성능 향상 보조 스트림  

- **BufferedOutputStream**  
- **BufferedInputStream**  

### -문자 기반 성능 향상 보조 스트림  

- **BufferedWriter**  

: 문자 출력 스트림에 연결되어 버퍼를 제공해즈는 스트림(**FileWriter에 비해 성능 높음)**  

- **BufferedReader**  

### -기본 타입 입출력 보조 스트림  

- **DataInputStream**  

: 바이트 입력 스트림 (바이트 -(복원)→ 멀티바이트) / .readInt()  

- **DataOutputStream**  

: 바이트 출력 스트림 (멀티바이트-(분해)→바이트) / .writeInt()  

### -프린터 보조 스트림  

- **PrintStream**  

: 바이트 출력 스트림, print()메서드 제공  

- **PrintWriter**  

: 문자 출력 스트림  

### -객체 입출력 보조 스트림  

- **ObjectOutputStream** : 객체 직렬화 역할  

**객체 직렬화** : 객체 출력을 위해 객체의 데이터를 일렬로 늘어선 연속적인 바이트로 변경하는 것.  

- **ObjectInputStream** : 역직렬화 역할  

**역질렬화** : 파일에 저장되어 있거나 네트워크에서 전송된 객체를 읽을 수 있는데,  

입력 스트림으로부터 읽어들인 연속적인 바이트를 객체로 복원하는 것.  

## ▶️파일 입출력  

- **FileReader**  

: 문자 기반 스트림 / 텍스트 파일을 프로그램으로 읽어들일 때 사용. 문자 단위로 읽으므로 텍스트만 읽을 수 있다.  

- **FileWriter**  

: 문자 기반 스트림으로 텍스트 데이터를 파일에 저장할 때 사용. 문자 단위로 저장하므로 텍스트만 저장 가능  

- output test code  

```java
package api.io.multi;

import java.io.BufferedOutputStream;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;

public class Test01 {
	public static void main(String[] args) throws Exception {
		//멀티바이트 출력
		//준비물 : 파일 객체, 출력용 스트림, 버퍼(스트림), 분해 도구(스트림)
		File target = new File("file","multi.txt");
		FileOutputStream  out = new FileOutputStream(target);
		BufferedOutputStream buffer = new BufferedOutputStream(out/*8192*/);
		DataOutputStream data = new DataOutputStream(buffer);
		
		//[프로그램]->data->buffer->out->target->[multi.txt]
		//			(분해)  (대기)  (출력)           저장(깨짐)    	
		//출력은 data를 이용하여 진행
		data.writeInt(100);//(4)100을 int 형태로 분해하여 저장(출력)하라
		data.writeChar(100);//2
		data.writeDouble(100);//8
		data.writeUTF("테스트입니다.");
		
		//버퍼는 애초에 빠른 전송을 위해 임시 저장을 하는 목적으로 만들어졌기 때문에 
		// 더 들어올거라고 생각한다. 따라서 이대로 프로그램이 끝나면 전송을 안한다.
		//=> 남은 데이터를 전송하라고 말한다(flush)
		data.flush();//강제 전송
		//data.close();//강제 전송 + 통로 소멸 =>(out+buffer.close())
	}
}
```

- input test code  

```java
package api.io.multi;

import java.io.BufferedInputStream;
import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;

public class Test02 {
	public static void main(String[] args) throws Exception {
		
		File target = new File("file","multi.txt");
		FileInputStream  in = new FileInputStream(target);
		BufferedInputStream buffer = new BufferedInputStream(in/*8192*/);
		DataInputStream data = new DataInputStream(buffer);
		
		//[프로그램]<- data<- buffet<- in<-target<-[multi.txt]
		//data를 이용하여 입력을 진행
		//읽어들여서 조립(복원)하는 것도 형태마다 다름
		//반드시 출력된 순서대로 입력!!!
		int a = data.readInt();
		char b =data.readChar();
		double c =data.readDouble();
		
		System.out.println(a);
		System.out.println(b);
		System.out.println(c);		
	}
}
```

Quiz)   

첨부된 파일을 읽어들여 아래의 인코딩이 적용된 파일을 저장하는 프로그램을 작성하시오.  
- "euc-kr" => "euc-kr.txt" 로 저장  

```java

public void EuckrConversion(){
    try {
        FileInputStream fis = new FileInputStream("C:/study/utf-8.contents.txt");
        InputStreamReader isr = new InputStreamReader(fis, "euc-kr");
        BufferedWriter writer = new BufferedWriter(new FileWriter("C:/study/euc-kr.txt"));
        int c;
        while((c=isr.read()) != -1) {
            writer.write((char)c);
        }
        writer.close();
        isr.close(); // 보조스트림만 닫아줘도 보조가 알아서 기반을 닫고 자기도 닫음
    } catch (IOException e) {
        e.printStackTrace();
    }
}
```
