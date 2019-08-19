//////////////////////
//Loaders
//////////////////////

const pipeLoader = new THREE.MTLLoader()
const pipe2Loader = new THREE.MTLLoader()
const pipe2BottomLoader = new THREE.MTLLoader()
const pipe3Loader = new THREE.MTLLoader()
const pipe3BottomLoader = new THREE.MTLLoader()
const pipe4Loader = new THREE.MTLLoader()
const pipe4BottomLoader = new THREE.MTLLoader()


//////////////////////
//First Section Pipes
//////////////////////

//First Pipe

pipeLoader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.23, 0.2)
		mesh.position.set(9.3, 0, 0.5)
	})
})

//Second Pipe

pipe2Loader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.23, 0.2)
		mesh.position.set(21.1, 1, 0.5)
	})
})

pipe2BottomLoader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.23, 0.2)
		mesh.position.set(21.1, 1, 0.5)
		mesh.rotation.x = -Math.PI
	})
})

//Third Pipe

pipe3Loader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.24, 0.2)
		mesh.position.set(30.6, 1.98, 0.5)
	})
})


pipe3BottomLoader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.397, 0.2)
		mesh.position.set(30.6, 1.98, 0.5)
		mesh.rotation.x = -Math.PI
	})
})

//Fourth Pipe

pipe4Loader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.24, 0.2)
		mesh.position.set(43.6, 1.98, 0.5)
	})
})


pipe4BottomLoader.load("Models/Pipe/warppipe.mtl", (materials) => {
	materials.preload()
	let objLoader = new THREE.OBJLoader()
	objLoader.setMaterials(materials)

	objLoader.load("Models/Pipe/warppipe.obj", (mesh) => {

		mesh.traverse((node) => {
			if (node instanceof THREE.Mesh) {
				node.castShadow = true
			}
		})

		scene.add(mesh)
		mesh.scale.set(0.25, 0.397, 0.2)
		mesh.position.set(43.6, 1.98, 0.5)
		mesh.rotation.x = -Math.PI
	})
})
