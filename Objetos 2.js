function ejercicioUno (numInicial,numFinal){
  
    var numeros = {
          inicio: numInicial,
          final: numFinal,
    };
    suma = 0;
   for (i= numeros.inicio; i<= numeros.final; i++)  {
   suma = suma + i;
  }
    return suma;
   
}
  //console.log (ejercicioUno (1,10));

 
  
      function ChicaLaboratoria(nombre, edad, ocupacion, genero){
          this.nombre = nombre;
          this.edad = edad;
          this.ocupacion = ocupacion;
          this.genero = genero;
          this.mensaje = function(){
              if (this.edad > 17){
                  if (this.ocupacion.toLowerCase() == "estudiante laboratoria" || this.ocupacion.toLowerCase() == "web developer"){
                      if (this.genero.toLowerCase() == "femenino"){
                          return "You're awesome"
                      } else {
                         return "Upsiii"
                      }
                  }
              }
            }
         }
     
var persona = new ChicaLaboratoria ("Tamara", 22, "Estudiante Laboratoria", "Femenino");

//console.log(persona.mensaje());
 
// ejercicio TRES
            
function ejercicioTres(arr){
  var objeto = {}; 
for (i=0; i < arr.length; i++){
  objeto['propiedad'+i] = arr[i];
  } 
  return objeto;
}
 console.log(ejercicioTres([6,5,4,3,2,1]))
;

// ejercicio CUATRO

  function Paciente(nombre,apellido,edad,genero,ciudad,pais){
  this.nombre = nombre;
  this.apellido = apellido;
  this.edad = edad;
  this.genero = genero;
  this.ciudad = ciudad;
  this.pais = pais;
  this.ficha = function (){
    return "Nombre: " + this.nombre+ " " + this.apellido+ "\n"+ "Edad: " + this.edad+ "\n" + "País : "+ this.pais;
  }
   
}
var paciente = new Paciente ("Blanca","Perez",22,"Femenino","Santiago","Chile");
//console.log(paciente.ficha());