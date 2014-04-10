require.config({
	paths: {
		'phaser': 'vendor/phaser.min',
		'statemachine': 'vendor/state-machine.min'
	},
	shim: {
		'statemachine': {
			exports: 'StateMachine'
		}
	}
});

require(['game'], function () {});

