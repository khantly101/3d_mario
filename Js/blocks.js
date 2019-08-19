//////////////////////
//Loaders
//////////////////////

const questionLoader = new Loader.load("Textures/Question.png")
const brickLoader = new Loader.load("Textures/Brick_Block.png")
const blankLoader = new Loader.load("Textures/Hit_Block.png")

//////////////////////
//First Section Blocks
//////////////////////

//Question Blocks

const question = new THREE.Mesh( 
	new THREE.BoxGeometry( 1, 1, 1 ), 
	new THREE.MeshPhongMaterial({
		map: questionLoader
	}) 
)
question.position.set(-5.5, 3.8, 0)
question.castShadow = true
question.receiveShadow = true
scene.add(question)

//Lower Question Blocks

copyQuestion = question.clone()
copyQuestion.position.set(0.55, 3.8, 0)
scene.add(copyQuestion)

copyQuestion2 = question.clone()
copyQuestion2.position.set(2.65, 3.8, 0)
scene.add(copyQuestion2)

//Upper Question Block

copyQuestion3 = question.clone()
copyQuestion3.position.set(1.6, 8.2, 0)
scene.add(copyQuestion3)

//Brick Blocks

const brick = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshPhongMaterial({
		map: brickLoader,
	})
)
brick.position.set(-0.50, 3.8, 0)
brick.receiveShadow = true
brick.castShadow = true
scene.add(brick)

copyBrick = brick.clone()
copyBrick.position.set(1.6, 3.8, 0)
scene.add(copyBrick)

copyBrick2 = brick.clone()
copyBrick2.position.set(3.7, 3.8, 0)
scene.add(copyBrick2)

//Invisible Block

const blank = new THREE.Mesh(
	new THREE.BoxGeometry(1,1,1),
	new THREE.MeshPhongMaterial({
		map: blankLoader,
	})
)
blank.position.set(51.25, 5, 0)
blank.receiveShadow = true
blank.castShadow = true
scene.add(blank)


//////////////////////
//Second Section Blocks
//////////////////////

//Question Blocks

copyQuestion4 = question.clone()
copyQuestion4.position.set(67.75, 3.8, 0)
scene.add(copyQuestion4)

//Brick Blocks

//Lower Blocks

copyBrick3 = brick.clone()
copyBrick3.position.set(66.7, 3.8, 0)
scene.add(copyBrick3)

copyBrick4 = brick.clone()
copyBrick4.position.set(68.8, 3.8, 0)
scene.add(copyBrick4)

//Upper Blocks

copyBrick5 = brick.clone()
copyBrick5.position.set(70.15, 8.2, 0)
scene.add(copyBrick5)

copyBrick6 = brick.clone()
copyBrick6.position.set(71.2, 8.2, 0)
scene.add(copyBrick6)

copyBrick7 = brick.clone()
copyBrick7.position.set(72.25, 8.2, 0)
scene.add(copyBrick7)

copyBrick8 = brick.clone()
copyBrick8.position.set(73.3, 8.2, 0)
scene.add(copyBrick8)

copyBrick9 = brick.clone()
copyBrick9.position.set(74.35, 8.2, 0)
scene.add(copyBrick9)

copyBrick10 = brick.clone()
copyBrick10.position.set(75.4, 8.2, 0)
scene.add(copyBrick10)

copyBrick11 = brick.clone()
copyBrick11.position.set(76.45, 8.2, 0)
scene.add(copyBrick11)

copyBrick12 = brick.clone()
copyBrick12.position.set(77.5, 8.2, 0)
scene.add(copyBrick12)

copyBrick13 = brick.clone()
copyBrick13.position.set(78.55, 8.2, 0)
scene.add(copyBrick13)


//////////////////////
//Third Section Blocks
//////////////////////

//Question Blocks

//First Upper Section

copyQuestion5 = question.clone()
copyQuestion5.position.set(86.7, 8.2, 0)
scene.add(copyQuestion5)

copyQuestion6 = question.clone()
copyQuestion6.position.set(67.75, 3.8, 0)
scene.add(copyQuestion6)

copyQuestion7 = question.clone()
copyQuestion7.position.set(67.75, 3.8, 0)
scene.add(copyQuestion7)

copyQuestion8 = question.clone()
copyQuestion8.position.set(67.75, 3.8, 0)
scene.add(copyQuestion8)

copyQuestion9 = question.clone()
copyQuestion9.position.set(67.75, 3.8, 0)
scene.add(copyQuestion9)

copyQuestion10 = question.clone()
copyQuestion10.position.set(67.75, 3.8, 0)
scene.add(copyQuestion10)

copyQuestion11 = question.clone()
copyQuestion11.position.set(67.75, 3.8, 0)
scene.add(copyQuestion11)
