```java
    public void eReadEncoder() throws Exception {

    BufferedReader br = new BufferedReader(
            new InputStreamReader(
                    new FileInputStream("C:/study/utf-8.contents.txt"), "utf-8"));
    BufferedWriter bw = new BufferedWriter(
            new OutputStreamWriter(
                    new FileOutputStream("C:/study/euc-kr.txt"), "euc-kr"));
        String line;
        while ((line = br.readLine()) != null) {
        String utf8 = new String(line.getBytes(),"euc-kr");
        System.out.println(utf8);
        bw.write(utf8);
        bw.newLine();
    }
        bw.flush();
        br.close();
        bw.close();
    }
```
