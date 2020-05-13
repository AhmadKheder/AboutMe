'use strict'
var pionts = 0;
var youName = prompt('what is your name', 'ur name');// to ask the user about his/her name
alert(`Hey ${youName}, lets guess some info about me  `);
//1
var smart = prompt("Do you think I'm a smart one ?");
myFriend(smart, '1');

//2
var coffee = prompt("Do I love coffee?");

myFriend(coffee, '2');

//3
var soos = prompt("Do I love 3erq soos?");
myFriend(soos , '3');

//4
var smoke = prompt("Do I smoke?");
myFriend(smoke ,'4');

//5
var hunger = prompt("Am I hungry?");
myFriend(hunger,'5');

// q6 call
old();
// q7 call

guessNumber();

//q:6
function old(){
    for (var i = 0; i < 4; i++) {
        var age = prompt('How old am I ? ');
    if (age == 24) {
        alert(`that Right I'm 24,corrct answer`);
        pionts++; break; }
    else if (age > 24) { alert('Too High '); }
    else if (age < 24) { alert('Too Low'); }
}}






function guessNumber(){
// var toPrint = '';
var arr = [0.1,0.2,0.3,0.4,0.5];//here
var c ;//counter for "for loop"
var c1 = 0 ;// counter for while
while(c1 < 6){
  var  num = prompt('Give a float number between Zero and One : ');
    for( c = 0 ; c < arr.length;c++){
        // toPrint = toPrint+arr[c]+' , ';
        if (num == arr[c]){

            alert('correct') ;
            pionts++;
            break;

        }


    }
    c1++;
}}
    // alert(toPrint);















// num = prompt('Give a float number between Zero and One : ');

// alert(`${arr.toString()}`);
// for(var arrPointer = 0 ; arrPointer < arr.length();arrPointer++){
// alert(`${arr[arrPointer]}`)
// }



truth();








// function rightClose(coffee, a) {

//     if (coffee.toUpperCase() == 'Y' || coffee.toUpperCase() == 'YES') {
//         alert('right');
//         myFriend(coffee, a);

//     } else if (coffee.toUpperCase() == 'N' || coffee.toUpperCase() == 'NO') {
//         alert('not sure u r  a close');
//         myFriend(coffee, a);

//     } else { myFriend(coffee, a); }
// }

function myFriend(q, question) {
    switch (q.toLowerCase()) {
        case 'y':
        case 'yes':
            console.log(` is good for me`);
            // alert(` correct answer`);//yes is good for me// correct answer
            // if (ans == true) {
            //     points++;
            // }
            // break;
            switch (question) {
                case '1':
                    alert(`Thank you I smart one Correct answer`);
                    pionts++;
                    break;

                case '2':
                    alert(`Yes I love coffe, correct answer`);
                    pionts++;
                    break;
                case '3':
                    alert(`I love 3req soos, correct answer, keep giong`);
                    pionts++;
                    break;
                case '4':
                    alert(`wrong answer, Iam not smoking`);
                    break;
                case '5':
                    alert(`Iam very hungry correct answer`);
                    pionts++;
                    break;

            }
            console.log(` after yes`);
            break;
        case 'n':
        case 'no':
            // console.log(` is not good for me`);
            // alert(` bad choice`);// no is not good for me// bad choice
            // if (ans == false) {
            //     points++;
            // }
            // break;
            switch (question) {
                case '1':
                    alert(`Thank you, I'll drink milk every morning`);
                    break;

                case '2':
                    alert(`in actully I love coffee, Wrong answer`);
                    break;
                case '3':
                    alert(`I love 3req soos, wrong answer, taste it`);
                    break;
                case '4':
                    alert(`Correct answer, Iam not smoking`);
                    pionts++;
                    break;
                case '5':
                    alert(`Iam very hungry, wrong answer`);
                    break;

            }
            break;
        default:
            alert('refresh the page and enter Y for yes or N for No')// for anaother trails
        // myFriend(q,a);
    }
}


function truth() {
    alert(`Actualy, I love coffe, 3erq soos,sleeping and smoking but \n I've been a not smoker for a month AND I am 24 `)

}

alert(` Your score is ${pionts} out of seven` );











