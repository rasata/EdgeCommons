/**
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Additional Contributors:
 * Timm Jansen, Johannes Boyne
 *
 * Copyright (c) 2012 Simon Widjaja
 *
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Released under MIT license
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
 * OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Additional 3rd party libraries are used. For related credits and license models take a closer look at the affected library.
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * EdgeCommons uses:
 * - Adobe Edge API
 * - Modulog
 * - YepNope
 * - SoundJS (CreateJS)
 * --------------------------------------------------------------------------------------------------------------------------------------------------
 * Features:
 * #Core
 * - Comfortable Loggin and Config with Modulog
 * - Loading external Scripts and Style Sheets with YepNope
 * - Injecting Data
 * #Sound
 * - Load and play sounds with SoundJS (CreateJS)
 * #Preload
 * - PreloadJS (uses by SoundJS) (CreateJS)
 */// Input 0
(function(a){var c=function(){};c.VERSION="0.0.1";a.Modulog=c})(window);
(function(){var a=function(){};a.VERSION="0.0.1";a.LEVEL_NONE=0;a.LEVEL_ERROR=1;a.LEVEL_WARN=2;a.LEVEL_INFO=3;a.LEVEL_DEBUG=4;a.level=a.LEVEL_DEBUG;var c=null;a.addLogTarget=function(b){"function"===typeof b&&(c=b)};a.debug=function(b,a,d){ModulogLog.level>=ModulogLog.LEVEL_DEBUG&&(b="[ DEBUG "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.debug(b,d):console.debug(b)),ModulogLog.__delegate(b,d))};a.info=function(b,a,d){ModulogLog.level>=ModulogLog.LEVEL_INFO&&
(b="[ INFO "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.info(b,d):console.info(b)),ModulogLog.__delegate(b,d))};a.warn=function(b,a,d){ModulogLog.level>=ModulogLog.LEVEL_WARN&&(b="[ WARN "+(a?"| "+a+" ":"")+"] "+b,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.warn(b,d):console.warn(b)),ModulogLog.__delegate(b,d))};a.error=function(a,g,d){ModulogLog.level>=ModulogLog.LEVEL_ERROR&&(a="[ ERROR "+(g?"| "+g+" ":"")+"] "+
a,"undefined"!=typeof console&&"undefined"!=typeof console.log&&(d?console.error(a,d):console.error(a)),ModulogLog.__delegate(a,d))};a.__delegate=function(a,g){c&&(g?c(a+" : "+g.toString()):c(a))};window.Log=window.MLog=window.ModulogLog=a})(window.Modulog);
(function(){var a=function(){};a.VERSION="0.0.1";var c=null,b=ModulogLog;a.get=function(a){for(var b=a.split("."),e=c,f=0;f<b.length;f++){var h=b[f];e.hasOwnProperty(h)||ModulogLog.warn("Config value not found: "+a,"CONFIG");e=e[h]}return e};a.set=function(a,b){for(var e=a.split("."),f=c,h=0;h<e.length-1;h++)f=f[e[h]];f[e.pop()]=b};a.init=function(a,d){"string"===typeof a&&jQuery?$.getJSON(a,function(a){c=a;"function"===typeof d&&d()}):"object"===typeof a?c=a:b.error("Could not init config. init() function expects config object or url to config.js. Latter needs jQuery to be initialized before.",
"Modulog | ModulogConfig")};window.Config=window.MConfig=window.ModulogConfig=a})(window.Modulog);
// Input 1
(function(a){var c=function(){};c.VERSION="0.0.2";a.EC=a.EdgeCommons=c})(window);
// Input 2
(function(a){var c=function(){};c.VERSION="0.0.2";var b=ModulogLog;a.loadScript=function(a,c){b.debug("loadScript: "+a,"EdgeCommons | Core");try{yepnope({load:a,callback:function(e){e==a&&(b.debug("Loading external script was successful: "+a,"EdgeCommons | Core"),"function"===typeof c&&c())}})}catch(e){b.error("Loading external script failed: "+a,"EdgeCommons | Core")}};a.getInjectedData=function(a,c){try{c=c||"data";for((!a||!a.getParentSymbol)&&b.error("getInjectedData(): First argument 'sys' is not optional",
"EdgeCommons | Core");a.getParentSymbol();)a=a.getParentSymbol();var e=a.getSymbolElement().find("."+c).html();return $.parseJSON(e)}catch(f){b.error("Reading injected data failed (scriptClassSelector="+c+")","EdgeCommons | Core",f)}};a.Core=c;a.Log=b;a.debug=b.debug;a.info=b.info;a.warn=b.warn;a.error=b.error;b.debug("v"+c.VERSION,"EdgeCommons | Core")})(EdgeCommons);
// Input 3
(function(a){var c=function(){};c.VERSION="0.0.1";c.preloader=null;var b=ModulogLog;c.setup=function(g){try{c.preloader?g():a.loadScript("http://code.createjs.com/preloadjs-0.1.0.min.js",function(){c.preloader=new PreloadJS;g()})}catch(d){b.error("Error in setup(): "+d.toString(),"EdgeCommons | Preload",d)}};a.Preload=c;b.debug("v"+c.VERSION,"EdgeCommons | Preload")})(EdgeCommons);
// Input 4
(function(a){var c=function(){};c.VERSION="0.0.1";c.soundManifest=null;var b=ModulogLog;c.setup=function(g,d){try{if(g){this.soundManifest=g;var e=function(){a.Preload.preloader.installPlugin(SoundJS);a.Preload.preloader.onFileLoad=function(){b.debug("onFileLoad","EdgeCommons | Sound")};a.Preload.preloader.onComplete=function(){b.debug("onComplete","EdgeCommons | Sound")};b.debug("Loading Sound Manifest","DEBUG",c.soundManifest);a.Preload.preloader.loadManifest(c.soundManifest,!0);d&&d()};a.Preload.preloader?
a.loadScript("http://code.createjs.com/soundjs-0.2.0.min.js",e):a.Preload.setup(function(){a.loadScript("http://code.createjs.com/soundjs-0.2.0.min.js",e)})}else b.error("Sound.setup() failed: manifest argument is not optional","EdgeCommons | Sound")}catch(f){b.error("Error in setup(): "+f.toString(),"EdgeCommons | Sound",f)}};c.play=function(a,c){if(SoundJS.checkPlugin(!0)){b.debug("Playing sound: "+a,"EdgeCommons | Sound");var e=SoundJS.play(a,SoundJS.INTERRUPT_NONE,0,0,!1,1);e&&(e.onComplete=c)}else b.error("Error in SoundJS (SoundJS.checkPlugin(true) failed)",
"EdgeCommons | Sound")};a.Sound=c;b.debug("v"+c.VERSION,"EdgeCommons | Sound")})(EdgeCommons);