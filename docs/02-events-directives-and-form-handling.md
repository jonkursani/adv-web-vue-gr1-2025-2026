# Lesson 02 - Events, Directives, and Form Handling

## What We Added

In this lesson, we significantly expanded the App.vue component to cover Vue's event system, conditional rendering, and form handling. This builds on the reactive ref system we learned in Lesson 01.

## New Concepts

### 1. JavaScript Expressions in Templates

We learned that Vue templates can evaluate JavaScript expressions:

```vue
{{ 1 + 1 }}                                    <!-- Math: 2 -->
{{ msg.split('').reverse().join('') }}         <!-- String manipulation -->
{{ isBtnDisabled ? 'Button is disabled' : 'Button is enabled' }}  <!-- Ternary operator -->
```

### 2. Functions and Method Calls

We added several functions in the `<script setup>` section:

- **`reverseMsg()`** - Returns the message reversed. Shows how to use `msg.value` in script context (needed because it's a ref)
- **`toggleText()`** - Toggles the `seen` boolean to show/hide elements
- **`changeText(newText)`** - Updates the `seenText` with a new value
- **`confirmName(event)`** - Captures the input value from a text field
- **`onSubmit()`** - Handles form submission

### 3. Vue Directives

Directives are special attributes with the `v-` prefix that tell Vue to do something to a DOM element.

#### v-if and v-else

```vue
<p v-if="seen">{{ seenText }}</p>
<p v-else>Now you don't</p>
```

This renders one paragraph or the other based on the `seen` boolean value.

#### Event Handling with @click

```vue
<button @click="toggleText">{{ seen ? 'Hide' : 'Show' }} text</button>
<button @click="changeText('Yeyyy we learned Vue!')">Change Text</button>
```

- `@click` is shorthand for `v-on:click`
- It calls the function when the button is clicked
- The button text itself is dynamic using a ternary expression

### 4. Event Modifiers

Event modifiers are special suffixes that modify how events are handled:

- **`.prevent`** - Prevents the default behavior (like form submission)
- **`.enter`** - Only triggers the event when the Enter key is pressed

```vue
<input type="text" placeholder="Enter name..." @keyup.enter="confirmName">
<form @submit.prevent="onSubmit">
  <button>Submit</button>
</form>
```

### 5. Dynamic Attribute Binding with Template Literals

We learned how to create dynamic IDs using template literal syntax:

```vue
<p :id="`emp-${id}`">Employee #{{ id }}</p>
```

When `id` is 2, this renders: `<p id="emp-2">Employee #2</p>`

### 6. Two-Way Thinking About Reactivity

A key lesson: In the `<script>` section, use `ref.value` to access and modify reactive values, but in templates, Vue automatically unwraps refs, so you just use the name directly:

```javascript
// Script
msg.value.split('').reverse().join('')

// Template
{{ msg }}  <!-- No .value needed -->
```

## Current App Features

Our app now demonstrates:

- ✅ Reactive state with multiple refs
- ✅ Template expressions and ternary operators
- ✅ Conditional rendering (v-if/v-else)
- ✅ Event handling (@click, @keyup, @submit)
- ✅ Event modifiers (.prevent, .enter)
- ✅ Dynamic attribute binding
- ✅ Form input capturing
- ✅ Function calls from templates

## Key Takeaways

1. Vue directives (`v-if`, `v-on`, etc.) are more declarative than vanilla JavaScript
2. Event modifiers simplify common event handling patterns
3. The `@` symbol is shorthand for `v-on:`
4. Refs need `.value` in scripts but not in templates
5. Template expressions can include full JavaScript logic, but should stay simple for readability
