var num;
var deg;

num = prompt("Введите число");
deg = prompt("Введите степень");

res = pow(num, deg);

console.log("result = ", res)

function pow(num, deg){

	var res = 1;
	
	if(deg < 0){
		num = 1 / num;
		deg *= -1;
	}

	for(var i = 0; i < deg; i++){

		res = res * num;

	}

	return res;
}