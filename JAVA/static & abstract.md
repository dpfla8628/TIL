## Static
: 공통으로 값을 유지하고 싶을 때만 사용
```java
public class Test {
  public static void main(String[] args){
    System.out.print(MathTest.width); // static 변수는 인스턴스화 할 필요없이 바로 호출
    System.out.print(MathTest.height);
    
    MathTest m1 = new MathTest(); // 객체 생성
    m1.name = "test";
    System.out.print(m1.name);
    
    m1.width = 300;
    System.out.print(m1.width); // 300
    
    MathTest m2 = new MathTest();
    System.out.print(MathTest.width); // 300 ? 공통 변수를 참고하고 있기 때문
    }
  }
class MathTest {
  String name;
  static int width = 100;
  static int height = 200;
}
```

## abstract
: 반드시 상속해서 사용하도록 강제하는 것 = 구체적인 구현은 하위 클래스에서 오버라이딩 해야 한다
```
abstract class Calculator{
    int left, right;
    public void setOprands(int left, int right){
        this.left = left;
        this.right = right;
    } 
    public abstract void sum();  
    public abstract void avg();
    public void run(){
        sum();
        avg();
    }
}
class CalculatorDecoPlus extends Calculator {
    public void sum(){
        System.out.println("+ sum :"+(this.left+this.right));
    }
    public void avg(){
        System.out.println("+ avg :"+(this.left+this.right)/2);
    }
} 
class CalculatorDecoMinus extends Calculator {
    public void sum(){
        System.out.println("- sum :"+(this.left+this.right));
    }
    public void avg(){
        System.out.println("- avg :"+(this.left+this.right)/2);
    }
} 
public class CalculatorDemo {
    public static void main(String[] args) { 
        CalculatorDecoPlus c1 = new CalculatorDecoPlus();
        c1.setOprands(10, 20);
        c1.run();
         
        CalculatorDecoMinus c2 = new CalculatorDecoMinus();
        c2.setOprands(10, 20);
        c2.run();
    }
   
}
```
