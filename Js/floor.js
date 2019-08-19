////////////////
//Loaders
////////////////

const floorLoader = new Loader.load("Textures/floor.png")
const smallFloorLoader = new Loader.load("Textures/floor.png")
const floorSet2Loader = new Loader.load("Textures/floor.png")
const floorSet3Loader = new Loader.load("Textures/floor.png")


////////////////
//First Section
////////////////

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


////////////////
//Second Section
////////////////

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


////////////////
//Third Section
////////////////

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


////////////////
//Fourth Section
////////////////

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

