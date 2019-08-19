////////////////
//Loaders
////////////////

const floorLoader = new Loader.load("Textures/floor.png")
floorLoader.wrapS = THREE.RepeatWrapping
floorLoader.wrapT = THREE.RepeatWrapping
floorLoader.repeat.set(81.5, 4)

const floorTopLoader = new Loader.load("Textures/floor.png")
floorTopLoader.wrapS = THREE.RepeatWrapping
floorTopLoader.wrapT = THREE.RepeatWrapping
floorTopLoader.repeat.set(81.5, 2)

const smallFloorLoader = new Loader.load("Textures/floor.png")
smallFloorLoader.wrapS = THREE.RepeatWrapping
smallFloorLoader.wrapT = THREE.RepeatWrapping
smallFloorLoader.repeat.set(17.66, 4)

const smallFloorTopLoader = new Loader.load("Textures/floor.png")
smallFloorTopLoader.wrapS = THREE.RepeatWrapping
smallFloorTopLoader.wrapT = THREE.RepeatWrapping
smallFloorTopLoader.repeat.set(17.66, 2)

const floorSet2Loader = new Loader.load("Textures/floor.png")
floorSet2Loader.wrapS = THREE.RepeatWrapping
floorSet2Loader.wrapT = THREE.RepeatWrapping
floorSet2Loader.repeat.set(75.6, 4)

const floorSet2TopLoader = new Loader.load("Textures/floor.png")
floorSet2TopLoader.wrapS = THREE.RepeatWrapping
floorSet2TopLoader.wrapT = THREE.RepeatWrapping
floorSet2TopLoader.repeat.set(75.6, 2)

const floorSet3Loader = new Loader.load("Textures/floor.png")
floorSet3Loader.wrapS = THREE.RepeatWrapping
floorSet3Loader.wrapT = THREE.RepeatWrapping
floorSet3Loader.repeat.set(66.7, 4)

const floorSet3TopLoader = new Loader.load("Textures/floor.png")
floorSet3TopLoader.wrapS = THREE.RepeatWrapping
floorSet3TopLoader.wrapT = THREE.RepeatWrapping
floorSet3TopLoader.repeat.set(66.7, 2)

const floorSideLoader = new Loader.load("Textures/floor.png")
floorSideLoader.wrapS = THREE.RepeatWrapping
floorSideLoader.wrapT = THREE.RepeatWrapping
floorSideLoader.repeat.set(4, 2)


////////////////
//Sides
////////////////

const floorSide = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorLoader}),
	new THREE.MeshPhongMaterial({map: floorLoader}),
	new THREE.MeshPhongMaterial({map: floorTopLoader}),
	new THREE.MeshPhongMaterial({map: floorTopLoader})
]

const smallFloorSide = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorTopLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorTopLoader})
]

const floorSet2Side = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSet2Loader}),
	new THREE.MeshPhongMaterial({map: floorSet2Loader}),
	new THREE.MeshPhongMaterial({map: floorSet2TopLoader}),
	new THREE.MeshPhongMaterial({map: floorSet2TopLoader})
]

const floorSet3Side = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSet3Loader}),
	new THREE.MeshPhongMaterial({map: floorSet3Loader}),
	new THREE.MeshPhongMaterial({map: floorSet3TopLoader}),
	new THREE.MeshPhongMaterial({map: floorSet3TopLoader})
]


////////////////
//First Section
////////////////

const meshFloor = new Physijs.BoxMesh(
	new THREE.BoxGeometry(81.5, 1, 2),
	floorSide
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

const smallFloor = new Physijs.BoxMesh(
	new THREE.BoxGeometry(17.66, 1, 2),
	smallFloorSide
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

const floorSet2 = new Physijs.BoxMesh(
	new THREE.BoxGeometry(75.6, 1, 2),
	floorSet2Side
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

const floorSet3 = new Physijs.BoxMesh(
	new THREE.BoxGeometry(66.7, 1, 2),
	floorSet3Side
)
floorSet3.position.set(191.6, -1, 0)
floorSet3.rotation.x -= Math.PI / 2
floorSet3.receiveShadow = true
scene.add(floorSet3)

const cloneFloorSet3 = floorSet3.clone()
cloneFloorSet3.position.set(191.6, -1, 1)
scene.add(cloneFloorSet3)

