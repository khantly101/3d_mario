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


//////////////////////
//Init Function
//////////////////////

const initUnderground = () => {

	const undergroundBackground = new Physijs.BoxMesh(new THREE.PlaneGeometry(75, 75, 15, 15), new THREE.MeshPhongMaterial({color: 0x000000}), 0)
	undergroundBackground.material.side = THREE.DoubleSide
	undergroundBackground.position.set(100, -150, 0)
	scene.add(undergroundBackground)

	const undergroundFloor = new Physijs.BoxMesh(new THREE.BoxGeometry(50, 2, 2), undergroundFloorSide, 0)
	undergroundFloor.position.set(100, -175, .5)
	scene.add(undergroundFloor)
	undergroundFloor.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

}