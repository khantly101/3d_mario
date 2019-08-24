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
undergroundBlockLoader.repeat.set(10, 4)

const undergroundBlockSideLoader = new Loader.load("Textures/underground_Brick.png")
undergroundBlockSideLoader.wrapS = THREE.RepeatWrapping
undergroundBlockSideLoader.wrapT = THREE.RepeatWrapping
undergroundBlockSideLoader.repeat.set(4, 5)

const undergroundPipeLoader = new Loader.load("Textures/pipe.png")
const undergroundTopLoader = new Loader.load("Textures/pipe_top.png")

const undergroundCoinLoader = new Loader.load("Textures/coin.png")
const undergroundtCoinLoader = new Loader.load("Textures/transparent.png")


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
	new THREE.MeshPhongMaterial({map: undergroundBlockLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockLoader}),
	new THREE.MeshPhongMaterial({map: undergroundBlockLoader})
]

const undergroundPipeSides = [
	new THREE.MeshPhongMaterial({map: undergroundPipeLoader}),
	new THREE.MeshPhongMaterial({map: undergroundTopLoader}),
	new THREE.MeshPhongMaterial({color: 0x0fdc0a})
]

const undergroundCoinSides = [
	new THREE.MeshPhongMaterial({map: undergroundtCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: undergroundtCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: undergroundtCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: undergroundtCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: undergroundCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: undergroundCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
]

//////////////////////
//Init Function
//////////////////////

const initUnderground = () => {

	//////////////////////
	//Background
	//////////////////////

	const undergroundBackground = new Physijs.BoxMesh(new THREE.PlaneGeometry(125, 75, 15, 15), new THREE.MeshPhongMaterial({color: 0x000000}), 0)
	undergroundBackground.material.side = THREE.DoubleSide
	undergroundBackground.position.set(100, -150, -0.6)
	scene.add(undergroundBackground)


	//////////////////////
	//Walls and floors
	//////////////////////

	const undergroundFloor = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 2, 2), undergroundFloorSide, 0)
	undergroundFloor.position.set(100, -175, .5)
	scene.add(undergroundFloor)
	undergroundFloor.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const undergroundWall = new Physijs.BoxMesh(new THREE.BoxGeometry(2, 50, 2), undergroundWallSide, 0)
	undergroundWall.position.set(76, -149, .5)
	scene.add(undergroundWall)

	const undergroundBlock = new Physijs.BoxMesh(new THREE.BoxGeometry(10, 4, 2), undergroundBlockSide, 0)
	undergroundBlock.position.set(90, -172, .5)
	scene.add(undergroundBlock)
	undergroundBlock.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})


	//////////////////////
	//Pipes
	//////////////////////

	const undergroundPipe = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 2, 32 ), undergroundPipeSides, 0)
	undergroundPipe.position.set(102, -172.9, .5)
	undergroundPipe.rotation.z =  Math.PI/2
	scene.add(undergroundPipe)
	undergroundPipe.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const undergroundPipeTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	undergroundPipeTop.position.set(100.9, -172.9, .5)
	undergroundPipeTop.rotation.y = -Math.PI/2
	scene.add(undergroundPipeTop)

	undergroundPipeTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		playerBox.position.set(168.85, 3, 0.25)
		playerBox.__dirtyPosition = true
		camera.position.set(168.85, 5, 12)
		camera.rotation.y = 0
		pipesound.play()
		underground = false
	})

	const undergroundPipeLong = new Physijs.BoxMesh(new THREE.CylinderGeometry(1, 1, 50, 32 ), undergroundPipeSides, 0)
	undergroundPipeLong.position.set(104, -150, .5)
	scene.add(undergroundPipeLong)


	//////////////////////
	//Coins
	//////////////////////

	const undergroundCoin = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin.position.set(87, -168, 0)
	scene.add(undergroundCoin)
	undergroundCoin.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin)
		csound.play()
	})

	const undergroundCoin2 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin2.position.set(89, -168, 0)
	scene.add(undergroundCoin2)
	undergroundCoin2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin2)
		csound.play()
	})

	const undergroundCoin3 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin3.position.set(91, -168, 0)
	scene.add(undergroundCoin3)
	undergroundCoin3.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin3)
		csound.play()
	})

	const undergroundCoin4 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin4.position.set(93, -168, 0)
	scene.add(undergroundCoin4)
	undergroundCoin4.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin4)
		csound.play()
	})

	const undergroundCoin5 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin5.position.set(87, -166, 0)
	scene.add(undergroundCoin5)
	undergroundCoin5.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin5)
		csound.play()
	})

	const undergroundCoin6 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin6.position.set(89, -166, 0)
	scene.add(undergroundCoin6)
	undergroundCoin6.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin6)
		csound.play()
	})

	const undergroundCoin7 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin7.position.set(91, -166, 0)
	scene.add(undergroundCoin7)
	undergroundCoin7.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin7)
		csound.play()
	})

	const undergroundCoin8 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin8.position.set(93, -166, 0)
	scene.add(undergroundCoin8)
	undergroundCoin8.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin8)
		csound.play()
	})

	const undergroundCoin9 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin9.position.set(89, -164, 0)
	scene.add(undergroundCoin9)
	undergroundCoin9.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin9)
		csound.play()
	})

	const undergroundCoin10 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 0)
	undergroundCoin10.position.set(91, -164, 0)
	scene.add(undergroundCoin10)
	undergroundCoin10.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(undergroundCoin10)
		csound.play()
	})
}