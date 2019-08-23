////////////////
//Loaders
////////////////

const floorLoader = new Loader.load("Textures/floor.png")
floorLoader.wrapS = THREE.RepeatWrapping
floorLoader.wrapT = THREE.RepeatWrapping
floorLoader.repeat.set(81.5, 4)

const smallFloorLoader = new Loader.load("Textures/floor.png")
smallFloorLoader.wrapS = THREE.RepeatWrapping
smallFloorLoader.wrapT = THREE.RepeatWrapping
smallFloorLoader.repeat.set(17.66, 4)

const floorSet2Loader = new Loader.load("Textures/floor.png")
floorSet2Loader.wrapS = THREE.RepeatWrapping
floorSet2Loader.wrapT = THREE.RepeatWrapping
floorSet2Loader.repeat.set(75.6, 4)

const floorSet3Loader = new Loader.load("Textures/floor.png")
floorSet3Loader.wrapS = THREE.RepeatWrapping
floorSet3Loader.wrapT = THREE.RepeatWrapping
floorSet3Loader.repeat.set(66.7, 4)

const floorSideLoader = new Loader.load("Textures/floor.png")
floorSideLoader.wrapS = THREE.RepeatWrapping
floorSideLoader.wrapT = THREE.RepeatWrapping
floorSideLoader.repeat.set(4, 4)


////////////////
//Sides
////////////////

const floorSide = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorLoader}),
	new THREE.MeshPhongMaterial({map: floorLoader}),
	new THREE.MeshPhongMaterial({map: floorLoader}),
	new THREE.MeshPhongMaterial({map: floorLoader})
]

const smallFloorSide = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorLoader}),
	new THREE.MeshPhongMaterial({map: smallFloorLoader})
]

const floorSet2Side = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSet2Loader}),
	new THREE.MeshPhongMaterial({map: floorSet2Loader}),
	new THREE.MeshPhongMaterial({map: floorSet2Loader}),
	new THREE.MeshPhongMaterial({map: floorSet2Loader})
]

const floorSet3Side = [
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSideLoader}),
	new THREE.MeshPhongMaterial({map: floorSet3Loader}),
	new THREE.MeshPhongMaterial({map: floorSet3Loader}),
	new THREE.MeshPhongMaterial({map: floorSet3Loader}),
	new THREE.MeshPhongMaterial({map: floorSet3Loader})
]


////////////////
//Init Function
////////////////

const initFloor = () => {

	////////////////
	//First Section
	////////////////

	const meshFloor = new Physijs.BoxMesh(new THREE.BoxGeometry(81.5, 2, 2), floorSide, 0)
	meshFloor.position.set(15.75, -1, .5)
	scene.add(meshFloor)
	meshFloor.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
		if (other_object.geometry.id !== playerBox.geometry.id) {
			other_object.setLinearVelocity({x: mushroomSd.speed, y: 0, z: 0})
		}
	})


	////////////////
	//Second Section
	////////////////

	const smallFloor = new Physijs.BoxMesh(new THREE.BoxGeometry(17.66, 2, 2), smallFloorSide, 0)
	smallFloor.position.set(67.85, -1, .5)
	scene.add(smallFloor)
	smallFloor.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})



	////////////////
	//Third Section
	////////////////

	const floorSet2 = new Physijs.BoxMesh(new THREE.BoxGeometry(75.6, 2, 2), floorSet2Side, 0)
	floorSet2.position.set(118.05, -1, .5)
	scene.add(floorSet2)
	floorSet2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	////////////////
	//Fourth Section
	////////////////

	const floorSet3 = new Physijs.BoxMesh(new THREE.BoxGeometry(66.7, 2, 2), floorSet3Side, 0)
	floorSet3.position.set(191.6, -1, .5)
	scene.add(floorSet3)
	floorSet3.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		jump = true
	})

	////////////////
	//Under Floor
	////////////////

	const underFloor = new Physijs.BoxMesh(new THREE.PlaneGeometry(500, 500, 2), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	underFloor.position.set(0, -5, .5)
	underFloor.rotation.x = -Math.PI/2
	scene.add(underFloor)
	underFloor.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(other_object)
		if (other_object.geometry.id === playerBox.geometry.id) {
			sound.pause()
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	})


	////////////////
	//Win Panel
	////////////////

	const victory = new Physijs.BoxMesh(new THREE.PlaneGeometry(500, 500, 10), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	victory.position.set(209.6, .5, .5)
	victory.rotation.y = -Math.PI/2
	scene.add(victory)
	victory.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (!win) {
			sound.pause()
			wsound.play()
			win = true
			setTimeout(()=>{reset()}, 5500)
		} 
	})
}