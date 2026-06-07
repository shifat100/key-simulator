
# DOM Keyboard Event Simulator ⌨️

A lightweight, vanilla JavaScript utility for simulating realistic keyboard events in the browser. This script allows you to dispatch programmatic `keydown` and `keyup` events, including support for modifier keys (Ctrl, Shift, Alt, Meta). It also features a "Natural Press" simulator that mimics human typing behavior by introducing a randomized millisecond delay between keydown and keyup events.

Perfect for automated UI testing, custom macro scripting, browser automation, and accessibility tooling.

## ✨ Features

*   **Granular Control**: Dispatch `keydown` and `keyup` events independently.
*   **Human-like Typing**: The `simulateNaturalPress` function introduces a realistic, randomized delay (70ms - 100ms) to bypass basic bot-detection or mimic actual user behavior.
*   **Modifier Key Support**: Easily simulate complex combinations like `Ctrl + C` or `Ctrl + Shift + S`.
*   **Smart Targeting**: Automatically dispatches events to the currently focused element (`document.activeElement`), falling back to `document.body`.
*   **Zero Dependencies**: Pure vanilla JavaScript.

## 🚀 Usage

Simply include the functions in your project and call them as needed. 

```javascript
<script src="https://shifat100.github.io/key-simulator/Keysim-min.js"></script>
```

### Basic Natural Key Press
Simulates a complete key press (down -> wait 70-100ms -> up).

```javascript
// Press the 'Enter' key
simulateNaturalPress('Enter', 13);
```
-----
```javascript
window.addEventListener('back', (event) => {
  event.preventDefault();
 simulateNaturalPress('SoftRight', 0);
});
```
### With Modifier Keys
You can easily pass an `options` object to simulate modifier keys (`ctrl`, `shift`, `alt`, `meta`).

```javascript
// Simulate 'Ctrl + C' (Copy)
simulateNaturalPress('c', 67, { ctrl: true });

// Simulate 'Shift + A' (Capital A)
simulateNaturalPress('a', 65, { shift: true });

// Simulate 'Ctrl + Shift + S' (Save As)
simulateNaturalPress('s', 83, { ctrl: true, shift: true });
```

## 📚 API Reference

### `simulateKeyDown(key, keyCode, [options])`
Simulates only the initial depression of a key.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | The string representation of the key (e.g., `'a'`, `'Enter'`). |
| `keyCode` | `number` | The numeric key code corresponding to the key (e.g., `65`, `13`). |
| `options` | `Object` | *(Optional)* Object containing boolean flags for modifier keys. |

### `simulateKeyUp(key, keyCode, [options])`
Simulates only the release of a key.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | The string representation of the key. |
| `keyCode` | `number` | The numeric key code corresponding to the key. |
| `options` | `Object` | *(Optional)* Object containing boolean flags for modifier keys. |

### `simulateNaturalPress(key, keyCode, [options])`
Simulates a full human keypress sequence. Triggers `simulateKeyDown`, waits for a random duration between 70ms and 100ms, and then triggers `simulateKeyUp`.

| Parameter | Type | Description |
| :--- | :--- | :--- |
| `key` | `string` | The string representation of the key. |
| `keyCode` | `number` | The numeric key code corresponding to the key. |
| `options` | `Object` | *(Optional)* Object containing boolean flags for modifier keys. |

#### ⚙️ The `options` Object Properties
The functions accept an optional `options` object to trigger keyboard modifiers. All default to `false`.

```javascript
{
    ctrl: boolean,  // Control key
    shift: boolean, // Shift key
    alt: boolean,   // Alt / Option key
    meta: boolean   // Windows / Command key
}
```

## ⚠️ Important Browser Security Note

Due to standard browser security restrictions, **programmatically dispatched keyboard events cannot trigger default browser actions** that are reserved for trusted user interactions. 

For example, while `simulateNaturalPress('c', 67, { ctrl: true })` will successfully fire the event listeners on your DOM elements so your JavaScript can react to it, it *will not* actually copy text to the user's operating system clipboard.

## 📄 License

This project is licensed under the MIT License - feel free to modify and use it in your personal or commercial projects.
