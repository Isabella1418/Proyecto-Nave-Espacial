class Perro{

     constructor(nombre, color, ojos){
        this.nombre = nombre
        this.ojo = ojos
        this.color = color
    }
     
    quienSoy(){
        return this

    }
     
    run(distanciaMaxima = 1000, velocidad =100){
        if (this.patas < 4){
            console.log("No puedo correr")
            return

        }
    
        let distanciaInicio = 0;
        let distanciaRecorrida = "";
        while(distanciaInicio <= distanciaMaxima)  {
            distanciaRecorrida += " * "

            distanciaInicio += velocidad

        }

        console.log(this.nombre, ": ", distanciaRecorrida);
    
    }


}    

const boby = new Perro('boby', 4)
const firulai = new Perro( 'firulai', 4)

boby.run(5000, 260)
firulai.run(5000, 120)