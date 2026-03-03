/*!
 * DOM Keyboard Event Simulator v1.0.0
 * A lightweight utility for simulating realistic keyboard events in the browser.
 * 
 * Copyright (c) 2026 [shifat100]
 * Released under the MIT License.
 */
function simulateKeyDown(e,t,n={}){const a=document.activeElement||document.body,o={key:e,code:e,keyCode:t,which:t,bubbles:!0,cancelable:!0,view:window,ctrlKey:n.ctrl||!1,shiftKey:n.shift||!1,altKey:n.alt||!1,metaKey:n.meta||!1},c=new KeyboardEvent("keydown",o);a.dispatchEvent(c)}function simulateKeyUp(e,t,n={}){const a=document.activeElement||document.body,o={key:e,code:e,keyCode:t,which:t,bubbles:!0,cancelable:!0,view:window,ctrlKey:n.ctrl||!1,shiftKey:n.shift||!1,altKey:n.alt||!1,metaKey:n.meta||!1},c=new KeyboardEvent("keyup",o);a.dispatchEvent(c)}function simulateNaturalPress(e,t,n={}){simulateKeyDown(e,t,n);const a=Math.floor(31*Math.random()+70);setTimeout((()=>{simulateKeyUp(e,t,n)}),a)}