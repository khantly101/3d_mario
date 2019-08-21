//////////////////////
//Loaders
//////////////////////

const goombaLoader 		= new Loader.load("Textures/goomba.png")
const transparentLoader = new Loader.load("Textures/transparent.png")


////////////////
//Sides
////////////////

const goombaSides = [
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: goombaLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: goombaLoader, transparent: true, depthWrite: false, depthTest: false}),
]


//////////////////////
//Init Function
//////////////////////

const initEnemy = () => {

	//////////////////////
	//Goomba
	//////////////////////

	goomba = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba.position.set(25, .5, 0)
	scene.add(goomba)
	goomba.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		goombaSd.speed = -goombaSd.speed
	})

}