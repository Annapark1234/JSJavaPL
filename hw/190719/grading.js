// Level 1.
// grade 라는 variable에 성적 데이터를 number 형식으로 저장한다.
// if - else if - else 를 이용해서,
// 성적 값이 90, 80, 70, 60 을 경계로 A, B, C, D, F 를 출력한다.
// console.log 는 딱 1번만 쓴다.
// 출력 형태 : "You got {Grade}. Keep it up!"


// Level2.
// Level1과 같되, 성적에 따라서 다른 커멘트를 하게 한다.
// A : you are awesome
// B : Good job!
// C : You can do better!
// D : you should have worked harder
// F : You useless piece of ...
// hint: array 와 object Collection을 사용하면 좋다.
// console.log는 마찬가지로 딱! 한번만 써야 한다.


var grade = 82
var alphaGrade
var comment = {
  A : "you are awesome",
  B : "Good job!",
  C : "You can do better!",
  D : "you should have worked harder",
  F : "You useless piece of ..."}

if (grade >= 90){
  alphaGrade = "A"
}
else if (grade >= 80){
  alphaGrade = "B"
}
else if (grade >= 70){
  alphaGrade = "C"
}
else if (grade >= 60){
  alphaGrade = "D"
}
else {
  alphaGrade = "F"
}
console.log ("You got " + alphaGrade + "." + comment[alphaGrade])
