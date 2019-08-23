//////////////////////
//Loaders
//////////////////////

const mushroomLoader 			= new Loader.load("Textures/mushroom.png")
const oneUpLoader 				= new Loader.load("Textures/1Up.png")
const transparentMushroomLoader = new Loader.load("Textures/transparent.png")


//////////////////////
//Sides
//////////////////////

const mushroomSide = [
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: mushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: mushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
]

const oneUpSide = [
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentMushroomLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: oneUpLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: oneUpLoader, transparent: true, depthWrite: false, depthTest: false}),
]


//////////////////////
//Sound
//////////////////////

const pulistener 	= new THREE.AudioListener()
const pusound 		= new THREE.Audio(pulistener)

audioLoader.load('sounds/powerup.wav', (buffer) => {
	pusound.setBuffer(buffer)
	pusound.setLoop(false)
	pusound.setVolume(0.5)
})

const uplistener 	= new THREE.AudioListener()
const upsound 		= new THREE.Audio(uplistener)

audioLoader.load('sounds/1-up.wav', (buffer) => {
	upsound.setBuffer(buffer)
	upsound.setLoop(false)
	upsound.setVolume(0.5)
})


//////////////////////
//Init Function
//////////////////////

const initMushroom = (x, y) => {

	mushroom = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), mushroomSide, 1)
	mushroom.position.set(x, y + 1.5, 0)
	scene.add(mushroom)
	mushroom.setLinearVelocity({x: mushroomSd.speed, y: 0, z: 0})
	mushroom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		mushroom.rotation.set(0, 0, 0)
		mushroom.__dirtyRotation = true
		mushroom.position.y += .1
		mushroom.setLinearVelocity({x: mushroomSd.speed, y: 0, z: 0})
		if (other_object.geometry.id === playerBox.geometry.id) {
			scene.remove(mushroom)
			pusound.play()
		}
	})
}

const init1Up = (x, y) => {

	let oneUp = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), oneUpSide, 1)
	oneUp.position.set(x, y + 1.5, 0)
	scene.add(oneUp)
	oneUp.setLinearVelocity({x: mushroomSd.speed, y: 0, z: 0})
	oneUp.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		oneUp.rotation.set(0, 0, 0)
		oneUp.__dirtyRotation = true
		oneUp.position.y += .1
		oneUp.setLinearVelocity({x: mushroomSd.speed, y: 0, z: 0})
		if (other_object.geometry.id === playerBox.geometry.id) {
			scene.remove(oneUp)
			upsound.play()
		}
	})
}