```java
class Car {
    String color;
    String gearType;
    int door;

    Car() {
        this("white", "auto", 4);	
    }

    Car(String color) {
        this(color, "auto", 4);
        // 위의 코드가 코드의 재사용성이 더 높다
        // this.color = color;
        // this.gearType = "auto";
        // this.door = 4;
    }
    Car(String color, String gearType, int door) {
        this.color    = color;
        this.gearType = gearType;
        this.door     = door;
    }
}

class ConstructorTest {
    public static void main(String[] args) {
        Car c1 = new Car();	
        Car c2 = new Car("blue");
        Car c3 = new Car("red", "auto", 5);

        System.out.println("c1 color=" + c1.color + ", gearType=" + c1.gearType+ ", door="+c1.door);
        System.out.println("c2 color=" + c2.color + ", gearType=" + c2.gearType+ ", door="+c2.door);
        System.out.println("c2 color=" + c3.color + ", gearType=" + c3.gearType+ ", door="+c3.door);
    }
}
    
```
