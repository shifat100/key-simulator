/*!
 * DOM Keyboard Event Simulator v1.0.0
 * A lightweight utility for simulating realistic keyboard events in the browser.
 * 
 * Copyright (c) 2026 [shifat100]
 * Released under the MIT License.
 */

/**
 * 1. Function to simulate only the Key Down event.
 * @param {string} key - The name of the key (e.g., 'c', 'Enter').
 * @param {number} keyCode - The code of the key (e.g., 67, 13).
 * @param {Object} options - Optional modifiers (e.g., { ctrl: true, shift: true }).
 */
function simulateKeyDown(key, keyCode, options = {}) {
    const target = document.activeElement || document.body;

    const eventOptions = {
        key: key,
        code: key,
        keyCode: keyCode,
        which: keyCode,
        bubbles: true,
        cancelable: true,
        view: window,
        // Mapping simple option names to KeyboardEvent properties
        ctrlKey: options.ctrl || false,   // Handle Control key
        shiftKey: options.shift || false, // Handle Shift key
        altKey: options.alt || false,     // Handle Alt key
        metaKey: options.meta || false    // Handle Windows/Command key
    };

    const downEvent = new KeyboardEvent('keydown', eventOptions);
    target.dispatchEvent(downEvent);
    
    console.log(`Key Down: ${key}, Options:`, options);
}

/**
 * 2. Function to simulate only the Key Up event.
 * @param {string} key - The name of the key.
 * @param {number} keyCode - The code of the key.
 * @param {Object} options - Optional modifiers.
 */
function simulateKeyUp(key, keyCode, options = {}) {
    const target = document.activeElement || document.body;

    const eventOptions = {
        key: key,
        code: key,
        keyCode: keyCode,
        which: keyCode,
        bubbles: true,
        cancelable: true,
        view: window,
        ctrlKey: options.ctrl || false,
        shiftKey: options.shift || false,
        altKey: options.alt || false,
        metaKey: options.meta || false
    };

    const upEvent = new KeyboardEvent('keyup', eventOptions);
    target.dispatchEvent(upEvent);
    console.log(`Key Up: ${key}`);
}

/**
 * 3. Function to simulate a Natural Press (Press down -> Wait 70-100ms -> Release).
 * @param {string} key - The name of the key.
 * @param {number} keyCode - The code of the key.
 * @param {Object} options - Optional modifiers (e.g., { ctrl: true }).
 */
function simulateNaturalPress(key, keyCode, options = {}) {
    // 1. Trigger Key Down
    simulateKeyDown(key, keyCode, options);

    // 2. Calculate random delay between 70ms and 100ms
    const randomDelay = Math.floor(Math.random() * (100 - 70 + 1) + 70);

    // 3. Trigger Key Up after the delay
    setTimeout(() => {
        simulateKeyUp(key, keyCode, options);
        console.log(`Natural Press Completed: ${key} (Duration: ${randomDelay}ms)`);
    }, randomDelay);
}

// === USAGE EXAMPLES ===

// Example 1: Press 'Enter' normally (no options)
// simulateNaturalPress('Enter', 13);

// Example 2: Press 'Ctrl + C' (Copy simulation)
// simulateNaturalPress('c', 67, { ctrl: true });

// Example 3: Press 'Shift + A' (Capital letter simulation)
// simulateNaturalPress('a', 65, { shift: true });

// Example 4: Press 'Ctrl + Shift + S' (Save As simulation)
// simulateNaturalPress('s', 83, { ctrl: true, shift: true });
