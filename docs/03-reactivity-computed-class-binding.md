# Lesson 03 - App.vue (Reactivity computed properties, class binding)

## Overview

Until now, the project has evolved from a basic Vue starter into a teaching component that demonstrates core Vue 3 concepts inside a single file: [src/App.vue](src/App.vue).

The component currently includes:

- Reactive state with `ref()` and `reactive()`
- Event handling and event modifiers
- Conditional rendering with directives
- Computed properties
- Dynamic class binding
- Basic scoped component styling

## Imports and Setup

In the script section, we now import:

- `ref` for primitive or reference reactive values
- `reactive` for reactive objects
- `computed` for derived reactive values

## State and Reactivity

### Ref-based state

We added multiple `ref` values such as:

- `msg`, `url`, `isBtnDisabled`, `id`
- `seen`, `seenText`
- `confirmedName`
- `count`
- `userRef`
- `isActive`, `hasError`, `isCompleted`

This demonstrates that refs are used with `.value` in script logic, while templates unwrap refs automatically.

### Reactive object state

We also added `reactive` objects:

- `user`
- `state`
- `author`
- `classObject`

This shows object-based reactivity where properties are read/written directly in script (without `.value`).

## Functions Added

The following methods were added to support user interaction and logic:

- `reverseMsg()`
  - Demonstrates reading `msg.value` and reversing text
- `toggleText()`
  - Toggles visibility state
- `changeText(newText)`
  - Replaces visible text dynamically
- `confirmName(event)`
  - Reads user input value on Enter key
- `onSubmit()`
  - Handles form submit with prevention of default reload behavior
- `decrement(num)` and `increment(num)`
  - Update counter by custom step values
- `incrementReactive()`
  - Updates count stored in a `reactive` object

## Template Features Added

### Basic bindings and expressions

The template demonstrates:

- Interpolation with `{{ ... }}`
- Dynamic attributes like `:href` and dynamic `:id`
- Inline JavaScript expressions and ternary rendering

### Directives and events

We use:

- `v-if` and `v-else` for conditional rendering
- `@click` for button interactions
- `@keyup.enter` for key-specific input handling
- `@submit.prevent` for form submission without page refresh

### Counter examples

Two counter examples are now present:

- Ref counter using `count`
- Reactive-object counter using `state.count`

## Computed Properties

Two computed values were added:

- `hasPublishedBooks`
  - Derives a status string based on `author.books.length`
- `fullName`
  - Derives a formatted string from `user.name`

These show how to keep derived logic out of templates and make code cleaner.

## Class Binding

Class binding examples now include:

- Inline object syntax with `:class="{ active: isActive, 'text-danger': hasError }"`
- Reactive object class map with `classObject`
- Computed class object with `classObjComputed` driven by `isCompleted`

A toggle button switches `isCompleted` to demonstrate dynamic class changes.

## Scoped Styles Added

In the scoped style block, we added classes used by bindings:

- `.active`
- `.text-danger`
- `.completed`

Because styles are scoped, they apply only to this component.

## What This Lesson Achieved

At this stage, [src/App.vue](src/App.vue) acts as a mini Vue playground that combines:

- State management basics
- User event handling
- Conditional UI rendering
- Derived/computed data
- Dynamic styling patterns

This gives a strong foundation for next lessons like list rendering (`v-for`), `v-model`, component props, emits, and splitting code into reusable components.
