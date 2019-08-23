//////////////////////
//Variables
//////////////////////

const keyboard 		= {}
const goombaSd 		= {first: 2, second: 2, third: 2, twelfth: 2, thirteenth: 2}
const mushroomSd 	= {speed: 10}
const marioR 		= {right: 0, left: 0}

let renderer, playerBox
let jump = true
let music = false
let win = false
let underground = false
let count = 8


//////////////////////
//Loaders
//////////////////////

const Loader 		= new THREE.TextureLoader()
const audioLoader 	= new THREE.AudioLoader()
const listener 		= new THREE.AudioListener()
const jlistener 	= new THREE.AudioListener()
const wlistener 	= new THREE.AudioListener()
const sound 		= new THREE.Audio(listener)
const jsound 		= new THREE.Audio(jlistener)
const wsound 		= new THREE.Audio(wlistener)
const scene 		= new Physijs.Scene({fixedTimeStep: 1 / 60})
const camera 		= new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight , 1, 1000)


//////////////////////
//Init Function
//////////////////////

const initScene = () => {
	renderer = new THREE.WebGLRenderer({antialias: true})
	renderer.setSize(window.innerWidth -4, window.innerHeight -4)
	document.body.appendChild(renderer.domElement)

	scene.background = new THREE.Color(0x5c94fc)
	scene.setGravity(new THREE.Vector3(0, -30, 0))

	camera.position.set(-9, 5, 12)
	camera.lookAt(new THREE.Vector3(-9, 5, 12))
	scene.add(camera)

	audioLoader.load('sounds/mario_theme.mp3', (buffer) => {
		sound.setBuffer(buffer)
		sound.setLoop(true)
		sound.setVolume(0.5)
	})

	audioLoader.load('sounds/jump.wav', (buffer) => {
		jsound.setBuffer(buffer)
		jsound.setLoop(false)
		jsound.setVolume(0.5)
	})

	audioLoader.load('sounds/win.wav', (buffer) => {
		wsound.setBuffer(buffer)
		wsound.setLoop(false)
		wsound.setVolume(0.5)
	})

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

	if (playerBox.parent === scene) {
		scene.remove(playerBox)
	}

	jump = true
	music = false
	win = false
	underground = false
	count = 8

	playerBox.position.set(-20, 0.5, 0.25)

	scene.add(playerBox)

	initFloor()
	initBlocks()
	initBricks()
	initSteps()
	initPipes()
	initUnderground()
	initEnemy()
	animate()
}

//////////////////////
//Refresh Function
//////////////////////

const animate = () => {
	scene.simulate()
	requestAnimationFrame(animate)

	// enemyMovement()

	let velocity = playerBox.getLinearVelocity()

	if (!underground) {
		if (playerBox.position.x > camera.position.x) {
			camera.position.x += .09
		}
	}

	if (playerBox.parent === scene) {
		playerBox.rotation.set(0, 0, 0)
		playerBox.position.z = 0.5
		playerBox.__dirtyRotation = true
		
	
		if (keyboard[65] && !keyboard[87]) {
			playerBox.setLinearVelocity({x: -5, y: velocity.y, z: velocity.z})
			if (marioR.left >= 0 && marioR.left <= 6) {
				playerBox.material = marioRunLeftSide
			} else if (marioR.left >= 7 && marioR.left <= 12) {
				playerBox.material = marioRun2LeftSide
			} else if (marioR.left >= 13 && marioR.left <= 18) {
				playerBox.material = marioRun3LeftSide
			}
			
			marioR.left += 1
			if (marioR.left > 18) {
				marioR.left = 0
			} 
		}
	
		if (keyboard[68] && !keyboard[87]) {
			playerBox.setLinearVelocity({x: 5, y: velocity.y, z: velocity.z})
			if (marioR.right >= 0 && marioR.right <= 6) {
				playerBox.material = marioRunRightSide
			} else if (marioR.right >= 7 && marioR.right <= 12) {
				playerBox.material = marioRun2RightSide
			} else if (marioR.right >= 13 && marioR.right <= 18) {
				playerBox.material = marioRun3RightSide
			}
			
			marioR.right += 1
			if (marioR.right > 18) {
				marioR.right = 0
			} 
		}
	
		if (keyboard[87] && !keyboard[68] && !keyboard[65]) {
			if (jump) {
				playerBox.setLinearVelocity({x: velocity.x, y: 15, z: velocity.z})
				jump = false
				jsound.play()
			}
		}
	
		if (keyboard[87] && keyboard[68]) {
			if (jump) {
				playerBox.setLinearVelocity({x: 5, y: 15, z: velocity.z})
				jump = false
				jsound.play()
			}
		}
	
		if (keyboard[87] && keyboard[65]) {
			if (jump) {
				playerBox.setLinearVelocity({x: -5, y: 15, z: velocity.z})
				jump = false
				jsound.play()
			}
		}
	}

	
	if (keyboard[69]) {
		camera.rotation.y -= Math.PI * 0.01
	}

	if (keyboard[81]) {
		camera.rotation.y += Math.PI * 0.01
	}

	// if (keyboard[40]) {
	// 	camera.position.y -= 0.1
	// }

	// if (keyboard[38]) {
	// 	camera.position.y += 0.1
	// }

	// if (keyboard[37]) {
	// 	camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * .8
	// 	camera.position.z += Math.cos(camera.rotation.y - Math.PI/2) * .8
	// }

	// if (keyboard[39]) {
	// 	camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * .8
	// 	camera.position.z += Math.cos(camera.rotation.y + Math.PI/2) * .8
	// }	
	
	renderer.render( scene, camera )
}

//////////////////////
//Restart Function
//////////////////////

const reset = () => {
	while(scene.children.length > 0){ 
		scene.remove(scene.children[0])
	}
	document.body.removeChild(renderer.domElement)
	initScene()
}


//////////////////////
//Keypress Function
//////////////////////

const keyDown = (event) => {
	keyboard[event.keyCode] = true

	if (keyboard[80] && music === false) {
		sound.play()
		music = true
	} else if (keyboard[80] && music) {
		sound.pause()
		music = false
	}
}

const keyUp = (event) => {
	keyboard[event.keyCode] = false
	if (event.keyCode === 65) {
		playerBox.material = marioLeftSide
	}

	if (event.keyCode === 68) {
		playerBox.material = marioSide
	}
}

window.addEventListener('keydown', keyDown)
window.addEventListener('keyup', keyUp)


//////////////////////
//Start Scene
//////////////////////

window.onload = initScene