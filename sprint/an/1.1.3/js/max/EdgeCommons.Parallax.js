// EdgeCommons for Edge Animate v1.1.3 +++ Visit edgecommons.org for documentation, updates and examples +++ Copyright (c) 2013 by Simon Widjaja +++ Distributed under the terms of the MIT license (http://www.opensource.org/licenses/mit-license.html) +++ This notice shall be included in all copies or substantial portions of the Software.

/*
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge Animate
 * by Simon Widjaja
 *
 * Additional Contributors:
 * Timm Jansen, Johannes Boyne
 *
 * Copyright (c) 2013 Simon Widjaja
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
 * - Advanced Logging and Config with Modulog
 * - Loading external Scripts and Style Sheets with YepNope
 * - Injecting Data
 * #Sound
 * - Load and play sounds with SoundJS (CreateJS)
 * #Preload
 * - PreloadJS (uses by SoundJS) (CreateJS)
 */

/**
TODO: DESCRIPTION FOR MASTER

@module EdgeCommons
**/
(function (window, $) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var EdgeCommons = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    EdgeCommons.VERSION = "1.1.3";
    EdgeCommons.$ = $;

    //------------------------------------
    // Private
    //------------------------------------
    var LOG_GROUP = "EdgeCommons";

    //------------------------------------
    // Methods
    //------------------------------------

    //------------------------------------
    // Init
    //------------------------------------
    window.EC = window.EdgeCommons = EdgeCommons;
    //Log.debug("v" + VERSION, LOG_GROUP);

})(window, jQuery);
;/**
 * EdgeCommons
 * Dirty little Helpers for Adobe Edge
 * by Simon Widjaja
 *
 * Copyright (c) 2013 Simon Widjaja
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
 */

/**
 * Module: Parallax
 *
 * Horizontal Parallax by Jacques Letesson
 */

/**
Parallax Scrolling for Edge Animate
@module EdgeCommons
@submodule Parallax
@main EdgeCommons
@class Parallax
**/
(function (EC) {
    //------------------------------------
    // Constructor
    //------------------------------------
    var C = function () {
    };

    //------------------------------------
    // Public
    //------------------------------------
    C.VERSION = "1.1.0";
    C.compositions = {};
    
    //------------------------------------
    // Private
    //------------------------------------
    // jQuery
    var $ = EC.$;
    // Logger
    var Log = ModulogLog;
    var LOG_GROUP = "EdgeCommons | Parallax";

    //------------------------------------
    // Methods
    //------------------------------------
    /**
     * Add composition to parallax watcher
     */
    C.addComposition = function(compId) {
      
      console.log("HIDE NOT CALC: ", AdobeEdge.getComposition(compId).getStage().getSymbolElement().height());
      
      // TEST
      AdobeEdge.Symbol.bindSymbolAction("EDGE-55243610", "mySym", "creationComplete", function(sym, e) { consoel.log("XXXXXXXXXXX"); });
      AdobeEdge.Symbol.bindSymbolAction("EDGE-55243610", "stage", "compositionReady", function(sym, e) { consoel.log("compositionReady"); });
      
      AdobeEdge.bootstrapCallback(function(compId) {
        //console.log("bootstrapped: ", compId, AdobeEdge.getComposition(compId).getStage().getSymbolElement().height());
        //setTimeout(function() { console.log("bootstrapped: ", compId, AdobeEdge.getComposition(compId).getStage().getSymbolElement().height()); }, 1);
        console.log(compId);
        EC.debug("bootstrap", "BOOT", {stageHeight: AdobeEdge.getComposition(compId).getStage().getSymbolElement().height()});
        AdobeEdge.Symbol.bindSymbolAction(compId, "stage", "creationComplete", function(sym, e) { EC.debug("stage::creationcomplete", "BOOT"); });
        AdobeEdge.Symbol.bindSymbolAction(compId, "stage", "compositionReady", function(sym, e) { EC.debug("stage::compositionReady", "BOOT"); });
        AdobeEdge.Symbol.bindSymbolAction(compId, "mySym", "beforeDeletion", function(sym, e) { EC.debug("mySym::beforeDeletion", "BOOT"); });
        
        
      });
      
      
        // calculate static composition values
        this.compositions[compId] = {};
        var stage = AdobeEdge.getComposition(compId).getStage();
        this.compositions[compId].stage = stage;
        var stageElement = AdobeEdge.getComposition(compId).getStage().getSymbolElement();
      console.log( "AdobeEdge.getComposition(compId).getStage()", AdobeEdge.getComposition(compId).getStage() );
        this.compositions[compId].stageElement = stageElement;
        var stageHeight = stageElement.height();
      console.log( "stageElement", stageElement );
      setTimeout(function() {
        console.log( stageElement.height() );
        stageHeight = stageElement.height();
      }, 1);
      console.log( "stage.height", stageElement.height() );
		var stageWidth = stageElement.width();
        this.compositions[compId].stageHeight = stageHeight;
        this.compositions[compId].stageWidth = stageWidth;
        var stageTop = stageElement.position().top;
        this.compositions[compId].stageTop = stageTop;
        this.compositions[compId].stageMiddle = Math.floor( (stageTop + stageHeight/2) );        
        this.compositions[compId].duration = stage.getDuration();
        
        // Stop timeline (override autoplay)
        stage.stop(0);
    }
        
    /**
    Setup Parallax Scrolling for a specific composition

        // e.g. in compositionReady event
        EC.Parallax.setup( sym );

    @method setup
    @param sym {Symbol} A Symbol within the affected composition  
    @param scrollType {String} A string to define the type of scroll : vertical (default) or horizontal
    **/           
    C.setup = function(sym, scrollType) {
        // Check arguments 
        if (!sym) {
            Log.error( "Error in setup(). Argument 'sym' is not optional.", LOG_GROUP );
            return;
        }
        if(scrollType===undefined){
			scrollType = "vertical";
		}
        // Add composition to list (currently only one composition is supported)
        this.addComposition( sym.getComposition().compId );
        
        // Add listener for scroll event on document
        //var throttleIndex = throttleIndexInitial = 2;
      
        // DEBUG TEST
        console.log("window.height", $(window).height());
      
        $( document ).scroll( function() {
            // Throttle (disabled)
            //if (throttleIndex != 0) {
            //    throttleIndex--;
            //    return;
            //}
            //throttleIndex = throttleIndexInitial;
			if (scrollType == "vertical") {
				var scrollPos = $(document).scrollTop();
				scrollVertical();
			} else if (scrollType == "horizontal") {
				var scrollPos = $(document).scrollLeft();
				scrollHorizontal()
			}
            
    
            // Update all compositions
            function scrollVertical(){
              
              
              
              
              
	        	$.each( EC.Parallax.compositions, function(compId, c) {
                  
                  
                  // DEBUG TEST
                  var scrollbarFactor = scrollPos / ( c.stageHeight - $(window).height() );
                  console.log("c.stageHeight", c.stageHeight);
                  console.log("scrollbarFactor", scrollbarFactor);
                      //-c.stageHeight + $(window).height();  // extreme top value

                  
                  /*
                    // Calculate new playhead position
	                var percentage = scrollPos / ( c.stageHeight - $(window).height() );
                    console.log("percentage", percentage);
	                var playheadPos = Math.floor( percentage * c.duration );
	                c.stage.stop( playheadPos );
                  */
				});  
            }
            
            function scrollHorizontal(){
	        	$.each( EC.Parallax.compositions, function(compId, c) {
	                // Calculate new playhead position
	                var percentage = scrollPos / ( c.stageWidth - $(window).width() );
	                var playheadPos = Math.floor( percentage * c.duration );
	                c.stage.stop( playheadPos );
				});   
            }
        });
    }

    //------------------------------------
    // Init
    //------------------------------------
    EC.Parallax = C;
    //Log.debug("v" + C.VERSION, LOG_GROUP);

})(EdgeCommons);