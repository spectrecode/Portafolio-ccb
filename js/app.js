window.addEventListener("load", function(){
  document.onmousemove = function(e) {
    var intro = document.getElementsByClassName("intro")[0];
    var x = -(e.clientX/100);
    // lo mismo para Y
    var y = -(e.clientY/25);
    // backgroundPosition son las coordenadas del fondo
    intro.style.backgroundPosition = x + 'px ' + y + 'px';
  };		
	// function efectoSlider(){
	// 	var intro = document.getElementsByClassName("intro")[0];
	// 	var firstBoton = document.getElementById("first");
	// 	firstBoton.addEventListener("click", function(){
	// 		this.parentElement.parentElement.classList.add("fadeFirst");
	// 	});
	// }
	// efectoSlider();

	// function skills(){
	// 	var lenguaje1 = document.getElementById("lenguaje1");
	// 	var tacha1 = document.getElementsByClassName("tacha")[0];

	// 	lenguaje1.addEventListener("mouseover", function(){
	// 		tacha1.classList.add("borrar");
	// 	})

	// 	lenguaje1.addEventListener("mouseout", function(){
	// 		tacha1.classList.remove("borrar");
	// 	})
	// }
	// skills();

	// function navbarQuinto(){
	// 	var navfix = document.getElementsByClassName("navfix")[0];
	// 	var botonCollapse = document.getElementsByClassName("botonCollapse")[0];
	// 	var forthBoton = document.getElementById("forth");

	// 	forthBoton.addEventListener("click", function(){
	// 		navfix.style.color = "black";
	// 	})

	// 	forthBoton.addEventListener("click", function(){
	// 		botonCollapse.style.color = "black";
	// 	})
	// }

	// navbarQuinto();
	
});


// function botonHover(){
// 		var uno = document.getElementsByClassName("uno")[0];
// 		var body = document.body;
// 		var html = document.documentElement;
// 		// var sectionFirst = document.getElementById("sectionFirst");
// 		var firstBoton = document.getElementById("first");
		
// 		firstBoton.addEventListener("click", function(){
// 			if (body.scrollTop > 1000 || html.scrollTop > 1000) {
// 			uno.classList.add("hoverAuto");
// 			}
// 		})
		
// 	}
// 	botonHover();
// boton.addEventListener("click", function() {
//         var color = document.getElementById("color").value;
        
//         setTimeout(function(){ 
// 		document.body.style.backgroundColor = color;
//         }, 2000);
//     }); 

