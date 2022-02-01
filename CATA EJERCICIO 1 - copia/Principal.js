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
           console.log(actual.nombres+"("+ actual.genero + ") "+ actual.duracion + "-minutos");
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
    }
    console.log(peliculaMasCorta);
}


function peliculaMasLarga() {
  
    let peliculaMasLarga = misPeliculas[0];
    for (let i = 0; i < misPeliculas.length; i++) {
        let actual = misPeliculas[i];
        if (actual.duracion > peliculaMasLarga.duracion) {
            peliculaMasLarga = actual;
        }
    }
    console.log(peliculaMasLarga);
}

function agregarPelicula(nombres,año,duracion,genero) {
    misPeliculas.push(new Pelicula(nombres,año,duracion,genero));
    mostrarTodos();
  }
  
  function RemoverPelicula(nombres){
      switch(nombres){
          case "Titanic":
          misPeliculas.splice(0,1);
          mostrarTodos();
          break;
          case "Coraline":
          misPeliculas.splice(1,1);
          mostrarTodos();
          break;
          case "Tick tick Boom":
          misPeliculas.splice(2,1);
          mostrarTodos();
          break;
          case "Toy Story":
          misPeliculas.splice(3,1);
          mostrarTodos();
          break;
          case "Riquiem for a Dream":
          misPeliculas.splice(4,1);
          mostrarTodos();
          break;
          case "Matrix":
          misPeliculas.splice(5,1);
          mostrarTodos();
          break;
          case "Volver al futuro":
          misPeliculas.splice(6,1);
          mostrarTodos();
          break;
          case "Harry Potter La piedra filosofal":
          misPeliculas.splice(7,1);
          mostrarTodos();
          break;
          case "Piratas del Caribe":
          misPeliculas.splice(8,1);
          mostrarTodos();
          break;
          case "Django":
          misPeliculas.splice(9,1);
          mostrarTodos();
          break;

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
          let nombres = window.prompt("Insertar nombre de la pelicula");
          let año = window.prompt("Insertar año de la pelicula");
          let duracion = window.prompt("Insertar duracion pelicula");
          let genero = window.prompt("Insertar genero de la pelicula");
          agregarPelicula(nombres,año,duracion,genero);
          break;
          
    case "6":
        let remover = window.prompt("Escribe el nombre de la peliula que quieres eliminar : \nTitanic \nCoraline \nTick Tick Boom \nToy Story \nRiquiem for a Dream \nMatrix \nVolver al futuro \nHarry Potter La piedra filosofal \nPiratas del caribe \nDjango");
        RemoverPelicula(remover);

    break;
}


