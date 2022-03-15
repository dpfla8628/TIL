import java.util.ArrayList;
import java.util.Arrays;

class test {
   public static void main(String args[]) {
        ArrayList<Integer> integers = new ArrayList<>(Arrays.asList(0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,1,1,1,0,1,1));
        int total = 0;
        int count = 0;
        int length = integers.size();

        for (int i = 0; i < length - 2; i++) {
            count++;
            if (integers.get(i).equals(0) && integers.get(i+1).equals(0) && integers.get(i+2).equals(0)){
                int countZero = 0;
                for (int j = i+1 ; j < length; j++) {
                    if (integers.get(j).equals(0)) {
                        countZero++;
                    } else break;
                }
                i += countZero;
                total += (count-1)/5;
                count = 0;
            }
        }
        if (integers.get(length - 1).equals(1)) {
            count+=2;
        } else if (integers.get(length - 2).equals(1)) {
            count++;
        }
        total += count/5;
        System.out.println(total);
    }
}
