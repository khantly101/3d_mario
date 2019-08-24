//////////////////////
//Loaders
//////////////////////

const questionLoader = new Loader.load("Textures/Question.png")
const blankLoader = new Loader.load("Textures/Hit_Block.png")


//////////////////////
//Sound
//////////////////////

const clistener 	= new THREE.AudioListener()
const csound 		= new THREE.Audio(clistener)

audioLoader.load('sounds/coin.wav', (buffer) => {
	csound.setBuffer(buffer)
	csound.setLoop(false)
	csound.setVolume(0.5)
})

const mlistener 	= new THREE.AudioListener()
const msound 		= new THREE.Audio(mlistener)

audioLoader.load('sounds/mushroom_appear.wav', (buffer) => {
	msound.setBuffer(buffer)
	msound.setLoop(false)
	msound.setVolume(0.5)
})


//////////////////////
//Init Function
//////////////////////

const initBlocks = () => {
	
	//////////////////////
	//First Section Blocks
	//////////////////////

	///////////////////

	const question = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	question.position.set(-5.5, 3.8, .5)
	scene.add(question)

	const questionTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	questionTop.position.set(-5.5, 4.35, .5)
	questionTop.rotation.x = -Math.PI/2
	scene.add(questionTop)

	questionTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const questionBottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	questionBottom.position.set(-5.5, 3.25, .5)
	questionBottom.rotation.x = -Math.PI/2
	scene.add(questionBottom)

	questionBottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(-5.5, 3.8)
		question.material.map = blankLoader
		scene.remove(questionBottom)
		csound.play()
	})

	///////////////////

	//Lower Blocks

	///////////////////

	const copyQuestion = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion.position.set(0.55, 3.8, .5)
	scene.add(copyQuestion)

	const copyQuestionTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestionTop.position.set(0.55, 4.35, .5)
	copyQuestionTop.rotation.x = -Math.PI/2
	scene.add(copyQuestionTop)

	copyQuestionTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestionBottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestionBottom.position.set(0.55, 3.25, .5)
	copyQuestionBottom.rotation.x = -Math.PI/2
	scene.add(copyQuestionBottom)

	copyQuestionBottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initMushroom(0.55, 3.8)
		copyQuestion.material.map = blankLoader
		scene.remove(copyQuestionBottom)
		msound.play()
	})

	///////////////////

	const copyQuestion2 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion2.position.set(2.65, 3.8, .5)
	scene.add(copyQuestion2)
	
	const copyQuestion2Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion2Top.position.set(2.65, 4.35, .5)
	copyQuestion2Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion2Top)

	copyQuestion2Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion2Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion2Bottom.position.set(2.65, 3.25, .5)
	copyQuestion2Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion2Bottom)

	copyQuestion2Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(2.65, 3.8)
		copyQuestion2.material.map = blankLoader
		scene.remove(copyQuestion2Bottom)
		csound.play()
	})

	///////////////////

	//Upper Block

	///////////////////
	
	const copyQuestion3 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion3.position.set(1.6, 8.2, .5)
	scene.add(copyQuestion3)

	const copyQuestion3Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion3Top.position.set(1.6, 8.75, .5)
	copyQuestion3Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion3Top)

	copyQuestion3Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion3Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion3Bottom.position.set(1.6, 7.65, .5)
	copyQuestion3Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion3Bottom)

	copyQuestion3Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(1.6, 8.2)
		copyQuestion3.material.map = blankLoader
		scene.remove(copyQuestion3Bottom)
		csound.play()
	})

	
	//////////////////////
	//Second Section Blocks
	//////////////////////

	const copyQuestion4 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion4.position.set(67.75, 3.8, .5)
	scene.add(copyQuestion4)

	const copyQuestion4Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion4Top.position.set(67.75, 4.35, .5)
	copyQuestion4Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion4Top)

	copyQuestion4Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion4Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion4Bottom.position.set(67.75, 3.25, .5)
	copyQuestion4Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion4Bottom)

	copyQuestion4Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initMushroom(67.75, 3.8)
		copyQuestion4.material.map = blankLoader
		scene.remove(copyQuestion4Bottom)
		msound.play()
	})


	//////////////////////
	//Third Section Blocks
	//////////////////////
	
	//First Upper Section

	///////////////////
	
	const copyQuestion5 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion5.position.set(86.7, 8.2, .5)
	scene.add(copyQuestion5)

	const copyQuestion5Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion5Top.position.set(86.7, 8.75, .5)
	copyQuestion5Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion5Top)

	copyQuestion5Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion5Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion5Bottom.position.set(86.7, 7.65, .5)
	copyQuestion5Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion5Bottom)

	copyQuestion5Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(86.7, 8.2)
		copyQuestion5.material.map = blankLoader
		scene.remove(copyQuestion5Bottom)
		csound.play()
	})

	///////////////////
	
	//First Lower Section

	///////////////////
	
	const copyQuestion6 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion6.position.set(100.85, 3.8, .5)
	scene.add(copyQuestion6)

	const copyQuestion6Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion6Top.position.set(100.85, 4.35, .5)
	copyQuestion6Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion6Top)

	copyQuestion6Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion6Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion6Bottom.position.set(100.85, 3.25, .5)
	copyQuestion6Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion6Bottom)

	copyQuestion6Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(100.85, 3.8)
		copyQuestion6.material.map = blankLoader
		scene.remove(copyQuestion6Bottom)
		csound.play()
	})

	///////////////////
	
	const copyQuestion7 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion7.position.set(104.4, 3.8, .5)
	scene.add(copyQuestion7)

	const copyQuestion7Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion7Top.position.set(104.4, 4.35, .5)
	copyQuestion7Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion7Top)

	copyQuestion7Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion7Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion7Bottom.position.set(104.4, 3.25, .5)
	copyQuestion7Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion7Bottom)

	copyQuestion7Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(104.4, 3.8)
		copyQuestion7.material.map = blankLoader
		scene.remove(copyQuestion7Bottom)
		csound.play()
	})

	///////////////////

	const copyQuestion8 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion8.position.set(107.95, 3.8, .5)
	scene.add(copyQuestion8)

	const copyQuestion8Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion8Top.position.set(107.95, 4.35, .5)
	copyQuestion8Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion8Top)

	copyQuestion8Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion8Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion8Bottom.position.set(107.95, 3.25, .5)
	copyQuestion8Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion8Bottom)

	copyQuestion8Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(107.95, 3.8)
		copyQuestion8.material.map = blankLoader
		scene.remove(copyQuestion8Bottom)
		csound.play()
	})

	///////////////////
	
	//Second Upper Section

	///////////////////
	
	const copyQuestion9 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion9.position.set(104.4, 8.2, .5)
	scene.add(copyQuestion9)

	const copyQuestion9Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion9Top.position.set(104.4, 8.75, .5)
	copyQuestion9Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion9Top)

	copyQuestion9Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion9Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion9Bottom.position.set(104.4, 7.65, .5)
	copyQuestion9Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion9Bottom)

	copyQuestion9Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initMushroom(104.4, 8.2)
		copyQuestion9.material.map = blankLoader
		scene.remove(copyQuestion9Bottom)
		msound.play()
	})

	///////////////////
	
	//Third Upper Section

	///////////////////
	
	const copyQuestion10 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion10.position.set(128.15, 8.2, .5)
	scene.add(copyQuestion10)

	const copyQuestion10Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion10Top.position.set(128.15, 8.75, .5)
	copyQuestion10Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion10Top)

	copyQuestion10Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion10Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion10Bottom.position.set(128.15, 7.65, .5)
	copyQuestion10Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion10Bottom)

	copyQuestion10Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(128.15, 8.2)
		copyQuestion10.material.map = blankLoader
		scene.remove(copyQuestion10Bottom)
		csound.play()
	})

	///////////////////
	
	const copyQuestion11 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion11.position.set(129.2, 8.2, .5)
	scene.add(copyQuestion11)

	const copyQuestion11Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion11Top.position.set(129.2, 8.75, .5)
	copyQuestion11Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion11Top)

	copyQuestion11Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion11Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion11Bottom.position.set(129.2, 7.65, .5)
	copyQuestion11Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion11Bottom)

	copyQuestion11Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(129.2, 8.2)
		copyQuestion11.material.map = blankLoader
		scene.remove(copyQuestion11Bottom)
		csound.play()
	})

	
	//////////////////////
	//Fourth Section Blocks
	//////////////////////

	const copyQuestion12 = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: questionLoader}), 0)
	copyQuestion12.position.set(176.5, 3.8, .5)
	scene.add(copyQuestion12)
	
	const copyQuestion12Top = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion12Top.position.set(176.5, 4.35, .5)
	copyQuestion12Top.rotation.x = -Math.PI/2
	scene.add(copyQuestion12Top)

	copyQuestion12Top.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const copyQuestion12Bottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	copyQuestion12Bottom.position.set(176.5, 3.25, .5)
	copyQuestion12Bottom.rotation.x = -Math.PI/2
	scene.add(copyQuestion12Bottom)

	copyQuestion12Bottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		initCoin(176.5, 3.8)
		copyQuestion12.material.map = blankLoader
		scene.remove(copyQuestion12Bottom)
		csound.play()
	})
	

	//////////////////////
	//Invisible Block
	//////////////////////
	
	const blank = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: blankLoader}), 0)
	blank.position.set(51.25, 5, .5)
	
	const blankTop = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	blankTop.position.set(51.25, 5.55, .5)
	blankTop.rotation.x = -Math.PI/2

	blankTop.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const blankBottom = new Physijs.BoxMesh(new THREE.PlaneGeometry(1, 1, 1, 1), new THREE.MeshPhongMaterial({transparent: true, opacity: 0}), 0)
	blankBottom.position.set(51.25, 4.45, .5)
	blankBottom.rotation.x = -Math.PI/2
	scene.add(blankBottom)

	blankBottom.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (blankBottom.position.y > other_object.position.y) {
			init1Up(51.25, 5)
			scene.remove(blankBottom)
			scene.add(blank)
			scene.add(blankTop)
			msound.play()
		}
	})

}

