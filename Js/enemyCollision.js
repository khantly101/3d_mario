const enemyCollision = (other_object) => {
	if (other_object.geometry.id === goomba.geometry.id) {
		if (playerBox.position.y > goomba.position.y) {
			scene.remove(goomba)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba2.geometry.id) {
		if (playerBox.position.y > goomba2.position.y) {
			scene.remove(goomba2)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba3.geometry.id) {
		if (playerBox.position.y > goomba3.position.y) {
			scene.remove(goomba3)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba4.geometry.id) {
		if (playerBox.position.y > goomba4.position.y) {
			scene.remove(goomba4)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba5.geometry.id) {
		if (playerBox.position.y > goomba5.position.y) {
			scene.remove(goomba5)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba6.geometry.id) {
		if (playerBox.position.y > goomba6.position.y) {
			scene.remove(goomba6)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba7.geometry.id) {
		if (playerBox.position.y > goomba7.position.y) {
			scene.remove(goomba7)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba8.geometry.id) {
		if (playerBox.position.y > goomba8.position.y) {
			scene.remove(goomba8)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba9.geometry.id) {
		if (playerBox.position.y > goomba9.position.y) {
			scene.remove(goomba9)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba10.geometry.id) {
		if (playerBox.position.y > goomba10.position.y) {
			scene.remove(goomba10)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba11.geometry.id) {
		if (playerBox.position.y > goomba11.position.y) {
			scene.remove(goomba11)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba12.geometry.id) {
		if (playerBox.position.y > goomba12.position.y) {
			scene.remove(goomba12)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === goomba13.geometry.id) {
		if (playerBox.position.y > goomba13.position.y) {
			scene.remove(goomba13)
		} else {
			scene.remove(playerBox)
		}
	}

	if (other_object.geometry.id === koopa.geometry.id) {
		if (playerBox.position.y > koopa.position.y) {
			scene.remove(koopa)
		} else {
			scene.remove(playerBox)
		}
	}
}