define([
	'shared',
	'statemachine',
	'scenes/loading',
	'scenes/game',
	'scenes/title',
	'scenes/option',
	'scenes/gameover'
], function (
	Shared,
	statemachine,
	loadingScene,
	gameScene,
	titleScene,
	optionScene,
	gameoverScene
) {
	"use strict";

	var doc    = document
	,   main   = doc.getElementsByTagName('main')[0]
	,   util   = Shared.util
	,   config = Shared.config
	,   Phaser = Shared.Phaser
	,   game
	,   state
	,   render = Shared.noop
	,   update = Shared.noop
	;

	function preload () {
		util.initResize(game.canvas, main, config.width, config.height);
		// load assets
		console.log('loading');
	}

	function create () {
		state = Shared.state = statemachine.create({
			initial: 'none',
			events: [
				{name: 'begin',    from: 'none',          to: loadingScene},
				{name: 'loaded',   from: loadingScene,    to: titleScene},
				{name: 'start',    from: titleScene,      to: gameScene},
				{name: 'option',   from: titleScene,      to: optionScene},
				{name: 'title',    from: optionScene,     to: titleScene},
				{name: 'gameover', from: gameScene,       to: titleScene},
				{name: 'pause',    from: gameScene,       to: 'pause'},
				{name: 'resume',   from: 'pause',         to: gameScene}
			]
		});

		state.onenterstate = function (evt, from, to, data) {
			console.log('state change', arguments);
			to.sceneChange && to.sceneChange();

			if (to.render && typeof to.render === 'function') {
				render = to.render;
			}

			if (to.update && typeof to.update === 'function') {
				update = to.update;
			}
		};

		state.begin();
	}

	game = Shared.game = new Phaser.Game(
		config.width,
		config.height,
		Phaser.AUTO,
		main,
		{
			preload: preload,
			create:  create,
			update:  function () { update(); },
			render:  function () { render(); }
		},
		false, // transparent canvas
		config.antialias || false // antialias
	);

	window.game = game;
});
