	const marioLoader 				= new Loader.load("Textures/mario.png")
	const marioLeftLoader 			= new Loader.load("Textures/marioLeft.png")
	const marioRunRightLoader 		= new Loader.load("Textures/marioRun.png")
	const marioRun2RightLoader 		= new Loader.load("Textures/marioRun2.png")
	const marioRun3RightLoader 		= new Loader.load("Textures/marioRun3.png")
	const marioRunLeftLoader 		= new Loader.load("Textures/marioRunLeft.png")
	const marioRun2LeftLoader 		= new Loader.load("Textures/marioRun2Left.png")
	const marioRun3LeftLoader 		= new Loader.load("Textures/marioRun3Left.png")
	const transparentMarioLoader 	= new Loader.load("Textures/transparent.png")

	const marioSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioLeftSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioLeftLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioLeftLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioRunLeftSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRunLeftLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRunLeftLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioRun2LeftSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun2LeftLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun2LeftLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioRun3LeftSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun3LeftLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun3LeftLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioRunRightSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRunRightLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRunRightLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioRun2RightSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun2RightLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun2RightLoader, transparent: true, depthWrite: false, depthTest: false}),
	]

	const marioRun3RightSide = [
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: transparentMarioLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun3RightLoader, transparent: true, depthWrite: false, depthTest: false}),
		new THREE.MeshPhongMaterial({map: marioRun3RightLoader, transparent: true, depthWrite: false, depthTest: false}),
	]



	playerBox = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), marioSide, 1)
	playerBox.position.set(0, 0.5, 0.25)
	playerBox.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		enemyCollision(other_object)
	})