let t = 0;
let amount = 100;
let diametr = 45;
let x = window.innerWidth / 2, y = window.innerHeight / 2;
let mas = [], mas1 = [];
for(i = 0; i < amount; i ++){
	let prt = document.createElement("div");
	prt.id = "p" + i;
	prt.style = "position: absolute; width: 10px; height: 10px;";
	prt.style.background = "rgba(" + Math.floor(256 * Math.random()) + ", " + Math.floor(256 * Math.random()) + ", " + Math.floor(256 * Math.random()) + ", " + Math.random() + ")";
	prt.style.left = (x + diametr * Math.sin(i / amount * 2 * Math.PI)) + "px";
	prt.style.top = (y + diametr * Math.cos(i/amount * 2 * Math.PI)) + "px";
	prt.style.width = (Math.random() * 15) + "px";
	prt.style.height = (Math.random() * 15) + "px";
	prt.style.transform = "rotateZ(" + (Math.random() * 90) + "deg)";
	document.body.append(prt);
	mas.push(Math.random()); mas.push(Math.random());
	mas1.push(x); mas1.push(y);
}
setInterval(function(){
	for(i = 0; i < amount; i ++){
		mas1[i * 2] = mas1[i * 2] + (x - mas1[i * 2]) / (10 + mas[i * 2] * 100);
		mas1[i * 2 + 1] = mas1[i * 2 + 1] + (y - mas1[i * 2 + 1]) / (10 + mas[i * 2 + 1] * 100);
		document.querySelector("#p" + i).style.left = (mas1[i * 2] + diametr * Math.sin(i / amount * 2 * Math.PI + t / 50)) + "px";
		document.querySelector("#p" + i).style.top = (mas1[i * 2 + 1] + diametr * Math.cos(i / amount * 2 * Math.PI + t / 50)) + "px";
	//	document.querySelector("#p" + i).style.transform = "rotateY(" + t + "deg)";
	}
	t --;
}, 20);
document.onmousemove = function(e){
	setTimeout(function(){
		x = e.pageX;
		y = e.pageY;
	}, 1000);
}
