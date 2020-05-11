'use strict'

var name = prompt('what is your name','ur name');
alert(`Hey ${name}, lets guess some info about me  `)

var coffee = prompt("Do I love coffee?");
rightClose(coffee,'coffee');



var soos = prompt("Do I love 3erq soos?");
rightClose(soos,'soos');

var smoke = prompt("Do I smoke?");
rightClose(smoke,'smoke');


var hunger = prompt("Am I hungry?");
rightClose(hunger,'eating less ');

var sleeping = prompt("Do I love sleeping ?");
rightClose(sleeping,'sleeping');








function rightClose(coffee,a){

    if(coffee.toUpperCase == 'Y' || coffee.toUpperCase == 'YES' ){
        alert('right');
        myFriend(coffee,a);
    
    }else if(coffee.toUpperCase == 'N' || coffee.toUpperCase == 'NO' ){
        alert('not sure u r  a close');
        myFriend(coffee,a);
    
    }else{  myFriend(coffee,a);}
}

function myFriend(q,a){
switch (q.toLowerCase()) {
    case 'y':
    case 'yes':
        console.log(`${a} is good for me` );
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


