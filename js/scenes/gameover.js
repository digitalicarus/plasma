define([
	'../shared'
], function (
	Shared
) {
	"use strict";

	var ret = {};
	ret.statechange = function (evt, from, to, data) {
         console.log('gameover');
	};
	ret.update = function () {
	};
	ret.render = function () {
	};

	return ret;
}); 
