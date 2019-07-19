public class array {
  public static void main(String[] args){
    String[] Mamamoo = {"화사","휘인","솔라","문별"};
    System.out.println(Mamamoo[3]);
    System.out.println(Mamamoo);
    String[] MamamooC = Mamamoo;
    MamamooC[0] = "청하";
    System.out.println(Mamamoo[0]); // shallow copy
  }
}
