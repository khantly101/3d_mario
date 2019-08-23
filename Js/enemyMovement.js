const enemyMovement = () => {

	if (goomba14.parent === scene) {
		goomba14.setLinearVelocity({x: -5, y: 0, z: 0})
		goomba14.rotation.set(0, 0, 0)
		goomba14.position.y = .6
		goomba14.__dirtyRotation = true
	}

	if (goomba.parent === scene) {
		goomba.setLinearVelocity({x: goombaSd.first, y: 0, z: 0})
		goomba.rotation.set(0, 0, 0)
		goomba.position.y = .6
		goomba.__dirtyRotation = true
	}

	if (goomba2.parent === scene) {
		goomba2.setLinearVelocity({x: goombaSd.second, y: 0, z: 0})
		goomba2.rotation.set(0, 0, 0)
		goomba2.position.y = .6
		goomba2.__dirtyRotation = true
	}

	if (goomba3.parent === scene) {
		goomba3.setLinearVelocity({x: goombaSd.third, y: 0, z: 0})
		goomba3.rotation.set(0, 0, 0)
		goomba3.position.y = .6
		goomba3.__dirtyRotation = true
	}

	if (playerBox.position.x > 60) {
		if (goomba4.parent === scene) {
			goomba4.rotation.set(0, 0, 0)
			goomba4.__dirtyRotation = true

			let goomba4Velocity = goomba4.getLinearVelocity()

			if (goomba4Velocity.y < 0) {
				goomba4.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba4.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}

		if (goomba5.parent === scene) {
			goomba5.rotation.set(0, 0, 0)
			goomba5.__dirtyRotation = true

			let goomba5Velocity = goomba5.getLinearVelocity()

			if (goomba5Velocity.y < 0) {
				goomba5.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba5.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}
	}

	if (playerBox.position.x > 75) {
		if (goomba6.parent === scene) {
			goomba6.rotation.set(0, 0, 0)
			goomba6.__dirtyRotation = true

			let goomba6Velocity = goomba6.getLinearVelocity()

			if (goomba6Velocity.y < 0) {
				goomba6.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba6.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}

		if (goomba7.parent === scene) {
			goomba7.rotation.set(0, 0, 0)
			goomba7.__dirtyRotation = true

			let goomba7Velocity = goomba7.getLinearVelocity()

			if (goomba7Velocity.y < 0) {
				goomba7.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba7.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}
	}

	if (playerBox.position.x > 95) {
		if (goomba8.parent === scene) {
			goomba8.rotation.set(0, 0, 0)
			goomba8.__dirtyRotation = true

			let goomba8Velocity = goomba8.getLinearVelocity()
	
			if (goomba8Velocity.y < 0) {
				goomba8.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba8.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}
	
		if (goomba9.parent === scene) {
			goomba9.rotation.set(0, 0, 0)
			goomba9.__dirtyRotation = true

			let goomba9Velocity = goomba9.getLinearVelocity()
	
			if (goomba9Velocity.y < 0) {
				goomba9.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba9.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}
	
		if (goomba10.parent === scene) {
			goomba10.rotation.set(0, 0, 0)
			goomba10.__dirtyRotation = true

			let goomba10Velocity = goomba10.getLinearVelocity()

			if (goomba10Velocity.y < 0) {
				goomba10.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba10.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}

		if (goomba11.parent === scene) {
			goomba11.rotation.set(0, 0, 0)
			goomba11.__dirtyRotation = true

			let goomba11Velocity = goomba11.getLinearVelocity()

			if (goomba11Velocity.y < 0) {
				goomba11.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				goomba11.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}
	}

	if (goomba12.parent === scene) {
		goomba12.setLinearVelocity({x: goombaSd.twelfth, y: 0, z: 0})
		goomba12.rotation.set(0, 0, 0)
		goomba12.position.y = .6
		goomba12.__dirtyRotation = true
	}

	if (goomba13.parent === scene) {
		goomba13.setLinearVelocity({x: goombaSd.thirteenth, y: 0, z: 0})
		goomba13.rotation.set(0, 0, 0)
		goomba13.position.y = .6
		goomba13.__dirtyRotation = true
	}

	if (playerBox.position.x > 85) {
		if (koopa.parent === scene) {
			koopa.rotation.set(0, 0, 0)
			koopa.__dirtyRotation = true

			let koopaVelocity = koopa.getLinearVelocity()
	
			if (koopaVelocity.y < 0) {
				koopa.setLinearVelocity({x: -.5, y: -3, z: 0})
			} else {
				koopa.setLinearVelocity({x: -3, y: 0, z: 0})
			}
		}
	}

}