define([
	'phaser',
	'lib/util'
], function (
	Phaser,
	util
) {
	"use strict";
	var ret = {}, config, canvas, ctx;

	config = {
		width: 240,
		height: 160
	};

	ret.util   = util;
	ret.config = config;
	ret.Phaser = Phaser;
	ret.noop   = function () {};

	return ret;
});
