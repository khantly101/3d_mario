const keyboard 	= {}
const player 	= { height: 2.8 , speed: 0.2}
const Loader 	= new THREE.TextureLoader()
const scene 	= new Physijs.Scene()
const camera 	= new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight , 0.1, 1000 )

scene.background = new THREE.Color(0x5c94fc)

camera.position.set(200, player.height, 10)
camera.lookAt(new THREE.Vector3(200, player.height, 0))

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize( window.innerWidth -4, window.innerHeight -4)
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

// const marioLoader = new THREE.ColladaLoader()

// marioLoader.load("Models/Marioo/mr_gold.dae", (materials) => {
// 	let dae = materials.scene
// 	scene.add(dae)

// 	// dae.scale.set(.18, .18, .18)
// 	// dae.rotation.x = 12.5
// })



const backgroundLoader = new Loader.load("Textures/background.png")

const background = new Physijs.BoxMesh(
	new THREE.PlaneGeometry(250, 15, 15, 15),
	new THREE.MeshPhongMaterial({
		map: backgroundLoader
	})
)
background.material.side = THREE.DoubleSide;
background.position.set(100, 6, -0.5)
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
