class Autobus extends THREE.Object3D{
    constructor(){
        super();
        this.esAutobus = true;
        var that = this ;
        var materialLoader = new THREE.MTLLoader();
        var objectLoader = new THREE.OBJLoader();

        this.collider = new THREE.Mesh();

        materialLoader.load('models/bus/bus.mtl',
            function(material){
                objectLoader.setMaterials(material);
                objectLoader.load('models/bus/bus.obj',
                function(objeto){
                    var modelo = objeto ;
                    modelo.position.x = 0;
                    //Collider
                    var bounding = new THREE.BoxHelper(modelo);
                    bounding.geometry.computeBoundingBox();
                    var bb = bounding.geometry.boundingBox;
                    var geomCollider = new THREE.BoxBufferGeometry(bb.max.x-bb.min.x,bb.max.y-bb.min.y,bb.max.z-bb.min.z);
                    geomCollider.scale(1.1,1.1,1.1);
                    geomCollider.translate(13.5,15,-5.5);
                    var matCollider = new THREE.MeshPhongMaterial({color:0xbb0000, transparent:true, opacity:0.0});
                    that.collider.geometry = geomCollider;
                    that.collider.material = matCollider ;
                    that.collider.add(modelo);
                    that.add(that.collider);
                },null,null);
            });
    
        this.scale.x = 0.08;
        this.scale.y = 0.08;
        this.scale.z = 0.08;
        this.position.y = 1.0;
        this.velocidad = 30;
        this.desaparicion = 4.0;
    }

    getCollider(){
        return this.collider;
    }

    update(){
    }
}