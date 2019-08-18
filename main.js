const keyboard 	= {}
const player 	= { height: 2.8 , speed: 0.2}
const Loader 	= new THREE.TextureLoader()
const scene 	= new THREE.Scene()
const camera 	= new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight , 0.1, 1000 )

scene.background = new THREE.Color(0x1D6BEF)

camera.position.set(180, player.height, 30)
camera.lookAt(new THREE.Vector3(180, player.height, 0))

const renderer = new THREE.WebGLRenderer()
renderer.setSize( window.innerWidth, window.innerHeight)
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.BasicShadowMap
document.body.appendChild( renderer.domElement )

ambientLight = new THREE.AmbientLight(0xffffff, 1)
scene.add(ambientLight)

// const light = new THREE.PointLight(0xffffff, 0.5, 18)
// light.position.set(-3, 6, -3)
// light.castShadow = true
// light.shadow.camera.near = 0.1
// light.shadow.camera.far = 25
// scene.add(light)

const questionLoader = new Loader.load("Textures/Question.png")

const question = new THREE.Mesh( 
	new THREE.BoxGeometry( 1, 1, 1 ), 
	new THREE.MeshPhongMaterial({
		map: questionLoader
	}) 
)
question.position.set(-5.5, 3.8, 0)
question.castShadow = true
question.receiveShadow = true
scene.add(question)

copyQuestion = question.clone()
copyQuestion.position.set(0.55, 3.8, 0)
scene.add(copyQuestion)

copyQuestion2 = question.clone()
copyQuestion2.position.set(2.65, 3.8, 0)
scene.add(copyQuestion2)

copyQuestion3 = question.clone()
copyQuestion3.position.set(1.6, 8.2, 0)
scene.add(copyQuestion3)

const brickLoader = new Loader.load("Textures/Brick_Block.png")

const brick = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshPhongMaterial({
		map: brickLoader,
	})
)
brick.position.set(-0.50, 3.8, 0)
brick.receiveShadow = true
brick.castShadow = true
scene.add(brick)

copyBrick = brick.clone()
copyBrick.position.set(1.6, 3.8, 0)
scene.add(copyBrick)

copyBrick2 = brick.clone()
copyBrick2.position.set(3.7, 3.8, 0)
scene.add(copyBrick2)

// const goombaLoader = new THREE.MTLLoader()

// goombaLoader.load("Models/Goomba/Goomba.mtl", (materials) => {
// 	materials.preload()
// 	let objLoader = new THREE.OBJLoader()
// 	objLoader.setMaterials(materials)

// 	objLoader.load("Models/Goomba/Goomba.obj", (mesh) => {

// 		mesh.traverse((node) => {
// 			if (node instanceof THREE.Mesh) {
// 				node.castShadow = true
// 			}
// 		})

// 		scene.add(mesh)
// 		mesh.scale.set(0.01, 0.01, 0.01)
// 		mesh.position.set(-2, 0, -4)
// 		mesh.rotation.y = -Math.PI
// 	})
// })

// const marioLoader = new THREE.ColladaLoader()

// marioLoader.load("Models/Marioo/mr_gold.dae", (materials) => {
// 	let dae = materials.scene
// 	scene.add(dae)

// 	// dae.scale.set(.18, .18, .18)
// 	// dae.rotation.x = 12.5
// })

const floorLoader = new Loader.load("Textures/floor.png")
floorLoader.wrapS = THREE.RepeatWrapping
floorLoader.wrapT = THREE.RepeatWrapping
floorLoader.repeat.set( 81.5, 2)

const meshFloor = new THREE.Mesh(
	new THREE.BoxGeometry(81.5, 1, 2),
	new THREE.MeshPhongMaterial({
		map: floorLoader
	})
)
meshFloor.position.set(15.75, -1, 0)
meshFloor.rotation.x -= Math.PI / 2
meshFloor.receiveShadow = true
scene.add(meshFloor)

const copyFloor = meshFloor.clone()
copyFloor.position.set(15.75, -1, 1)
scene.add(copyFloor)

const smallFloorLoader = new Loader.load("Textures/floor.png")
smallFloorLoader.wrapS = THREE.RepeatWrapping
smallFloorLoader.wrapT = THREE.RepeatWrapping
smallFloorLoader.repeat.set( 17.66, 2)

const smallFloor = new THREE.Mesh(
	new THREE.BoxGeometry(17.66, 1, 2),
	new THREE.MeshPhongMaterial({
		map: smallFloorLoader
	})
)
smallFloor.position.set(67.85, -1, 0)
smallFloor.rotation.x -= Math.PI / 2
smallFloor.receiveShadow = true
scene.add(smallFloor)

const copySmallFloor = smallFloor.clone()
copySmallFloor.position.set(67.85, -1, 1)
scene.add(copySmallFloor)


const floorSet2Loader = new Loader.load("Textures/floor.png")
floorSet2Loader.wrapS = THREE.RepeatWrapping
floorSet2Loader.wrapT = THREE.RepeatWrapping
floorSet2Loader.repeat.set( 75.6, 2)

const floorSet2 = new THREE.Mesh(
	new THREE.BoxGeometry(75.6, 1, 2),
	new THREE.MeshPhongMaterial({
		map: floorSet2Loader
	})
)
floorSet2.position.set(118.05, -1, 0)
floorSet2.rotation.x -= Math.PI / 2
floorSet2.receiveShadow = true
scene.add(floorSet2)

const cloneFloorSet2 = floorSet2.clone()
cloneFloorSet2.position.set(118.05, -1, 1)
scene.add(cloneFloorSet2)

const floorSet3Loader = new Loader.load("Textures/floor.png")
floorSet3Loader.wrapS = THREE.RepeatWrapping
floorSet3Loader.wrapT = THREE.RepeatWrapping
floorSet3Loader.repeat.set( 66.7, 2)

const floorSet3 = new THREE.Mesh(
	new THREE.BoxGeometry(66.7, 1, 2),
	new THREE.MeshPhongMaterial({
		map: floorSet3Loader
	})
)
floorSet3.position.set(191.6, -1, 0)
floorSet3.rotation.x -= Math.PI / 2
floorSet3.receiveShadow = true
scene.add(floorSet3)

const cloneFloorSet3 = floorSet3.clone()
cloneFloorSet3.position.set(191.6, -1, 1)
scene.add(cloneFloorSet3)







const backgroundLoader = new Loader.load("/Textures/mario-1-1.gif")

const background = new THREE.Mesh(
	new THREE.PlaneGeometry(250, 15, 15, 15),
	new THREE.MeshPhongMaterial({
		map: backgroundLoader
	})
)
background.material.side = THREE.DoubleSide;
background.position.set(100, 6, 0)
scene.add(background)

const animate = () => {
	requestAnimationFrame( animate )

	if (keyboard[87]) {
		camera.position.x -= Math.sin(camera.rotation.y) * player.speed
		camera.position.z -= Math.cos(camera.rotation.y) * player.speed
	}

	if (keyboard[83]) {
		camera.position.x += Math.sin(camera.rotation.y) * player.speed
		camera.position.z += Math.cos(camera.rotation.y) * player.speed
	}

	if (keyboard[65]) {
		camera.position.x += Math.sin(camera.rotation.y - Math.PI/2) * player.speed
		camera.position.z += Math.cos(camera.rotation.y - Math.PI/2) * player.speed
	}

	if (keyboard[68]) {
		camera.position.x += Math.sin(camera.rotation.y + Math.PI/2) * player.speed
		camera.position.z += Math.cos(camera.rotation.y + Math.PI/2) * player.speed
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


animate()
