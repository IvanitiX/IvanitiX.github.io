class Jardin extends THREE.Object3D{
    constructor(){
        super();

        this.arboles = [];
        this.rocas = [];

        this.precargar();
    }

    precargar(){
        //Vamos a dejar ya en los buffers unas cuantas rocas y árboles.
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.arboles.push(new Arbol());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
        this.rocas.push(new Rock());
    }

    sacarArbol(){
        if (this.arboles.length == 0) return new Arbol();
        else return this.arboles.pop();
    }

    meterArbol(arbol){
        this.arboles.push(arbol);
    }

    sacarRoca(){
        if (this.rocas.length == 0) return new Rock();
        else return this.rocas.pop();
    }

    meterRoca(roca){
        this.arboles.push(roca);
    }
}