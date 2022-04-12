class Usuario {
    constructor( nombre, apellido) {
        this.nombre = nombre;
        this.apellido  = apellido ;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        let fullName = `${this.nombre} ${this.apellido}`;
        return fullName
    }

    addMascotas(mascota){
        this.mascotas.push(mascota)
    }

    countMascotas(){
        return this.mascotas.length
    }

    addBooks(nombre, autor){
        let newBook = {nombre: `${nombre}`, autor: `${autor}`} 
        this.libros.push(newBook)
    }

    getBookNames(){
        const newArray = this.libros.map((element)=>{
            return element.nombre
        })
        return newArray
    }

}


let usuario1 = new Usuario("Victor", "Ruiz");

console.log(usuario1.getFullName())

usuario1.addMascotas("Yimbo")
usuario1.addMascotas("Indi")

console.log(usuario1.countMascotas())

usuario1.addBooks("El principito","Antoine de Saint-Exupéry")
usuario1.addBooks("1984", "george Orwell")

console.log(usuario1.getBookNames())
