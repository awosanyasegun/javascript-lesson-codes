//ask a question
//random number for random response
//use switch to create some random responses
//output the response back with the question
var question = prompt('Ask your Question ');
var answer = 'something went wrong';
var random = Math.floor(Math.random() * 10);
switch(random){
    case 0:
	    answer = 'yes it is possible';
		break;
	case 1:
	    answer = 'no, it is not possible';
		break;
	case 2:
	    answer = 'probably';
		break;
	case 3:
	    answer = 'Better Luck next time';
		break;
	case 4:
	    answer = 'Good luck with your life'
		break;
	default:
	answer = 'you are completely of the tangent';
};
output.innerHTML = 'your question was ' + '" ' + question + ' "'+ ' But my answer is ' + answer; 