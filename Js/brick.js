//////////////////////
//Loaders
//////////////////////

const brickLoader = new Loader.load("Textures/Brick_Block.png")

//////////////////////
//Sound
//////////////////////

const blistener 	= new THREE.AudioListener()
const bsound 		= new THREE.Audio(blistener)

audioLoader.load('sounds/brick.wav', (buffer) => {
	bsound.setBuffer(buffer)
	bsound.setLoop(false)
	bsound.setVolume(0.5)
})


//////////////////////
//Init Function
//////////////////////

const initBricks = () => {

	//////////////////////
	//First Section Blocks
	//////////////////////
	
	///////////////////

	const brick = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	brick.position.set(-0.50, 3.8, .5)
	scene.add(brick)
	
	const brickTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	brickTop.position.set(-0.50, 4.35, .5)
	brickTop.rotation.x = -Math.PI/2
	scene.add(brickTop)

	brickTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const brickBottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	brickBottom.position.set(-0.50, 3.25, .5)
	brickBottom.rotation.x = -Math.PI/2
	scene.add(brickBottom)

	brickBottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(brick)
		scene.remove(brickTop)
		scene.remove(brickBottom)
		bsound.play()
	})

	///////////////////

	const copyBrick = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick.position.set(1.6, 3.8, .5)
	scene.add(copyBrick)

	const copyBrickTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrickTop.position.set(1.6, 4.35, .5)
	copyBrickTop.rotation.x = -Math.PI/2
	scene.add(copyBrickTop)

	copyBrickTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrickBottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrickBottom.position.set(1.6, 3.25, .5)
	copyBrickBottom.rotation.x = -Math.PI/2
	scene.add(copyBrickBottom)

	copyBrickBottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick)
		scene.remove(copyBrickTop)
		scene.remove(copyBrickBottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick2 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick2.position.set(3.7, 3.8, .5)
	scene.add(copyBrick2)

	const copyBrick2Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick2Top.position.set(3.7, 4.35, .5)
	copyBrick2Top.rotation.x = -Math.PI/2
	scene.add(copyBrick2Top)

	copyBrick2Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick2Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick2Bottom.position.set(3.7, 3.25, .5)
	copyBrick2Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick2Bottom)

	copyBrick2Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick2)
		scene.remove(copyBrick2Top)
		scene.remove(copyBrick2Bottom)
		bsound.play()
	})
	

	//////////////////////
	//Second Section Blocks
	//////////////////////

	//Lower Blocks

	///////////////////
	
	const copyBrick3 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick3.position.set(66.7, 3.8, .5)
	scene.add(copyBrick3)

	const copyBrick3Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick3Top.position.set(66.7, 4.35, .5)
	copyBrick3Top.rotation.x = -Math.PI/2
	scene.add(copyBrick3Top)

	copyBrick3Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick3Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick3Bottom.position.set(66.7, 3.25, .5)
	copyBrick3Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick3Bottom)

	copyBrick3Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick3)
		scene.remove(copyBrick3Top)
		scene.remove(copyBrick3Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick4 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick4.position.set(68.8, 3.8, .5)
	scene.add(copyBrick4)

	const copyBrick4Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick4Top.position.set(68.8, 4.35, .5)
	copyBrick4Top.rotation.x = -Math.PI/2
	scene.add(copyBrick4Top)

	copyBrick4Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick4Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick4Bottom.position.set(68.8, 3.25, .5)
	copyBrick4Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick4Bottom)

	copyBrick4Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick4)
		scene.remove(copyBrick4Top)
		scene.remove(copyBrick4Bottom)
		bsound.play()
	})

	///////////////////

	//Upper Blocks

	///////////////////
	
	const copyBrick5 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick5.position.set(70.15, 8.2, .5)
	scene.add(copyBrick5)

	const copyBrick5Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick5Top.position.set(70.15, 8.75, .5)
	copyBrick5Top.rotation.x = -Math.PI/2
	scene.add(copyBrick5Top)

	copyBrick5Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick5Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick5Bottom.position.set(70.15, 7.65, .5)
	copyBrick5Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick5Bottom)

	copyBrick5Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick5)
		scene.remove(copyBrick5Top)
		scene.remove(copyBrick5Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick6 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick6.position.set(71.2, 8.2, .5)
	scene.add(copyBrick6)

	const copyBrick6Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick6Top.position.set(71.2, 8.755, .5)
	copyBrick6Top.rotation.x = -Math.PI/2
	scene.add(copyBrick6Top)

	copyBrick6Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick6Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick6Bottom.position.set(71.2, 7.65, .5)
	copyBrick6Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick6Bottom)

	copyBrick6Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick6)
		scene.remove(copyBrick6Top)
		scene.remove(copyBrick6Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick7 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick7.position.set(72.25, 8.2, .5)
	scene.add(copyBrick7)

	const copyBrick7Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick7Top.position.set(72.25, 8.75, .5)
	copyBrick7Top.rotation.x = -Math.PI/2
	scene.add(copyBrick7Top)

	copyBrick7Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick7Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick7Bottom.position.set(72.25, 7.65, .5)
	copyBrick7Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick7Bottom)

	copyBrick7Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick7)
		scene.remove(copyBrick7Top)
		scene.remove(copyBrick7Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick8 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick8.position.set(73.3, 8.2, .5)
	scene.add(copyBrick8)

	const copyBrick8Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick8Top.position.set(73.3, 8.75, .5)
	copyBrick8Top.rotation.x = -Math.PI/2
	scene.add(copyBrick8Top)

	copyBrick8Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick8Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick8Bottom.position.set(73.3, 7.65, .5)
	copyBrick8Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick8Bottom)

	copyBrick8Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick8)
		scene.remove(copyBrick8Top)
		scene.remove(copyBrick8Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick9 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick9.position.set(74.35, 8.2, .5)
	scene.add(copyBrick9)

	const copyBrick9Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick9Top.position.set(74.35, 8.75, .5)
	copyBrick9Top.rotation.x = -Math.PI/2
	scene.add(copyBrick9Top)

	copyBrick9Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick9Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick9Bottom.position.set(74.35, 7.65, .5)
	copyBrick9Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick9Bottom)

	copyBrick9Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick9)
		scene.remove(copyBrick9Top)
		scene.remove(copyBrick9Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick10 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick10.position.set(75.4, 8.2, .5)
	scene.add(copyBrick10)

	const copyBrick10Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick10Top.position.set(75.4, 8.75, .5)
	copyBrick10Top.rotation.x = -Math.PI/2
	scene.add(copyBrick10Top)

	copyBrick10Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick10Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick10Bottom.position.set(75.4, 7.65, .5)
	copyBrick10Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick10Bottom)

	copyBrick10Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick10)
		scene.remove(copyBrick10Top)
		scene.remove(copyBrick10Bottom)
		bsound.play()
	})
	
	///////////////////

	const copyBrick11 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick11.position.set(76.45, 8.2, .5)
	scene.add(copyBrick11)

	const copyBrick11Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick11Top.position.set(76.45, 8.75, .5)
	copyBrick11Top.rotation.x = -Math.PI/2
	scene.add(copyBrick11Top)

	copyBrick11Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick11Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick11Bottom.position.set(76.45, 7.65, .5)
	copyBrick11Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick11Bottom)

	copyBrick11Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick11)
		scene.remove(copyBrick11Top)
		scene.remove(copyBrick11Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick12 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick12.position.set(77.5, 8.2, .5)
	scene.add(copyBrick12)

	const copyBrick12Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick12Top.position.set(77.5, 8.75, .5)
	copyBrick12Top.rotation.x = -Math.PI/2
	scene.add(copyBrick12Top)

	copyBrick12Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick12Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick12Bottom.position.set(77.5, 7.65, .5)
	copyBrick12Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick12Bottom)

	copyBrick12Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick12)
		scene.remove(copyBrick12Top)
		scene.remove(copyBrick12Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick13 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick13.position.set(78.55, 8.2, .5)
	scene.add(copyBrick13)

	const copyBrick13Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick13Top.position.set(78.55, 8.75, .5)
	copyBrick13Top.rotation.x = -Math.PI/2
	scene.add(copyBrick13Top)

	copyBrick13Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick13Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick13Bottom.position.set(78.55, 7.65, .5)
	copyBrick13Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick13Bottom)

	copyBrick13Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick13)
		scene.remove(copyBrick13Top)
		scene.remove(copyBrick13Bottom)
		bsound.play()
	})


	//////////////////////
	//Third Section Blocks
	//////////////////////
	
	//First Upper Section

	///////////////////
	
	const copyBrick14 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick14.position.set(85.65, 8.2, .5)
	scene.add(copyBrick14)

	const copyBrick14Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick14Top.position.set(85.65, 8.75, .5)
	copyBrick14Top.rotation.x = -Math.PI/2
	scene.add(copyBrick14Top)

	copyBrick14Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick14Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick14Bottom.position.set(85.65, 7.65, .5)
	copyBrick14Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick14Bottom)

	copyBrick14Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick14)
		scene.remove(copyBrick14Top)
		scene.remove(copyBrick14Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick15 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick15.position.set(84.6, 8.2, .5)
	scene.add(copyBrick15)

	const copyBrick15Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick15Top.position.set(84.6, 8.75, .5)
	copyBrick15Top.rotation.x = -Math.PI/2
	scene.add(copyBrick15Top)

	copyBrick15Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick15Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick15Bottom.position.set(84.6, 7.65, .5)
	copyBrick15Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick15Bottom)

	copyBrick15Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick15)
		scene.remove(copyBrick15Top)
		scene.remove(copyBrick15Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick16 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick16.position.set(83.55, 8.2, .5)
	scene.add(copyBrick16)

	const copyBrick16Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick16Top.position.set(83.55, 8.75, .5)
	copyBrick16Top.rotation.x = -Math.PI/2
	scene.add(copyBrick16Top)

	copyBrick16Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick16Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick16Bottom.position.set(83.55, 7.65, .5)
	copyBrick16Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick16Bottom)

	copyBrick16Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick16)
		scene.remove(copyBrick16Top)
		scene.remove(copyBrick16Bottom)
		bsound.play()
	})

	///////////////////
	
	//First Lower Section

	///////////////////
	
	const copyBrick17 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick17.position.set(86.7, 3.8, .5)
	scene.add(copyBrick17)

	const copyBrick17Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick17Top.position.set(86.7, 4.35, .5)
	copyBrick17Top.rotation.x = -Math.PI/2
	scene.add(copyBrick17Top)

	copyBrick17Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick17Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick17Bottom.position.set(86.7, 3.25, .5)
	copyBrick17Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick17Bottom)

	copyBrick17Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (count > 0) {
			initCoin(86.7, 3.8)
			csound.play()
			count -= 1
		} else {
			initCoin(86.7, 3.8)
			csound.play()
			copyBrick17.material.map = blankLoader
			scene.remove(copyBrick17Bottom)
		}
	})

	///////////////////
	
	const copyBrick18 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick18.position.set(93.8, 3.8, .5)
	scene.add(copyBrick18)

	const copyBrick18Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick18Top.position.set(93.8, 4.35, .5)
	copyBrick18Top.rotation.x = -Math.PI/2
	scene.add(copyBrick18Top)

	copyBrick18Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick18Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick18Bottom.position.set(93.8, 3.25, .5)
	copyBrick18Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick18Bottom)

	copyBrick18Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick18)
		scene.remove(copyBrick18Top)
		scene.remove(copyBrick18Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick19 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick19.position.set(94.85, 3.8, .5)
	scene.add(copyBrick19)

	const copyBrick19Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick19Top.position.set(94.85, 4.35, .5)
	copyBrick19Top.rotation.x = -Math.PI/2
	scene.add(copyBrick19Top)

	copyBrick19Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick19Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick19Bottom.position.set(94.85, 3.25, .5)
	copyBrick19Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick19Bottom)

	copyBrick19Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick19)
		scene.remove(copyBrick19Top)
		scene.remove(copyBrick19Bottom)
		bsound.play()
	})

	///////////////////
	
	//Second Lower Section

	///////////////////
	
	const copyBrick20 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick20.position.set(115.05, 3.8, .5)
	scene.add(copyBrick20)

	const copyBrick20Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick20Top.position.set(115.05, 4.35, .5)
	copyBrick20Top.rotation.x = -Math.PI/2
	scene.add(copyBrick20Top)

	copyBrick20Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick20Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick20Bottom.position.set(115.05, 3.25, .5)
	copyBrick20Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick20Bottom)

	copyBrick20Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick20)
		scene.remove(copyBrick20Top)
		scene.remove(copyBrick20Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick21 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick21.position.set(128, 3.8, .5)
	scene.add(copyBrick21)
	
	const copyBrick21Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick21Top.position.set(128, 4.35, .5)
	copyBrick21Top.rotation.x = -Math.PI/2
	scene.add(copyBrick21Top)

	copyBrick21Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick21Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick21Bottom.position.set(128, 3.25, .5)
	copyBrick21Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick21Bottom)

	copyBrick21Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick21)
		scene.remove(copyBrick21Top)
		scene.remove(copyBrick21Bottom)
		bsound.play()
	})

	///////////////////

	const copyBrick22 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick22.position.set(129.05, 3.8, .5)
	scene.add(copyBrick22)

	const copyBrick22Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick22Top.position.set(129.05, 4.35, .5)
	copyBrick22Top.rotation.x = -Math.PI/2
	scene.add(copyBrick22Top)

	copyBrick22Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick22Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick22Bottom.position.set(129.05, 3.25, .5)
	copyBrick22Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick22Bottom)

	copyBrick22Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick22)
		scene.remove(copyBrick22Top)
		scene.remove(copyBrick22Bottom)
		bsound.play()
	})

	///////////////////
	
	//Second Upper Section

	///////////////////
	
	const copyBrick23 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick23.position.set(118.55, 8.2, .5)
	scene.add(copyBrick23)

	const copyBrick23Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick23Top.position.set(118.55, 8.75, .5)
	copyBrick23Top.rotation.x = -Math.PI/2
	scene.add(copyBrick23Top)

	copyBrick23Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick23Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick23Bottom.position.set(118.55, 7.65, .5)
	copyBrick23Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick23Bottom)

	copyBrick23Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick23)
		scene.remove(copyBrick23Top)
		scene.remove(copyBrick23Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick24 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick24.position.set(119.6, 8.2, .5)
	scene.add(copyBrick24)

	const copyBrick24Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick24Top.position.set(119.6, 8.75, .5)
	copyBrick24Top.rotation.x = -Math.PI/2
	scene.add(copyBrick24Top)

	copyBrick24Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick24Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick24Bottom.position.set(119.6, 7.65, .5)
	copyBrick24Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick24Bottom)

	copyBrick23Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick24)
		scene.remove(copyBrick24Top)
		scene.remove(copyBrick24Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick25 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick25.position.set(120.65, 8.2, .5)
	scene.add(copyBrick25)

	const copyBrick25Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick25Top.position.set(120.65, 8.75, .5)
	copyBrick25Top.rotation.x = -Math.PI/2
	scene.add(copyBrick25Top)

	copyBrick25Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick25Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick25Bottom.position.set(120.65, 7.65, .5)
	copyBrick25Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick25Bottom)

	copyBrick25Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick25)
		scene.remove(copyBrick25Top)
		scene.remove(copyBrick25Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick26 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick26.position.set(127.10, 8.2, .5)
	scene.add(copyBrick26)

	const copyBrick26Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick26Top.position.set(127.10, 8.75, .5)
	copyBrick26Top.rotation.x = -Math.PI/2
	scene.add(copyBrick26Top)

	copyBrick26Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick26Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick26Bottom.position.set(127.10, 7.65, .5)
	copyBrick26Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick26Bottom)

	copyBrick26Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick26)
		scene.remove(copyBrick26Top)
		scene.remove(copyBrick26Bottom)
		bsound.play()
	})

	///////////////////

	const copyBrick27 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick27.position.set(130.25, 8.2, .5)
	scene.add(copyBrick27)

	const copyBrick27Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick27Top.position.set(130.25, 8.75, .5)
	copyBrick27Top.rotation.x = -Math.PI/2
	scene.add(copyBrick27Top)

	copyBrick27Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick27Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick27Bottom.position.set(130.25, 7.65, .5)
	copyBrick27Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick27Bottom)

	copyBrick27Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick27)
		scene.remove(copyBrick27Top)
		scene.remove(copyBrick27Bottom)
		bsound.play()
	})


	//////////////////////
	//Fourth Section Blocks
	//////////////////////

	///////////////////

	const copyBrick28 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick28.position.set(174.40, 3.8, .5)
	scene.add(copyBrick28)

	const copyBrick28Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick28Top.position.set(174.40, 4.35, .5)
	copyBrick28Top.rotation.x = -Math.PI/2
	scene.add(copyBrick28Top)

	copyBrick28Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick28Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick28Bottom.position.set(174.40, 3.25, .5)
	copyBrick28Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick28Bottom)

	copyBrick28Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick28)
		scene.remove(copyBrick28Top)
		scene.remove(copyBrick28Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick29 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick29.position.set(175.45, 3.8, .5)
	scene.add(copyBrick29)

	const copyBrick29Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick29Top.position.set(175.45, 4.35, .5)
	copyBrick29Top.rotation.x = -Math.PI/2
	scene.add(copyBrick29Top)

	copyBrick29Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick29Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick29Bottom.position.set(175.45, 3.25, .5)
	copyBrick29Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick29Bottom)

	copyBrick29Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick29)
		scene.remove(copyBrick29Top)
		scene.remove(copyBrick29Bottom)
		bsound.play()
	})

	///////////////////
	
	const copyBrick30 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: brickLoader,}), 0)
	copyBrick30.position.set(177.55, 3.8, .5)
	scene.add(copyBrick30)

	const copyBrick30Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick30Top.position.set(177.55, 4.35, .5)
	copyBrick30Top.rotation.x = -Math.PI/2
	scene.add(copyBrick30Top)

	copyBrick30Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyBrick30Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyBrick30Bottom.position.set(177.55, 3.25, .5)
	copyBrick30Bottom.rotation.x = -Math.PI/2
	scene.add(copyBrick30Bottom)

	copyBrick30Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(copyBrick30)
		scene.remove(copyBrick30Top)
		scene.remove(copyBrick30Bottom)
		bsound.play()
	})

	///////////////////


}