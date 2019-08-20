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
//Init Function
//////////////////////

initPipes = () => {

	//////////////////////
	//First Section Pipes
	//////////////////////

	//First Pipe

	const pipe = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe.position.set(9.3, 1, 0.5)
	scene.add(pipe)
	pipe.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (keyboard[65]) {
			playerBox.position.x += 1 
		} else if (keyboard[68]) {
			playerBox.position.x -= 1
		}
	})


	//Second Pipe

	const pipe2 = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe2.position.set(21.1, 2, 0.5)
	scene.add(pipe2)

	const pipe2Bottom = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe2Bottom.position.set(21.1, 0, 0.5)
	pipe2Bottom.rotation.x = -Math.PI
	scene.add(pipe2Bottom)


	//Third Pipe

	const pipe3 = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe3.position.set(30.6, 3.1, 0.5)
	scene.add(pipe3)

	const pipe3Bottom = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 4.1, 32 ), 
		pipeSides,
		0
	)
	pipe3Bottom.position.set(30.6, .2, 0.5)
	pipe3Bottom.rotation.x = -Math.PI
	scene.add(pipe3Bottom)


	//Fourth Pipe

	const pipe4 = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe4.position.set(43.6, 3.1, 0.5)
	scene.add(pipe4)

	const pipe4Bottom = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 4.1, 32 ), 
		pipeSides,
		0
	)
	pipe4Bottom.position.set(43.6, .2, 0.5)
	pipe4Bottom.rotation.x = -Math.PI
	scene.add(pipe4Bottom)


	//////////////////////
	//Second Section Pipes
	//////////////////////

	// Fifth Pipe

	const pipe5 = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe5.position.set(168.85, 1, 0.5)
	scene.add(pipe5)

	// Sixth Pipe

	const pipe6 = new Physijs.BoxMesh(
		new THREE.CylinderGeometry(1, 1, 2, 32 ), 
		pipeSides,
		0
	)
	pipe6.position.set(187.75, 1, 0.5)
	scene.add(pipe6)

}