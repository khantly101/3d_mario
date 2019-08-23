//////////////////////
//Loaders
//////////////////////

const pipeLoader = new Loader.load("Textures/pipe.png")
const topLoader = new Loader.load("Textures/pipe_top.png")


//////////////////////
//Sides
//////////////////////

const pipeSides = [
	new THREE.MeshPhongMaterial({map: pipeLoader}),
	new THREE.MeshPhongMaterial({map: topLoader}),
	new THREE.MeshPhongMaterial({color: 0x0fdc0a})
]


//////////////////////
//Sound
//////////////////////

const pipelistener 	= new THREE.AudioListener()
const pipesound 	= new THREE.Audio(pipelistener)

audioLoader.load('sounds/pipe.wav', (buffer) => {
	pipesound.setBuffer(buffer)
	pipesound.setLoop(false)
	pipesound.setVolume(0.5)
})


//////////////////////
//Init Function
//////////////////////

initPipes = () => {

	//////////////////////
	//First Section Pipes
	//////////////////////

	//First Pipe

	const pipe = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe.position.set(9.3, 1, 0.5)
	scene.add(pipe)
	pipe.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id !== playerBox.geometry.id) {
			mushroomSd.speed = -mushroomSd.speed
			other_object.setLinearVelocity({x: mushroomSd.speed, y: 0, z: 0})
		}
	})

	const pipeTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipeTop.position.set(9.8, 2.1, .5)
	pipeTop.rotation.x = -Math.PI/2
	scene.add(pipeTop)

	const pipeTop2 = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipeTop2.position.set(8.8, 2.1, .5)
	pipeTop2.rotation.x = -Math.PI/2
	scene.add(pipeTop2)

	pipeTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	pipeTop2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})
	
	//Second Pipe

	const pipe2 = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe2.position.set(21.1, 2, 0.5)
	scene.add(pipe2)

	const pipe2Bottom = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe2Bottom.position.set(21.1, 0, 0.5)
	pipe2Bottom.rotation.x = -Math.PI
	scene.add(pipe2Bottom)

	const pipe2Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe2Top.position.set(21.6, 3.1, .5)
	pipe2Top.rotation.x = -Math.PI/2
	scene.add(pipe2Top)

	const pipe2Top2 = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe2Top2.position.set(20.6, 3.1, .5)
	pipe2Top2.rotation.x = -Math.PI/2
	scene.add(pipe2Top2)

	pipe2Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	pipe2Top2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	//Third Pipe

	const pipe3 = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe3.position.set(30.6, 3.1, 0.5)
	scene.add(pipe3)

	const pipe3Bottom = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 4.1, 32 ), pipeSides, 0)
	pipe3Bottom.position.set(30.6, .2, 0.5)
	pipe3Bottom.rotation.x = -Math.PI
	scene.add(pipe3Bottom)

	const pipe3Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe3Top.position.set(31.1, 4.2, .5)
	pipe3Top.rotation.x = -Math.PI/2
	scene.add(pipe3Top)

	const pipe3Top2 = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe3Top2.position.set(30.1, 4.2, .5)
	pipe3Top2.rotation.x = -Math.PI/2
	scene.add(pipe3Top2)

	pipe3Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	pipe3Top2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	//Fourth Pipe

	const pipe4 = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe4.position.set(43.6, 3.1, 0.5)
	scene.add(pipe4)

	const pipe4Bottom = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 4.1, 32 ), pipeSides, 0)
	pipe4Bottom.position.set(43.6, .2, 0.5)
	pipe4Bottom.rotation.x = -Math.PI
	scene.add(pipe4Bottom)

	const pipe4Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe4Top.position.set(44.1, 4.2, .5)
	pipe4Top.rotation.x = -Math.PI/2
	scene.add(pipe4Top)

	const pipe4Top2 = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe4Top2.position.set(43.1, 4.2, .5)
	pipe4Top2.rotation.x = -Math.PI/2
	scene.add(pipe4Top2)

	pipe4Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (keyboard[83]) {
			playerBox.position.set(80, -170, 0.25)
			playerBox.__dirtyPosition = true
			camera.position.set(100, -160, 20)
			pipesound.play()
		} else {
			jump = true
		}
	})

	pipe4Top2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})


	//////////////////////
	//Second Section Pipes
	//////////////////////

	// Fifth Pipe

	const pipe5 = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe5.position.set(168.85, 1, 0.5)
	scene.add(pipe5)

	const pipe5Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe5Top.position.set(169.35, 2.1, .5)
	pipe5Top.rotation.x = -Math.PI/2
	scene.add(pipe5Top)

	const pipe5Top2 = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe5Top2.position.set(168.35, 2.1, .5)
	pipe5Top2.rotation.x = -Math.PI/2
	scene.add(pipe5Top2)

	pipe5Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	pipe5Top2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	// Sixth Pipe

	const pipe6 = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), pipeSides, 0)
	pipe6.position.set(187.75, 1, 0.5)
	scene.add(pipe6)

	const pipe6Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe6Top.position.set(188.25, 2.1, .5)
	pipe6Top.rotation.x = -Math.PI/2
	scene.add(pipe6Top)

	const pipe6Top2 = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	pipe6Top2.position.set(187.25, 2.1, .5)
	pipe6Top2.rotation.x = -Math.PI/2
	scene.add(pipe6Top2)

	pipe6Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	pipe6Top2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

}