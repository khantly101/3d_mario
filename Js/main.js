const keyboard 	= {}
const player 	= { height: 2.8 , speed: .2}
const Loader 	= new THREE.TextureLoader()
const scene 	= new Physijs.Scene({fixedTimeStep: 1 / 120})
const camera 	= new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight , 1, 1000 )

let renderer, previous

const initScene = () => {
	renderer = new THREE.WebGLRenderer({ antialias: true })
	renderer.setSize( window.innerWidth -4, window.innerHeight -4)
	document.body.appendChild( renderer.domElement )

	scene.background = new THREE.Color(0x5c94fc)
	scene.setGravity(new THREE.Vector3( 0, -30, 0 ))

	camera.position.set(0, player.height, 20)
	camera.lookAt(new THREE.Vector3(0, player.height, 0))
	scene.add(camera)

	ambientLight = new THREE.AmbientLight(0xffffff, 1)
	scene.add(ambientLight)

	const backgroundLoader = new Loader.load("Textures/background.png")

	const background = new Physijs.PlaneMesh(
		new THREE.PlaneGeometry(250, 15, 15, 15),
		new THREE.MeshPhongMaterial({
			map: backgroundLoader
		}),
		0
	)
	background.material.side = THREE.DoubleSide;
	background.position.set(100, 5.8, -0.6)
	scene.add(background)

	initFloor()
	initBlocks()
	initSteps()
	initPipes()
	animate()
}

	playerMaterial = Physijs.createMaterial(
		new THREE.MeshPhongMaterial( { color: 0x00ff00 } )
	)

	const playerBox = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		playerMaterial,
		1
	)
	playerBox.position.set(20, 4, 0)
	// playerBox.setCcdMotionThreshold(1);

	playerBox.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
    	// player.speed = -.1
	})

	scene.add(playerBox)

const animate = () => {
	scene.simulate()
	requestAnimationFrame( animate )

	
	if (keyboard[65]) {
		// camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
		// camera.position.z += Math.cos(camera.rotation.y - Math.PI/2) * player.speed
		previous = playerBox.position
		playerBox.__dirtyPosition = true
		playerBox.__dirtyRotation = true
		playerBox.position.x -= player.speed

	}

	if (keyboard[68]) {
		// camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
		// camera.position.z += Math.cos(camera.rotation.y + Math.PI/2) * player.speed
		player.speed = 0.2
		playerBox.__dirtyPosition = true
		playerBox.__dirtyRotation = true
		playerBox.position.x += player.speed
	}

	if (keyboard[87]) {
		playerBox.__dirtyPosition = true
		playerBox.__dirtyRotation = true
		playerBox.position.y += player.speed
	}

	if (keyboard[69]) {
		camera.rotation.y -= Math.PI * 0.01
	}

	if (keyboard[81]) {
		camera.rotation.y += Math.PI * 0.01
	}

	if (keyboard[40]) {
		camera.position.y -= 0.1
	}

	if (keyboard[38]) {
		camera.position.y += 0.1
	}
	renderer.clear()
	renderer.render( scene, camera )
}

const keyDown = (event) => {
	keyboard[event.keyCode] = true
}

const keyUp = (event) => {
	keyboard[event.keyCode] = false
}

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp)

window.onload = initScene