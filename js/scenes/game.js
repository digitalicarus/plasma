define([
	'../shared'
], function (
	Shared
) {
	"use strict";

	var ret = {};
	ret.statechange = function (evt, from, to, data) {
         console.log('game');
	};
	ret.update = function () {
	};
	ret.render = function () {
	};

	return ret;
}); 
