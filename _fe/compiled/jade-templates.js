define(['jade'], function(jade) { if(jade && jade['runtime'] !== undefined) { jade = jade.runtime; }

this["JST"] = this["JST"] || {};

this["JST"]["hackableTile"] = function anonymous(locals) {
var buf = [];
buf.push("<button class=\"hack\">Edit</button><button class=\"save\">Save</button><textarea></textarea><div class=\"hacked-content\"></div>");;return buf.join("");
};

this["JST"]["stats"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),popcornMakes = locals_.popcornMakes,thimbleMakes = locals_.thimbleMakes;buf.push("<section class=\"stats\"><ul><li>" + (jade.escape((jade.interp = popcornMakes) == null ? '' : jade.interp)) + " Popcorn Makes</li><li>" + (jade.escape((jade.interp = thimbleMakes) == null ? '' : jade.interp)) + " Thimble Makes</li></ul></section>");;return buf.join("");
};

this["JST"]["tileContainer"] = function anonymous(locals) {
var buf = [];
buf.push("<ul class=\"tiles\"><li class=\"grid-sizer\"></li></ul>");;return buf.join("");
};

this["JST"]["defaultTile"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),type = locals_.type,title = locals_.title,description = locals_.description;buf.push("<li" + (jade.attrs({ "class": [("tile " + (type) + "")] }, {"class":true})) + "><h3>" + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "</h3><p>" + (jade.escape((jade.interp = description) == null ? '' : jade.interp)) + "</p></li>");;return buf.join("");
};

this["JST"]["popcornTile"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),type = locals_.type,title = locals_.title,thumbnail = locals_.thumbnail,description = locals_.description;buf.push("<li" + (jade.attrs({ "class": [("tile " + (type) + "")] }, {"class":true})) + "><h3 class=\"handle title\">" + (jade.escape((jade.interp = title) == null ? '' : jade.interp)) + "</h3><img" + (jade.attrs({ 'src':("" + (thumbnail) + ""), "class": [('thumbnail')] }, {"src":true})) + "/><p class=\"description\">" + (jade.escape((jade.interp = description) == null ? '' : jade.interp)) + "</p></li>");;return buf.join("");
};

this["JST"]["header"] = function anonymous(locals) {
var buf = [];
var locals_ = (locals || {}),avatarSrc = locals_.avatarSrc,name = locals_.name,username = locals_.username;buf.push("<header><div class=\"avatar\"><img" + (jade.attrs({ 'src':(avatarSrc) }, {"src":true})) + "/></div><div class=\"meta\"><h1 class=\"full-name\">" + (jade.escape((jade.interp = name) == null ? '' : jade.interp)) + "</h1><h2 class=\"username\">" + (jade.escape((jade.interp = username) == null ? '' : jade.interp)) + "</h2></div><button id=\"add-tile\" class=\"button\"><span class=\"icon-plus\"></span></button></header>");;return buf.join("");
};

return this["JST"];

});