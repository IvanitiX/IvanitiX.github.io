 class LineaCarretera extends THREE.Object3D {
    constructor(num_linea,ancho_linea,garaje) {
      super();
  
      this.linea = this.createLinea(num_linea,ancho_linea);
      this.garaje = garaje;
      this.trampas = [];

      this.add(this.linea);

      this.hay_coche = false;  
    }
    
    createLinea(num_linea,ancho_linea,garaje){
        var linea = new THREE.Group();
        this.num_linea = num_linea;

        for (var i=0; i<ancho_linea; i++){
          var casilla = new CasillaCarretera(num_linea*5,0,i*5);
        
          linea.add(casilla);
        }

        return linea;
    }

    getTrampas(){
      return this.trampas ;
    }

    getObstaculos(){
      return [] ;
    }
    
    update () {
      var val = Math.random() * (100000 - 0) + 0;

      if (val > 99500 && !this.hay_coche){
        if (val <= 99625){
          this.coche = this.garaje.sacarCoche();
        }
        else if (val > 99625 && val <= 99750){
          this.coche = this.garaje.sacarCochePeque();
        }
        else if (val > 99750 && val <= 99875){
          this.coche = this.garaje.sacarBus();
        }
        else if (val > 99875){
          this.coche = this.garaje.sacarFurgoneta();
          
        }

        this.coche.position.x = this.num_linea*5;
        var izda_dcha = Math.random() * (100 - 0) + 0;

        if (izda_dcha <= 50){
          this.coche.position.z = 125;
          this.coche.rotation.y = Math.PI/2;
          this.derecha = true;
        }
        else{
          this.coche.position.z = 0;
          this.coche.rotation.y = -(Math.PI/2);
          this.derecha = false
        }
        this.add(this.coche);
        this.contador_coche = Date.now();
        this.tiempo_anterior = Date.now();
        this.hay_coche = true; 
        this.trampas.push(this.coche.getCollider());
      }

      if(this.hay_coche){
        var tiempo_actual = Date.now();

        var segundosTranscurridos = (tiempo_actual-this.tiempo_anterior)/1000;
        var tiempo_coche = (tiempo_actual-this.contador_coche)/1000;
        if(this.derecha){
          this.coche.position.z -= this.coche.velocidad * segundosTranscurridos;
        }
        else{
          this.coche.position.z += this.coche.velocidad * segundosTranscurridos;
        }

        if(tiempo_coche > this.coche.desaparicion){
          if (this.coche.isCoche) this.garaje.meterCoche(this.coche);
          else if (this.coche.isPeque) this.garaje.meterCochePeque(this.coche);
          else if (this.coche.isAutobus) this.garaje.meterBus(this.coche);
          else if (this.coche.isFurgoneta) this.garaje.meterFurgoneta(this.coche);
          this.remove(this.coche);
          this.hay_coche = false;
        }
        this.tiempo_anterior = tiempo_actual;
      }
    }
  }