class LineaCesped extends THREE.Object3D {
    constructor(num_linea,ancho_linea,jardin) {
      super();

      this.obstaculos = [];
      this.arboles = [];
      this.rocas = [];  
      this.jardin = jardin ;

      this.linea = this.createLinea(num_linea,ancho_linea);


      this.add(this.linea);
    }

    
    createLinea(num_linea,ancho_linea){
        var linea = new THREE.Group();

        for (var i=0; i<ancho_linea; i++){
          var casilla = new CasillaCesped(num_linea*5,0,i*5);
        
          linea.add(casilla);

          var obstaculo = Math.random() * (10 - 0) + 0;

          if (obstaculo <= 1){
              var arbol = this.jardin.sacarArbol();
              arbol.scale.x = 1.5;
              arbol.scale.y = 1.5;
              arbol.scale.z = 1.5;
              arbol.position.y = 2.75;
              arbol.position.z = i*5;
              arbol.position.x = 5*num_linea;
              this.add(arbol);
              this.obstaculos.push(arbol.getCollider());
          }

          if (obstaculo > 1 && obstaculo <= 2){
              var rock = this.jardin.sacarRoca();
              rock.scale.x = 1.75;
              rock.scale.y = 1.75;
              rock.scale.z = 1.75;
              rock.position.y = 1;
              rock.position.z = i*5;
              rock.position.x = 5*num_linea;
              this.add(rock);
              this.obstaculos.push(rock.getCollider());
          }
            
        }

        return linea;
    }

    getObstaculos(){
      return this.obstaculos;
    }

    getTrampas(){
      return [];
    }

    recoger(){
      for (let i=0 ; i<this.arboles.length ; i++) this.jardin.meterArbol(this.arboles[i]);
      for (let i=0 ; i<this.rocas.length ; i++) this.jardin.meterRoca(this.rocas[i]);
    }
    
    update () {
    }
}