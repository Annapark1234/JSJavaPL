public class whileFor {
  public static void main(String[] args) {
    int i = 0;
    while (i<1000000){
      System.out.println(i);
      i=i+3;
    }

    for(int j = 0; j<100; j += 3){
      System.out.println(j);
    }

  }
}
