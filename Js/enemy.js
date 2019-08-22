//////////////////////
//Loaders
//////////////////////

const goombaLoader 		= new Loader.load("Textures/goomba.png")
const koopaLoader 		= new Loader.load("Textures/Koopa.png")
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

const koopaSides = [
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: koopaLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: koopaLoader, transparent: true, depthWrite: false, depthTest: false}),
]


//////////////////////
//Init Function
//////////////////////

const initEnemy = () => {

	//////////////////////
	//Goomba
	//////////////////////

	//First Group

	goomba = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba.position.set(25, .5, .25)
	scene.add(goomba)
	goomba.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		goombaSd.first = -goombaSd.first
	})

	//Second Group

	goomba2 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba2.position.set(35, .5, 0.25)
	scene.add(goomba2)
	goomba2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		goombaSd.second = -goombaSd.second
	})

	goomba3 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba3.position.set(38, .5, 0.25)
	scene.add(goomba3)
	goomba3.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		goombaSd.third = -goombaSd.third
	})

	//Third Group
	
	goomba4 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba4.position.set(73, 9.5, 0.25)
	scene.add(goomba4)

	goomba5 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba5.position.set(75, 9.5, 0.25)
	scene.add(goomba5)

	//Fourth Group

	goomba6 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba6.position.set(90, .5, 0.25)
	scene.add(goomba6)

	goomba7 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba7.position.set(92, .5, 0.25)
	scene.add(goomba7)

	//Fifth Group

	goomba8 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba8.position.set(120, .5, 0.25)
	scene.add(goomba8)

	goomba9 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba9.position.set(122, .5, 0.25)
	scene.add(goomba9)

	goomba10 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba10.position.set(124, .5, 0.25)
	scene.add(goomba10)

	goomba11 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba11.position.set(126, .5, 0.25)
	scene.add(goomba11)

	//Sixth Group

	goomba12 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba12.position.set(170, .5, 0.25)
	scene.add(goomba12)
	goomba12.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		goombaSd.twelfth = -goombaSd.twelfth
	})

	goomba13 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), goombaSides, 1)
	goomba13.position.set(172, .5, 0.25)
	scene.add(goomba13)
	goomba13.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		goombaSd.thirteenth = -goombaSd.thirteenth
	})

	//////////////////////
	//Koopa
	//////////////////////

	koopa = new Physijs.BoxMesh(new THREE.BoxGeometry(1.5, 1.5, 1), koopaSides, 1)
	koopa.position.set(100, .5, 0.25)
	scene.add(koopa)
}