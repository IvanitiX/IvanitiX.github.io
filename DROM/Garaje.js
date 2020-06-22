class Garaje extends THREE.Object3D{
    constructor(){
        super();

        this.coches = [];
        this.cochespequenos = [];
        this.furgonetas = [];
        this.autobuses = [] ;

        this.precargar();
    }

    precargar(){
        // Vamos a dejar en el garaje ya unos cuantos coches de cada tipo para que la carga dinámica sea menor.
        this.coches.push(new Coche());
        this.coches.push(new Coche());
        this.coches.push(new Coche());
        this.cochespequenos.push(new CochePeque());
        this.cochespequenos.push(new CochePeque());
        this.cochespequenos.push(new CochePeque());
        this.furgonetas.push(new Furgoneta());
        this.furgonetas.push(new Furgoneta());
        this.furgonetas.push(new Furgoneta());
        this.autobuses.push(new Autobus());
        this.autobuses.push(new Autobus());
        this.autobuses.push(new Autobus());
    }

    sacarCoche(){
        if (this.coches.length < 1) {return new Coche();}
        else {return this.coches.pop()};
    }
    meterCoche(coche){
        this.coches.push(coche);
    }
    sacarCochePeque(){
        if (this.cochespequenos.length < 1) {return new CochePeque();}
        else {return this.cochespequenos.pop();}
    }
    meterCochePeque(coche){
        this.cochespequenos.push(coche);
    }
    sacarFurgoneta(){
        if (this.furgonetas.length < 1) {return new Furgoneta();}
        else {return this.furgonetas.pop();}
    }
    meterFurgoneta(furgo){
        this.furgonetas.push(furgo);
    }
    sacarBus(){
        if (this.autobuses.length < 1) {return new Autobus();}
        else {return this.autobuses.pop();}
    }
    meterBus(bus){
        this.autobuses.push(bus);
    }

}