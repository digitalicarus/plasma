define([
	'../shared'
], function (
	Shared
) {
	"use strict";

	var ret = {};
	ret.statechange = function (evt, from, to, data) {
         console.log('loading');
	};
	ret.update = function () {
	};
	ret.render = function () {
		Shared.state.loaded();
	};

	return ret;
});
