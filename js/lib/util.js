define([], function () {
	"use strict";
	var ret    = {}
	,   doc    = document
	,   html   = doc.getElementsByTagName('html')[0]
	,   body   = doc.body
	,   canvas
	;

	ret.vendorStyle = function (ele, prop, val) {
		var caps = prop.charAt(0).toUpperCase() + prop.slice(1)
		,   vendors = ['', 'webkit', 'moz', 'ms', 'o']
		,   tmp  = ''
		,   i
		;

		for (i=0; i<vendors.length; i++) {
			tmp = vendors[i] + ((vendors[i]==='') ? prop : caps);
			if (ele.style.hasOwnProperty(tmp)) {
				ele.style[tmp] = val;
			}
		}
	};

	ret.resize = function (container) {
		var width     = container.clientWidth  || container.innerWidth
		,   height    = container.clientHeight || container.innerHeight
		,   ratioFlip = (width / height < canvas.width / canvas.height) 
		,   percent   = ratioFlip ? width / canvas.width : height / canvas.height
		;

		if (ratioFlip) {
			canvas.style.top = '50%';
			canvas.style.marginTop = '-' + ((canvas.height >> 1) * percent) + 'px'; 
		}
		else {
			canvas.style.top = 'auto';
			canvas.style.marginTop = 'auto';
		}

		ret.vendorStyle(canvas, 'transform', 'scale(' + percent + ', ' + percent + ')');
	};

	ret.initResize = function (_canvas, container, width, height) {
		canvas = _canvas;
		container = container || window;

		// ~_..-==- Base CSS -==-.._~
		html.style.height  = '100%';
		body.style.height  = '100%';
		body.style.padding = '0';
		body.style.margin  = '0';

		container.style.height = '100%';

		canvas.style.position   = 'absolute';
		canvas.style.left       = '50%';
		canvas.style.marginLeft = '-' + (canvas.width >> 1) + 'px';
		ret.vendorStyle(canvas, 'transformOrigin', '50% 0%');
		
		ret.resize(container);
		window.addEventListener('resize', function (e) { ret.resize(container); });
	};

	return ret;

});
