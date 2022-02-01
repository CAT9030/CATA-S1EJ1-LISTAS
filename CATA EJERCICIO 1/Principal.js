let opcion = window.prompt("Selecciona una opción: \n1 Muestra todas las peliculas. \n2 Películas que duren más de dos horas \n3 Mostrar película más larga \n4 Mostar película más corta \n5 Agregar Pelicula \n6 Remover Pelicula");



function mostrarTodos() {
    for (let i = 0; i < misPeliculas.length; i++) {
        const actual = misPeliculas[i];
        console.log(actual.nombres + " (" + actual.año + ") "+ actual.genero + " "+ actual.duracion + "-minutos");
    }
}

function peliDos(){
   for (let i=0; i < misPeliculas.length;i++){
       let actual= misPeliculas[i];
       if(actual.duracion > 2 ){
           console.log(actual.nombres+ actual.genero + actual.duracion + "minutos");
       }
   }
}

function peliculaMasCorta() {
  
    let peliculaMasCorta = misPeliculas[0];
    for (let i = 0; i < misPeliculas.length; i++) {
        let actual = misPeliculas[i];
        if (actual.duracion < peliculaMasCorta.duracion) {
            peliculaMasCorta = actual;
        }
        console.log(peliculaMasCorta);

    }
}


function peliculaMasLarga() {
  
    let peliculaMasLarga = misPeliculas[0];
    for (let i = 0; i < misPeliculas.length; i++) {
        let actual = misPeliculas[i];
        if (actual.duracion > peliculaMasLarga.duracion) {
            peliculaMasLarga = actual;
        }
        console.log(peliculaMasLarga);

    }
}





class Pelicula{
    constructor (nombres, año ,duracion ,genero) {
        this.nombres=nombres;
        this.año=año;
        this.duracion=duracion;
        this.genero=genero;

    }
    
}




let misPeliculas =[];
misPeliculas.push(new Pelicula("Titanic",1997, 2.30, "Drama"));
misPeliculas.push(new Pelicula("Coraline",2007, 1.10, "Misterio"));
misPeliculas.push(new Pelicula("Tick tick Boom",2022, 2.15, "Drama,musical"));
misPeliculas.push(new Pelicula("Toy Story",1999, 0.50, "Comedia, aventura"));
misPeliculas.push(new Pelicula("Riquiem for a Dream",2002, 2.20, "Drama, trágica"));
misPeliculas.push(new Pelicula("Matrix",1999, 1.25, "Ciencia Ficción"));
misPeliculas.push(new Pelicula("Volver al futuro",1980, 1.30, "Ciencia Ficción"));
misPeliculas.push(new Pelicula("Harry Potter La piedra filosofal",2001, 1.40, "Fantasía"));
misPeliculas.push(new Pelicula("Piratas del Caribe",2003, 2.03, "Aventura"));
misPeliculas.push(new Pelicula("Django",2013, 3.10, "Aventura"));






switch (opcion){
    case "1":
        mostrarTodos();
    break;
    case "2":
        peliDos();
    break;
    case "3":
        peliculaMasLarga();
    break;
    case "4":
        peliculaMasCorta();
    break;
    case "5":
          let nombre = window.prompt("Insertar nombre pelicula");
          agregar(nombre);
          agregar
    case "6":
        let.console= window.prompt ("Escriba Nombre de la película");
    break;
}


function agregar(nombre) {
    var nombre = [];
      nombre.push(new Pelicula(nombre)); 
    document.getElementById(misPeliculas).innerHTML = nombre.join("");
  }
  