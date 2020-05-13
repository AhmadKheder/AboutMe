'use strict'

// var name = prompt('what is your name', 'ur name');
// alert(`Hey ${name}, lets guess some info about me  `);

// var coffee = prompt("Do I love coffee?");
// rightClose(coffee, 'coffee');



// var soos = prompt("Do I love 3erq soos?");
// rightClose(soos, 'soos');

// var smoke = prompt("Do I smoke?");
// rightClose(smoke, 'smoke');


// var hunger = prompt("Am I hungry?");
// rightClose(hunger, 'eating less ');

// var sleeping = prompt("Do I love sleeping ?");
// rightClose(sleeping, 'sleeping');

// var smart = prompt("Do you think I'm a smart one ?");
// rightClose(smart, 'coding');




var age = prompt('How old am I ? ');

for (var i = 0; i < 4; i++) {
    if (age == 24) {counter++; break; }
    else if (age > 24) { age = prompt('Too High '); }
    else if (age < 24) { age = prompt('Too Low'); }
}







var num = prompt('Give a float number between Zero and One : ');
var toPrint = '';
var arr = [0.1,0.2,0.3,0.4,0.5];
var c ;
var c1 = 0 ;
while(c1 < 6){
    num = prompt('Give a float number between Zero and One : ');
    for( c = 0 ; c < arr.length;c++){
        toPrint = toPrint+arr[c]+' , ';
        if (num == arr[c]){
            
            alert('correct') ;
            break;
        
        }
        
        
    }
    c1++;
}
    alert(toPrint);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // num = prompt('Give a float number between Zero and One : ');

// alert(`${arr.toString()}`);
// for(var arrPointer = 0 ; arrPointer < arr.length();arrPointer++){
// alert(`${arr[arrPointer]}`)
// }



truth();








function rightClose(coffee, a) {

    if (coffee.toUpperCase() == 'Y' || coffee.toUpperCase() == 'YES') {
        alert('right');
        myFriend(coffee, a);

    } else if (coffee.toUpperCase() == 'N' || coffee.toUpperCase() == 'NO') {
        alert('not sure u r  a close');
        myFriend(coffee, a);

    } else { myFriend(coffee, a); }
}

function myFriend(q, a) {
    switch (q.toLowerCase()) {
        case 'y':
        case 'yes':
            console.log(`${a} is good for me`);
            alert(`${a} is good for me`);
            break;

        case 'n':
        case 'no':
            console.log(`${a} is not good for me`);
            alert(`${a} is not good for me`);
            break;

        default:
            alert('refresh the page and enter Y for yes or N for No')
        // myFriend(q,a);
    }
}


function truth() {
    alert(`Actualy, I love coffe, 3erq soos,sleeping and smoking but \n I've been a not smoker for a month AND I am 24 `)

}













