requirejs(["helper/util", "helper/config"], function(util, config){
	alert(config.getInfo());
	alert(util.color);
	alert(util.name);
});