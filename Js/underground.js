//////////////////////
//Loaders
//////////////////////

const undergroundFloorLoader = new Loader.load("Textures/underground_floor.png")
undergroundFloorLoader.wrapS = THREE.RepeatWrapping
undergroundFloorLoader.wrapT = THREE.RepeatWrapping
undergroundFloorLoader.repeat.set(50, 4)

const undergroundFloorSideLoader = new Loader.load("Textures/underground_floor.png")
floorSideLoader.wrapS = THREE.RepeatWrapping
floorSideLoader.wrapT = THREE.RepeatWrapping
floorSideLoader.repeat.set(4, 4)

const undergroundWallLoader = new Loader.load("Textures/underground_Brick.png")
undergroundWallLoader.wrapS = THREE.RepeatWrapping
undergroundWallLoader.wrapT = THREE.RepeatWrapping
undergroundWallLoader.repeat.set(4, 50)

const undergroundWallSideLoader = new Loader.load("Textures/underground_Brick.png")
undergroundWallSideLoader.wrapS = THREE.RepeatWrapping
undergroundWallSideLoader.wrapT = THREE.RepeatWrapping
undergroundWallSideLoader.repeat.set(4, 4)

const undergroundBlockLoader = new Loader.load("Textures/underground_Brick.png")
undergroundBlockLoader.wrapS = THREE.RepeatWrapping
undergroundBlockLoader.wrapT = THREE.RepeatWrapping
undergroundBlockLoader.repeat.set(10, 5)

const undergroundBlockTopLoader = new Loader.load("Textures/underground_Brick.png")
undergroundBlockTopLoader.wrapS = THREE.RepeatWrapping
undergroundBlockTopLoader.wrapT = THREE.RepeatWrapping
undergroundBlockTopLoader.repeat.set(10, 4)

const undergroundBlockSideLoader = new Loader.load("Textures/underground_Brick.png")
undergroundBlockSideLoader.wrapS = THREE.RepeatWrapping
undergroundBlockSideLoader.wrapT = THREE.RepeatWrapping
undergroundBlockSideLoader.repeat.set(4, 5)

const undergroundPipeLoader = new Loader.load("Textures/pipe.png")
const undergroundTopLoader = new Loader.load("Textures/pipe_top.png")


//////////////////////
//Sides
//////////////////////

const undergroundFloorSide = [
	new THREE.MeshPhongMaterial({map: undergroundFloorSideLoader}),
	new THREE.MeshPhongMaterial({map: undergroundFloorSideLoader}),
	new THREE.MeshPhongMaterial({map: undergroundFloorLoader}),
	new THREE.MeshPhongMaterial({map: undergroundFloorLoader}),
	new THREE.MeshPhongMaterial({map: undergroundFloorLoader}),
	new THREE.MeshPhongMaterial({map: undergroundFloorLoader})
]

const undergroundWallSide = [
	new THREE.MeshPhongMaterial({map: undergroundWallLoader}),
	new THREE.MeshPhongMaterial({map: undergroundWallLoader}),
	new THREE.MeshPhongMaterial({map: undergroundWallSideLoader}),
	new THREE.MeshPhongMaterial({map: undergroundWallSideLoader}),
	new THREE.MeshPhongMaterial({map: undergroundWallLoader}),
	new THREE.MeshPhongMaterial({map: undergroundWallLoader})
]

const undergroundBlockSide = [
	new THREE.MeshPhongMaterial({map: undergroundBlockSideLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockSideLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockTopLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockTopLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockLoader})
]

const undergroundPipeSides = [
	new THREE.MeshPhongMaterial({map: undergroundPipeLoader}),
	new THREE.MeshPhongMaterial({map: undergroundTopLoader}),
	new THREE.MeshPhongMaterial({color: 0x0fdc0a})
]

//////////////////////
//Init Function
//////////////////////

const initUnderground = () => {

	const undergroundBackground = new Physijs.BoxMesh(new THREE.PlaneGeometry(125, 75, 15, 15), new THREE.MeshPhongMaterial({color: 0x000000}), 0)
	undergroundBackground.material.side = THREE.DoubleSide
	undergroundBackground.position.set(100, -150, -0.6)
	scene.add(undergroundBackground)

	const undergroundFloor = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 2, 2), undergroundFloorSide, 0)
	undergroundFloor.position.set(100, -175, .5)
	scene.add(undergroundFloor)
	undergroundFloor.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	const undergroundWall = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 50, 2), undergroundWallSide, 0)
	undergroundWall.position.set(76, -149, .5)
	scene.add(undergroundWall)

	const undergroundBlock = new Physijs.BoxMesh(new THREE.BoxGeometry(10, 5, 2), undergroundBlockSide, 0)
	undergroundBlock.position.set(90, -171.5, .5)
	scene.add(undergroundBlock)
	undergroundBlock.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	const undergroundPipe = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), undergroundPipeSides, 0)
	undergroundPipe.position.set(102, -172.9, .5)
	undergroundPipe.rotation.z =  Math.PI/2
	scene.add(undergroundPipe)
	undergroundPipe.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})
	const undergroundPipeLong = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 50, 32 ), undergroundPipeSides, 0)
	undergroundPipeLong.position.set(104, -150, .5)
	scene.add(undergroundPipeLong)

}