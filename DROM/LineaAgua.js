class LineaAgua extends THREE.Object3D {
    constructor(num_linea,ancho_linea) {
      super();

      var val = Math.random() * (10 - 0) + 0;

      if (val>5){
          this.madera = true;
      } 
      else{
          this.madera = false;
      }
  
      this.trampas = [];
      this.linea = this.createLinea(num_linea,ancho_linea);

      this.add(this.linea);
    }

    getTrampas(){
      return this.trampas ;
    }

    getObstaculos(){
      return [];
    }

    
    createLinea(num_linea,ancho_linea){
        var linea = new THREE.Group();

        for (var i=0; i<ancho_linea; i++){
          var transitable = Math.random() * (10 - 0) + 0;

          if(transitable <=5 ){
            var cas = new CasillaAgua(num_linea*5,0,i*5);
            linea.add(cas);
            this.trampas.push(cas.casilla.children[0]);
          }
          
          if (transitable > 5){
            if(this.madera){
              var cas = new CasillaMadera(num_linea*5,0.25,i*5);
            }
            else{
              var cas = new CasillaNenufar(num_linea*5,0.25,i*5);
            }
            linea.add(cas);
          }
        }

        return linea;
    }
    
    update () {
    }
}