//////////////////////
//Loaders
//////////////////////

const coinLoader 			= new Loader.load("Textures/coin.png")
const transparentCoinLoader = new Loader.load("Textures/transparent.png")


////////////////
//Sides
////////////////

const coinSides = [
	new THREE.MeshPhongMaterial({map: transparentCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: transparentCoinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: coinLoader, transparent: true, depthWrite: false, depthTest: false}),
	new THREE.MeshPhongMaterial({map: coinLoader, transparent: true, depthWrite: false, depthTest: false}),
]


////////////////
//Init Function
////////////////

const initCoin = (x, y) => {

	let coin = new Physijs.BoxMesh(new THREE.BoxGeometry(1, 1, 1), coinSides, 1)
	coin.position.set(x, y + 1.5, 0)
	scene.add(coin)
	coin.setLinearVelocity({x: 0, y: 10, z: 0})
	coin.addEventListener( 'collision', function( other_object, relative_velocity, relative_rotation, contact_normal ) {
		scene.remove(coin)
	})
}