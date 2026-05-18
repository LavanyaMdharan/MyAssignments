function gradeCalculator(studentScore){
switch(true){
    case(studentScore==100):
    console.log("Grade is S")
    break
    case(studentScore<100 && studentScore>=90):
    console.log("Grade is A")
    break
    case(studentScore<90 && studentScore>=80):
    console.log("Grade is B")
    break
    case(studentScore<80 && studentScore>=70):
    console.log("Grade is C")
    break
    case(studentScore<70 && studentScore>=60):
    console.log("Grade is D")
    break
    case(studentScore<60 && studentScore>=50):
    console.log("Grade is E")
    break
    case(studentScore<50):
    console.log("Grade is F, Student has failed")
    break
    default:
        console.log("Exam not attended")
        break
}
}
gradeCalculator("Noattendance")