class Arbol extends THREE.Object3D{
    constructor(){
        super();

        var that = this ;
        var materialLoader = new THREE.MTLLoader();
        var objectLoader = new THREE.OBJLoader();

        this.collider = new THREE.Mesh() ;

        materialLoader.load('models/tree/lowpolytree.mtl',
            function(material){
                objectLoader.setMaterials(material);
                objectLoader.load('models/tree/lowpolytree.obj',
                function(objeto){
                    var modelo = objeto ;
                    //Collider
                    var bounding = new THREE.BoxHelper(modelo);
                    bounding.geometry.computeBoundingBox();
                    var bb = bounding.geometry.boundingBox;
                    var geomCollider = new THREE.BoxBufferGeometry(bb.max.x-bb.min.x,bb.max.y-bb.min.y,bb.max.z-bb.min.z);
                    geomCollider.translate(0,0.65,0)
                    var matCollider = new THREE.MeshPhongMaterial({color:0x00ab00, transparent:true, opacity:0.0});
                    that.collider.geometry = geomCollider;
                    that.collider.material = matCollider ;
                    that.collider.add(modelo);
                    that.add(that.collider);
                },null,null);
            });
    }

    getCollider(){
        return this.collider;
    }

    update(){
    }
}