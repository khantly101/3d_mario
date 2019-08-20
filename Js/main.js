const keyboard 	= {}
const player 	= { height: 2.8 , speed: .2}
const Loader 	= new THREE.TextureLoader()
const scene 	= new Physijs.Scene({fixedTimeStep: 1 / 60})
const camera 	= new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight , 1, 1000 )

let renderer, previous
let jump = true

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

	const background = new Physijs.PlaneMesh(new THREE.PlaneGeometry(250, 15, 15, 15), new THREE.MeshPhongMaterial({map: backgroundLoader}), 0)
	background.material.side = THREE.DoubleSide
	background.position.set(100, 5.8, -0.6)
	scene.add(background)

	const foreground = new Physijs.BoxMesh(new THREE.PlaneGeometry(250, 15, 15, 15), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	foreground.material.side = THREE.DoubleSide
	foreground.position.set(100, 5.8, 1.6)
	scene.add(foreground)

	initFloor()
	initBlocks()
	initBricks()
	initSteps()
	initPipes()
	animate()
}



	const playerMaterial = Physijs.createMaterial(new THREE.MeshPhongMaterial({color: 0x00ff00}))
	const playerBox = new Physijs.BoxMesh(new THREE.BoxGeometry(1,1,1), playerMaterial, 1)
	playerBox.position.set(0, 0.5, 0)
	scene.add(playerBox)






const animate = () => {
	scene.simulate()
	requestAnimationFrame( animate )

	playerBox.rotation.set(0, 0, 0);
    playerBox.__dirtyRotation = true

	if (keyboard[65] && !keyboard[87]) {
		velocity = playerBox.getLinearVelocity()
		playerBox.setLinearVelocity({x: -5, y: velocity.y, z: velocity.z})
	}

	if (keyboard[68] && !keyboard[87]) {
		velocity = playerBox.getLinearVelocity()
		playerBox.setLinearVelocity({x: 5, y: velocity.y, z: velocity.z})
	}

	if (keyboard[87] && !keyboard[68] && !keyboard[65]) {
		if (jump) {
			velocity = playerBox.getLinearVelocity()
			playerBox.setLinearVelocity({x: velocity.x, y: 15, z: velocity.z})
			jump = false
		}
	}

	if (keyboard[87] && keyboard[68]) {
		if (jump) {
			velocity = playerBox.getLinearVelocity()
			playerBox.setLinearVelocity({x: 5, y: 15, z: velocity.z})
			jump = false
		}
	}

	if (keyboard[87] && keyboard[65]) {
		if (jump) {
			velocity = playerBox.getLinearVelocity()
			playerBox.setLinearVelocity({x: -5, y: 15, z: velocity.z})
			jump = false
		}
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

	if (keyboard[37]) {
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
		camera.position.z += Math.cos(camera.rotation.y - Math.PI/2) * player.speed
	}

	if (keyboard[39]) {
		camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
		camera.position.z += Math.cos(camera.rotation.y + Math.PI/2) * player.speed
	}	
	
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