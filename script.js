var player = prompt('Do you choose Rock paper or scissors?');
var ps = player.charAt(0).toUpperCase();
var win = false;
var computer =Math.random();
if(computer <0.34){computer = 'Rock';}
else if (computer <0.67){computer ='paper';}
else{computer = 'Scissors';}
var cs = computer.charAt(0).toUpperCase();
