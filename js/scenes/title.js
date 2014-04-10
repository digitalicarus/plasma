define([
	'../shared'
], function (
	Shared
) {
	"use strict";

	var ret = {}
	,   Phaser = Shared.Phaser
	,   game   = Shared.game
	,   title  = new Phaser.Text(game, 50, 50, 'TITLE', { fill: 'red', stroke: 'white', font: 'bold 50px Arial'});
	;

	title.renderable = true;
	console.log(title);

	ret.statechange = function (evt, from, to, data) {
         console.log('title');
	};
	ret.update = function () {
	};
	ret.render = function () {
	};

	return ret;
});
