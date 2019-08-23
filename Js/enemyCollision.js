//////////////////////
//Sounds
//////////////////////

const glistener 	= new THREE.AudioListener()
const gsound 		= new THREE.Audio(glistener)

audioLoader.load('sounds/stomp.wav', (buffer) => {
	gsound.setBuffer(buffer)
	gsound.setLoop(false)
	gsound.setVolume(0.5)
})

const dlistener 	= new THREE.AudioListener()
const dsound 		= new THREE.Audio(dlistener)

audioLoader.load('sounds/death.wav', (buffer) => {
	dsound.setBuffer(buffer)
	dsound.setLoop(false)
	dsound.setVolume(0.5)
})


//////////////////////
//Collision Function
//////////////////////

const enemyCollision = (other_object) => {

	if (other_object.geometry.id === goomba14.geometry.id) {
		if (playerBox.position.y > goomba14.position.y) {
			scene.remove(goomba14)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}
	
	if (other_object.geometry.id === goomba.geometry.id) {
		if (playerBox.position.y > goomba.position.y) {
			scene.remove(goomba)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba2.geometry.id) {
		if (playerBox.position.y > goomba2.position.y) {
			scene.remove(goomba2)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba3.geometry.id) {
		if (playerBox.position.y > goomba3.position.y) {
			scene.remove(goomba3)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba4.geometry.id) {
		if (playerBox.position.y > goomba4.position.y + .6) {
			scene.remove(goomba4)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba5.geometry.id) {
		if (playerBox.position.y > goomba5.position.y + .6) {
			scene.remove(goomba5)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba6.geometry.id) {
		if (playerBox.position.y > goomba6.position.y + .6) {
			scene.remove(goomba6)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba7.geometry.id) {
		if (playerBox.position.y > goomba7.position.y + .6) {
			scene.remove(goomba7)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba8.geometry.id) {
		if (playerBox.position.y > goomba8.position.y + .6) {
			scene.remove(goomba8)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba9.geometry.id) {
		if (playerBox.position.y > goomba9.position.y + .6) {
			scene.remove(goomba9)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba10.geometry.id) {
		if (playerBox.position.y > goomba10.position.y + .6) {
			scene.remove(goomba10)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba11.geometry.id) {
		if (playerBox.position.y > goomba11.position.y + .6) {
			scene.remove(goomba11)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba12.geometry.id) {
		if (playerBox.position.y > goomba12.position.y) {
			scene.remove(goomba12)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === goomba13.geometry.id) {
		if (playerBox.position.y > goomba13.position.y) {
			scene.remove(goomba13)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)
		}
	}

	if (other_object.geometry.id === koopa.geometry.id) {
		if (playerBox.position.y > koopa.position.y + .6) {
			scene.remove(koopa)
			gsound.play()
		} else {
			scene.remove(playerBox)
			dsound.play()
			setTimeout(()=>{reset()}, 2500)

		}
	}
}