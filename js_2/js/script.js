var arr = [];

for (i = 0; i < 5; i++){

	arr[i] = prompt("Введите имя " + (i + 1));

}

var name = prompt("Введите имя пользователя");
var clon;

for(var i = 0; i < 5; i++) {

	if(arr[i] === name){
		clon = true; 
		break;
	}
	clon = false;
}

if(!clon){
	alert("Имя, " + name + " не найдено");
} else {
	alert(name + ", вы успешно вошли");
}