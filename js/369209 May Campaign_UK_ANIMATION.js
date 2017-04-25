(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"369209 May Campaign_UK_ANIMATION_atlas_", frames: [[1082,671,519,221],[1082,0,355,669],[0,0,1080,1920]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.FlashAICBAssets = function() {
	this.spriteSheet = ss["369209 May Campaign_UK_ANIMATION_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.FlashAICBAssets_1 = function() {
	this.spriteSheet = ss["369209 May Campaign_UK_ANIMATION_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Travelstateofmind4_1920x1080 = function() {
	this.spriteSheet = ss["369209 May Campaign_UK_ANIMATION_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets();
	this.instance.parent = this;
	this.instance.setTransform(80,-1474);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(80,-1474,519,221);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.FlashAICBAssets_1();
	this.instance.parent = this;
	this.instance.setTransform(9,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(9,0,355,669);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgmtAYXQhrgLhXghQhrgqg2hGQhZh1gwi7QgsiugBjMQmzB+jcgCQiMgBhNg4Qg+gtAAg7QABgPAFgPQAIgVALABQA4AEA+gEQBvgICEgdQB+gbCSgvQCOgtCag7QA2mnDAl/QC9l3EvktQDTjSDAhxQExizFIADIBKAAQEfADDJCwQDJCvgCD2QgBAogGAlIgGAiQgEAUgGAOQg3CIhXBxQgUAagbAfQgGAGADAEQACADAGgBQA2gGCCgRQB2gQBCgFQC3gPDBAKQCwAJDJAdQCjAYDNApQB7AZHTByQFrBYDnAgQEiAoFEgOQEtgOE3g7QDHgnDahbQBegnBdgvIAtgYQAbgPARgHQAMgGAFATQAFARAAAKQABAOgEAOQgGAVgUAXIgkAkQgoAqgsAlQhTBKhjBEQg2AlhIAoIgZAOQjmB7jvBGQmoB+megNQhVgChHgIQkEgZjQgnQjxgsjbhGQi5g7hogeQihgwiEggQicgliXgYQlmg3lIAvQiYAWiuA4IkgBdQhEAXhfAlQhqArg3AVQleCJjxBiQimBDieA7QgNBtgCBvQAABZAGAwQAJBNAeA1QBNCHC3gBQBzgBC9g/QBwglCLg6QBGgdCxhOIBIgiICRhHQAbgMA1gcQA5gcAcgPQAogXAkgRIAIgEQAEgCAEADQAGADACAEQAEAIABAXQACAngUAaQgNARgVATQg5A2gvAmQgzAqgZATIhvBVQjdCmjMBzQjqCFjlBNQjOBGiyAAQgtAAgrgEgA0UyoQiQAjiKB4QhmBag0A2QhFBJg+BcQkTGciDGqIHvjkIDBhaQBqgwBBgkQCxhgCRiQQBJhJAhg5QAnhDANhcQALhQgShKQgThPgxg4QhShdh4AAQgqAAgvALg");
	this.shape.setTransform(397.9,159.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(3.1,3.1,789.7,312.7), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EgiDAm8MAAAhN3MBEHAAAMAAABN3g");
	mask.setTransform(218,249.2);

	// Layer 3
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(440.9,232.4,1,1,0,0,0,397.9,159.4);
	this.instance.shadow = new cjs.Shadow("rgba(0,0,0,0.6)",3,3,6);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,19,436,436), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AndYYQhsgLhWghQhrgqg2hGQhah1gwi8QgsisAAjOQmzB/jegCQiLgChNg3Qg/guABg7QAAgOAGgQQAHgUAMAAQAxAFBFgFQBvgICEgdQB8gbCUgvQCIgrCgg8QA3mpDAl/QC8l4EwktQDTjSC/hwQEyi0FIADIBLAAQEfADDJCwQDJCwgCD1QgBApgGAkQgIAygIASQg2CHhYBzQgYAfgXAaQgGAHADADQACADAFgBQA3gGCCgRQB2gQBCgFQB1gKCCABIAAF8QjjgOjeAfQiZAWitA5IkgBdQhFAWheAlIiiBBQk7B7kUBwQi2BKiOA0QgOB0gBBoQgBBYAHAxQAJBNAeA1QBNCIC3gBQBzgBC9g/QBwglCLg6QBJgfCuhNIBJgiICRhGQAbgNA0gbQA2gaAfgSQAvgaAegOIAIgEQAEgBAEACQAFADADAFQAEAHABAXQABAngUAbQgOASgTARQg6A3gvAlIgmAfIgmAeIhvBWQjdCljMB0QjqCFjkBOQjPBGiyAAQgtAAgrgFgAK8ypQiQAiiKB5QhnBag0A2QhFBJg9BbQkSGciEGrIHvjkIDBhZQBqgxBAgjQCyhhCRiQQBKhJAhg5QAmhDANhcQAMhRgShJQgThPgyg5QhRhch5AAQgqAAgvALg");
	this.shape.setTransform(228.7,979.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EgkZCWAMAAAiVpQB2AHB5ATQCYAXCbAlQCDAhChAvQBoAfC6A7QDcBGDxAtQDRAnEDAZQBHAHBWADQGcAMGph9QDthFDph+IAZgOQBEglA6goQBihEBUhJQAugnAmgoIAlglQATgWAHgVQADgNgBgPQAAgLgFgRQgEgSgNAGQgSAHgaAPIgsAYQhdAuhfApQjaBajIAnQk2A6kuAOQlEAOkigoQjngflshYQnRhyh9gZQjPgqiigXQjJgdivgJQhJgEg6AAMAAAiQbMBIzAAAMAAAEr/g");
	this.shape_1.setTransform(656.7,960);

	this.instance = new lib.ClipGroup();
	this.instance.parent = this;
	this.instance.setTransform(405.5,996.7,1,1,0,0,0,417.9,249.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.3,0,914,1920);


// stage content:
(lib._369209MayCampaign_UK_ANIMATION = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(247.8,1657.7,1,1,0,0,0,270,130.5);
	this.instance.alpha = 0;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:339.5,regY:-1363.5,x:317.3,y:163.7},0).wait(4).to({alpha:0.2},0).wait(1).to({alpha:0.4},0).wait(1).to({alpha:0.6},0).wait(1).to({alpha:0.8},0).wait(1).to({alpha:1},0).wait(231));

	// Layer 3
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(831,1494,1,1,0,0,0,177,333);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).wait(1).to({regX:186.5,regY:334.5,x:840.5,y:1495.5},0).wait(2).to({alpha:0.25},0).wait(1).to({alpha:0.5},0).wait(1).to({alpha:0.75},0).wait(1).to({alpha:1},0).wait(221));

	// Layer 1
	this.instance_2 = new lib.Symbol1();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1502.6,960,1,1,0,0,0,419.5,960);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:438.7,x:1521.8},0).wait(5).to({x:1420.1},0).wait(1).to({x:1318.4},0).wait(1).to({x:1216.8},0).wait(1).to({x:1115.1},0).wait(1).to({x:1013.4},0).wait(1).to({x:911.8},0).wait(1).to({x:810.2},0).wait(1).to({x:708.5},0).wait(1).to({x:682},0).wait(1).to({x:655.6},0).wait(1).to({x:629.2},0).wait(224));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(29,29,27,0)","rgba(25,25,23,0.129)","rgba(11,11,10,0.565)","rgba(2,2,2,0.82)","rgba(0,0,0,0.898)"],[0,0.047,0.271,0.537,1],0,234,0,-233.9).s().p("EhUXAkkMAAAhJHMCovAAAMAAABJHg");
	this.shape.setTransform(540,234);

	this.instance_3 = new lib.Travelstateofmind4_1920x1080();
	this.instance_3.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.shape}]}).wait(240));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(540,960,1973.7,1920);
// library properties:
lib.properties = {
	width: 1080,
	height: 1920,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/369209 May Campaign_UK_ANIMATION_atlas_.png", id:"369209 May Campaign_UK_ANIMATION_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;