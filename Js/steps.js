//////////////////////
//Loaders
//////////////////////

const stepLoader = new Loader.load("Textures/step.png")

const stepSideLoader = new Loader.load("Textures/step.png")
stepSideLoader.wrapS = THREE.RepeatWrapping
stepSideLoader.wrapT = THREE.RepeatWrapping
stepSideLoader.repeat.set(2, 1)

const stepTopLoader = new Loader.load("Textures/step.png")
stepTopLoader.wrapS = THREE.RepeatWrapping
stepTopLoader.wrapT = THREE.RepeatWrapping
stepTopLoader.repeat.set(1, 2)

const step2Loader = new Loader.load("Textures/step.png")
step2Loader.wrapS = THREE.RepeatWrapping
step2Loader.wrapT = THREE.RepeatWrapping
step2Loader.repeat.set(2, 1)

const stepTop2Loader = new Loader.load("Textures/step.png")
stepTop2Loader.wrapS = THREE.RepeatWrapping
stepTop2Loader.wrapT = THREE.RepeatWrapping
stepTop2Loader.repeat.set(2, 2)

const step3Loader = new Loader.load("Textures/step.png")
step3Loader.wrapS = THREE.RepeatWrapping
step3Loader.wrapT = THREE.RepeatWrapping
step3Loader.repeat.set(3, 1)

const stepTop3Loader = new Loader.load("Textures/step.png")
stepTop3Loader.wrapS = THREE.RepeatWrapping
stepTop3Loader.wrapT = THREE.RepeatWrapping
stepTop3Loader.repeat.set(3, 2)

const step4Loader = new Loader.load("Textures/step.png")
step4Loader.wrapS = THREE.RepeatWrapping
step4Loader.wrapT = THREE.RepeatWrapping
step4Loader.repeat.set(4, 1)

const stepTop4Loader = new Loader.load("Textures/step.png")
stepTop4Loader.wrapS = THREE.RepeatWrapping
stepTop4Loader.wrapT = THREE.RepeatWrapping
stepTop4Loader.repeat.set(4, 2)

const step5Loader = new Loader.load("Textures/step.png")
step5Loader.wrapS = THREE.RepeatWrapping
step5Loader.wrapT = THREE.RepeatWrapping
step5Loader.repeat.set(5, 1)

const stepTop5Loader = new Loader.load("Textures/step.png")
stepTop5Loader.wrapS = THREE.RepeatWrapping
stepTop5Loader.wrapT = THREE.RepeatWrapping
stepTop5Loader.repeat.set(5, 2)

const step6Loader = new Loader.load("Textures/step.png")
step6Loader.wrapS = THREE.RepeatWrapping
step6Loader.wrapT = THREE.RepeatWrapping
step6Loader.repeat.set(6, 1)

const stepTop6Loader = new Loader.load("Textures/step.png")
stepTop6Loader.wrapS = THREE.RepeatWrapping
stepTop6Loader.wrapT = THREE.RepeatWrapping
stepTop6Loader.repeat.set(6, 2)

const step7Loader = new Loader.load("Textures/step.png")
step7Loader.wrapS = THREE.RepeatWrapping
step7Loader.wrapT = THREE.RepeatWrapping
step7Loader.repeat.set(7, 1)

const stepTop7Loader = new Loader.load("Textures/step.png")
stepTop7Loader.wrapS = THREE.RepeatWrapping
stepTop7Loader.wrapT = THREE.RepeatWrapping
stepTop7Loader.repeat.set(7, 2)

const step8Loader = new Loader.load("Textures/step.png")
step8Loader.wrapS = THREE.RepeatWrapping
step8Loader.wrapT = THREE.RepeatWrapping
step8Loader.repeat.set(8, 1)

const stepTop8Loader = new Loader.load("Textures/step.png")
stepTop8Loader.wrapS = THREE.RepeatWrapping
stepTop8Loader.wrapT = THREE.RepeatWrapping
stepTop8Loader.repeat.set(8, 2)

const step9Loader = new Loader.load("Textures/step.png")
step9Loader.wrapS = THREE.RepeatWrapping
step9Loader.wrapT = THREE.RepeatWrapping
step9Loader.repeat.set(9, 1)

const stepTop9Loader = new Loader.load("Textures/step.png")
stepTop9Loader.wrapS = THREE.RepeatWrapping
stepTop9Loader.wrapT = THREE.RepeatWrapping
stepTop9Loader.repeat.set(9, 2)


//////////////////////
//Sides
//////////////////////

const sides = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTopLoader}),
	new THREE.MeshPhongMaterial({map: stepTopLoader}),
	new THREE.MeshPhongMaterial({map: stepLoader}),
	new THREE.MeshPhongMaterial({map: stepLoader})
]

const sides2 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop2Loader}),
	new THREE.MeshPhongMaterial({map: stepTop2Loader}),
	new THREE.MeshPhongMaterial({map: step2Loader}),
	new THREE.MeshPhongMaterial({map: step2Loader})
]

const sides3 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop3Loader}),
	new THREE.MeshPhongMaterial({map: stepTop3Loader}),
	new THREE.MeshPhongMaterial({map: step3Loader}),
	new THREE.MeshPhongMaterial({map: step3Loader})
]

const sides4 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop4Loader}),
	new THREE.MeshPhongMaterial({map: stepTop4Loader}),
	new THREE.MeshPhongMaterial({map: step4Loader}),
	new THREE.MeshPhongMaterial({map: step4Loader})
]

const sides5 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop5Loader}),
	new THREE.MeshPhongMaterial({map: stepTop5Loader}),
	new THREE.MeshPhongMaterial({map: step5Loader}),
	new THREE.MeshPhongMaterial({map: step5Loader})
]

const sides6 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop6Loader}),
	new THREE.MeshPhongMaterial({map: stepTop6Loader}),
	new THREE.MeshPhongMaterial({map: step6Loader}),
	new THREE.MeshPhongMaterial({map: step6Loader})
]

const sides7 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop7Loader}),
	new THREE.MeshPhongMaterial({map: stepTop7Loader}),
	new THREE.MeshPhongMaterial({map: step7Loader}),
	new THREE.MeshPhongMaterial({map: step7Loader})
]

const sides8 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop8Loader}),
	new THREE.MeshPhongMaterial({map: stepTop8Loader}),
	new THREE.MeshPhongMaterial({map: step8Loader}),
	new THREE.MeshPhongMaterial({map: step8Loader})
]

const sides9 = [
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepSideLoader}),
	new THREE.MeshPhongMaterial({map: stepTop9Loader}),
	new THREE.MeshPhongMaterial({map: stepTop9Loader}),
	new THREE.MeshPhongMaterial({map: step9Loader}),
	new THREE.MeshPhongMaterial({map: step9Loader})
]


//////////////////////
//Init Function
//////////////////////

initSteps = () => {

	//////////////////////
	//First Steps
	//////////////////////
	
	const step4 = new Physijs.BoxMesh(new THREE.BoxGeometry(4.68, 1, 2 ), sides4, 0)
	step4.position.set(135.75, .5, .5)
	scene.add(step4)

	step4.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const step3 = new Physijs.BoxMesh(new THREE.BoxGeometry(3.51, 1, 2 ), sides3, 0)
	step3.position.set(136.335, 1.5, .5)
	scene.add(step3)

	step3.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step2 = new Physijs.BoxMesh(new THREE.BoxGeometry(2.34, 1, 2 ), sides2, 0)
	step2.position.set(136.92, 2.5, .5)
	scene.add(step2)

	step2.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step = new Physijs.BoxMesh(new THREE.BoxGeometry(1.17, 1, 2 ), sides, 0)
	step.position.set(137.505, 3.5, .5)
	scene.add(step)

	step.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	
	//////////////////////
	//Second Steps
	//////////////////////
	
	const step4clone = new Physijs.BoxMesh(new THREE.BoxGeometry(4.68, 1, 2 ), sides4, 0)
	step4clone.position.set(142.85, .5, .5)
	scene.add(step4clone)

	step4clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step3clone = new Physijs.BoxMesh(new THREE.BoxGeometry(3.51, 1, 2 ), sides3, 0)
	step3clone.position.set(142.265, 1.5, .5)
	scene.add(step3clone)

	step3clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step2clone = new Physijs.BoxMesh(new THREE.BoxGeometry(2.34, 1, 2 ), sides2, 0)
	step2clone.position.set(141.68, 2.5, .5)
	scene.add(step2clone)

	step2clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const stepclone = new Physijs.BoxMesh(new THREE.BoxGeometry(1.17, 1, 2 ), sides, 0)
	stepclone.position.set(141.095, 3.5, .5)
	scene.add(stepclone)

	stepclone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	

	//////////////////////
	//Third Steps
	//////////////////////
	
	const step5 = new Physijs.BoxMesh(new THREE.BoxGeometry(5.85, 1, 2 ), sides5, 0)
	step5.position.set(152.925, .5, .5)
	scene.add(step5)

	step5.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})

	const step4set2clone = new Physijs.BoxMesh(new THREE.BoxGeometry(4.68, 1, 2 ), sides4, 0)
	step4set2clone.position.set(153.51, 1.5, .5)
	scene.add(step4set2clone)

	step4set2clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step3set2clone = new Physijs.BoxMesh(new THREE.BoxGeometry(3.51, 1, 2 ), sides3, 0)
	step3set2clone.position.set(154.095, 2.5, .5)
	scene.add(step3set2clone)

	step3set2clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step2set2clone = new Physijs.BoxMesh(new THREE.BoxGeometry(2.34, 1, 2 ), sides2, 0)
	step2set2clone.position.set(154.68, 3.5, .5)
	scene.add(step2set2clone)

	step2set2clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	

	//////////////////////
	//Fourth Steps
	//////////////////////
	
	const step4set3clone = new Physijs.BoxMesh(new THREE.BoxGeometry(4.68, 1, 2 ), sides4, 0)
	step4set3clone.position.set(160.59, .5, .5)
	scene.add(step4set3clone)

	step4set3clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step3set3clone = new Physijs.BoxMesh(new THREE.BoxGeometry(3.51, 1, 2 ), sides3, 0)
	step3set3clone.position.set(160.005, 1.5, .5)
	scene.add(step3set3clone)

	step3set3clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step2set3clone = new Physijs.BoxMesh(new THREE.BoxGeometry(2.34, 1, 2 ), sides2, 0)
	step2set3clone.position.set(159.42, 2.5, .5)
	scene.add(step2set3clone)

	step2set3clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const stepset3clone = new Physijs.BoxMesh(new THREE.BoxGeometry(1.17, 1, 2 ), sides, 0)
	stepset3clone.position.set(158.835, 3.5, .5)
	scene.add(stepset3clone)

	stepset3clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	
	//////////////////////
	//Fifth Steps
	//////////////////////

	const step9 = new Physijs.BoxMesh(new THREE.BoxGeometry(10.53, 1, 2 ), sides9, 0)
	step9.position.set(194.34, .5, .5)
	scene.add(step9)

	step9.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step8 = new Physijs.BoxMesh(new THREE.BoxGeometry(9.36, 1, 2 ), sides8, 0)
	step8.position.set(194.925, 1.5, .5)
	scene.add(step8)

	step8.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step7 = new Physijs.BoxMesh(new THREE.BoxGeometry(8.19, 1, 2 ), sides7, 0)
	step7.position.set(195.51, 2.5, .5)
	scene.add(step7)

	step7.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step6 = new Physijs.BoxMesh(new THREE.BoxGeometry(7.02, 1, 2 ), sides6, 0)
	step6.position.set(196.095, 3.5, .5)
	scene.add(step6)

	step6.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step5set4clone = new Physijs.BoxMesh(new THREE.BoxGeometry(5.85, 1, 2 ), sides5, 0)
	step5set4clone.position.set(196.68, 4.5, .5)
	scene.add(step5set4clone)

	step5set4clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step4set4clone = new Physijs.BoxMesh(new THREE.BoxGeometry(4.68, 1, 2 ), sides4, 0)
	step4set4clone.position.set(197.265, 5.5, .5)
	scene.add(step4set4clone)

	step4set4clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step3set4clone = new Physijs.BoxMesh(new THREE.BoxGeometry(3.51, 1, 2 ), sides3, 0)
	step3set4clone.position.set(197.85, 6.5, .5)
	scene.add(step3set4clone)

	step3set4clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	const step2set4clone = new Physijs.BoxMesh(new THREE.BoxGeometry(2.34, 1, 2 ), sides2, 0)
	step2set4clone.position.set(198.435, 7.5, .5)
	scene.add(step2set4clone)

	step2set4clone.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
	//////////////////////
	//Flag Stand
	//////////////////////

	const stand = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), new THREE.MeshPhongMaterial({map: stepLoader}), 0)
	stand.position.set(209.6, .5, .5)
	scene.add(stand)

	stand.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		if (other_object.geometry.id === playerBox.geometry.id) {
			jump = true
		}
	})
	
}
