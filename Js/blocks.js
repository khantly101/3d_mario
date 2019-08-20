//////////////////////
//Loaders
//////////////////////

const questionLoader = new Loader.load("Textures/Question.png")
const brickLoader = new Loader.load("Textures/Brick_Block.png")
const blankLoader = new Loader.load("Textures/Hit_Block.png")


////////////////
//Init Function
////////////////

const initBlocks = () => {
	
	//////////////////////
	//First Section Blocks
	//////////////////////

	//Question Blocks

	const question = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	question.position.set(-5.5, 3.8, 0)
	scene.add(question)

	//Lower Question Blocks

	copyQuestion = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion.position.set(0.55, 3.8, 0)
	scene.add(copyQuestion)
	
	copyQuestion2 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion2.position.set(2.65, 3.8, 0)
	scene.add(copyQuestion2)
	
	//Upper Question Block
	
	copyQuestion3 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion3.position.set(1.6, 8.2, 0)
	scene.add(copyQuestion3)
	
	//Brick Blocks
	
	const brick = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	brick.position.set(-0.50, 3.8, 0)
	scene.add(brick)
	
	copyBrick = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick.position.set(1.6, 3.8, 0)
	scene.add(copyBrick)
	
	copyBrick2 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick2.position.set(3.7, 3.8, 0)
	scene.add(copyBrick2)
	
	//Invisible Block
	
	const blank = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: blankLoader,
		}),
		0
	)
	blank.position.set(51.25, 5, 0)
	scene.add(blank)
	
	
	//////////////////////
	//Second Section Blocks
	//////////////////////
	
	//Question Blocks
	
	copyQuestion4 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion4.position.set(67.75, 3.8, 0)
	scene.add(copyQuestion4)
	
	//Brick Blocks
	//Lower Blocks
	
	copyBrick3 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick3.position.set(66.7, 3.8, 0)
	scene.add(copyBrick3)
	
	copyBrick4 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick4.position.set(68.8, 3.8, 0)
	scene.add(copyBrick4)

	//Upper Blocks
	
	copyBrick5 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick5.position.set(70.15, 8.2, 0)
	scene.add(copyBrick5)
	
	copyBrick6 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick6.position.set(71.2, 8.2, 0)
	scene.add(copyBrick6)
	
	copyBrick7 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick7.position.set(72.25, 8.2, 0)
	scene.add(copyBrick7)
	
	copyBrick8 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick8.position.set(73.3, 8.2, 0)
	scene.add(copyBrick8)
	
	copyBrick9 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick9.position.set(74.35, 8.2, 0)
	scene.add(copyBrick9)
	
	copyBrick10 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick10.position.set(75.4, 8.2, 0)
	scene.add(copyBrick10)
	
	copyBrick11 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick11.position.set(76.45, 8.2, 0)
	scene.add(copyBrick11)
	
	copyBrick12 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick12.position.set(77.5, 8.2, 0)
	scene.add(copyBrick12)
	
	copyBrick13 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick13.position.set(78.55, 8.2, 0)
	scene.add(copyBrick13)


	//////////////////////
	//Third Section Blocks
	//////////////////////
	
	//Question Blocks
	//First Upper Section
	
	copyQuestion5 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion5.position.set(86.7, 8.2, 0)
	scene.add(copyQuestion5)
	
	//First Lower Section
	
	copyQuestion6 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion6.position.set(100.85, 3.8, 0)
	scene.add(copyQuestion6)
	
	copyQuestion7 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion7.position.set(104.4, 3.8, 0)
	scene.add(copyQuestion7)

	copyQuestion8 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion8.position.set(107.95, 3.8, 0)
	scene.add(copyQuestion8)
	
	//Second Upper Section
	
	copyQuestion9 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion9.position.set(104.4, 8.2, 0)
	scene.add(copyQuestion9)
	
	//Third Upper Section
	
	copyQuestion10 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion10.position.set(128.15, 8.2, 0)
	scene.add(copyQuestion10)
	
	copyQuestion11 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion11.position.set(129.2, 8.2, 0)
	scene.add(copyQuestion11)
	
	//Brick Blocks
	//First Upper Section
	
	copyBrick14 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick14.position.set(85.65, 8.2, 0)
	scene.add(copyBrick14)
	
	copyBrick15 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick15.position.set(84.6, 8.2, 0)
	scene.add(copyBrick15)
	
	copyBrick16 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick16.position.set(83.55, 8.2, 0)
	scene.add(copyBrick16)
	
	//First Lower Section
	
	copyBrick17 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick17.position.set(86.7, 3.8, 0)
	scene.add(copyBrick17)
	
	copyBrick18 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick18.position.set(93.8, 3.8, 0)
	scene.add(copyBrick18)
	
	copyBrick18 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick18.position.set(94.85, 3.8, 0)
	scene.add(copyBrick18)
	
	//Second Lower Section
	
	copyBrick19 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick19.position.set(115.05, 3.8, 0)
	scene.add(copyBrick19)
	
	copyBrick20 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick20.position.set(128, 3.8, 0)
	scene.add(copyBrick20)
	
	copyBrick21 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick21.position.set(129.05, 3.8, 0)
	scene.add(copyBrick21)
	
	//Second Upper Section

	copyBrick22 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick22.position.set(118.55, 8.2, 0)
	scene.add(copyBrick22)
	
	copyBrick23 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick23.position.set(119.6, 8.2, 0)
	scene.add(copyBrick23)
	
	copyBrick24 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick24.position.set(120.65, 8.2, 0)
	scene.add(copyBrick24)
	
	copyBrick25 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick25.position.set(127.10, 8.2, 0)
	scene.add(copyBrick25)

	copyBrick26 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick26.position.set(130.25, 8.2, 0)
	scene.add(copyBrick26)
	
	
	//////////////////////
	//Fourth Section Blocks
	//////////////////////

	//Question Blocks
	
	copyQuestion12 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1, 1, 1 ), 
		new THREE.MeshPhongMaterial({
			map: questionLoader
		}),
		0
	)
	copyQuestion12.position.set(176.5, 3.8, 0)
	scene.add(copyQuestion12)
	
	//Brick Blocks
	
	copyBrick27 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick27.position.set(174.40, 3.8, 0)
	scene.add(copyBrick27)
	
	copyBrick28 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick28.position.set(175.45, 3.8, 0)
	scene.add(copyBrick28)
	
	copyBrick29 = new Physijs.BoxMesh(
		new THREE.BoxGeometry(1,1,1),
		new THREE.MeshPhongMaterial({
			map: brickLoader,
		}),
		0
	)
	copyBrick29.position.set(177.55, 3.8, 0)
	scene.add(copyBrick29)
}