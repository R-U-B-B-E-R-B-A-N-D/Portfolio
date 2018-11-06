for(let i=0; i<document.getElementsByClassName('fluency').length; i++){
	let elem = document.getElementsByClassName('fluency')[i];
	let fluency = elem.dataset.fluency;
	elem.style.width = (fluency/100)*65 + "%";
	elem.style.right = 5 + (65 - ((fluency/100)*65)) + "%";
	//console.log(elem.style.width);
}

var currentScreen = 1;
document.addEventListener('scroll', function(){
	console.log("gg");
})

function addClassTo(classArray, classToAdd, add){
	let i = 0;
	for(let i=0; i<classArray.length; i++){
		let elems = document.querySelectorAll(classArray[i]);
		for(let ii=0; ii<elems.length; ii++){
			if(add){
				console.log('adding ' + classToAdd[i] + ' to ' + classArray[i]);
				elems[ii].classList.add(classToAdd[i]);	
			}else if(!add){
				elems[ii].classList.remove(classToAdd[i]);
			}
		}
	}
}

document.addEventListener('DOMContentLoaded', function(){
	///////////entry screen animations 
	setTimeout(function(){
		addClassTo(['.blackBack', '.whiteBack', '.hello', '.from'], ['blackBackVisible', 'whiteBackVisible', 'helloVisible', 'fromVisible'], true);
	}, 100);
})

document.addEventListener('wheel', function(e){
	let blackBack = document.getElementsByClassName('blackBack')[0];
	let whiteBack = document.getElementsByClassName('whiteBack')[0];
	let hello = document.getElementsByClassName('hello')[0];
	let from = document.getElementsByClassName('from')[0];
	let BLACK = document.getElementsByClassName('BLACK')[0];
	BLACK.style.width = 70 + 'vw';
	document.querySelector('.rubberband').style.opacity = 0;
	whiteBack.style.opacity = 0;
	hello.style.opacity = 0;
	from.style.opacity = 0;
	blackBack.style.opacity = 0;
	setTimeout(function(){
		addClassTo(['.blackBack', '.whiteBack', '.hello', '.from'], ['blackBackVisible', 'whiteBackVisible', 'helloVisible', 'fromVisible'], false);
		addClassTo(['.whatWeDoContainer', '.headline', '.primary .title', '.skill', '.features .box', '.skillset .title', '.secondary .title'], ['wwdVisible', 'visible', 'visible', 'visible', 'visible', 'visible', 'visible'], true);
	}, 500)
})








