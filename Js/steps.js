//////////////////////
//Loaders
//////////////////////

const stepLoader = new Loader.load("Textures/step.png")

//////////////////////
//First Steps
//////////////////////

stepLoader.wrapS = THREE.RepeatWrapping
stepLoader.wrapT = THREE.RepeatWrapping
stepLoader.repeat.set( 4, 1)

const step = new THREE.Mesh( 
	new THREE.BoxGeometry( 4.7, 1, 2 ), 
	new THREE.MeshPhongMaterial({
		map: stepLoader
	}) 
)
step.position.set(135.7, .5, .5)
step.castShadow = true
step.receiveShadow = true
scene.add(step)