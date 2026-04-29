# Lesson 04 - New Concepts: Styling, Advanced Conditionals

## What's New

This lesson covers new Vue features added to [src/App.vue](src/App.vue):

- Style binding with inline styles
- Array-based class binding
- Advanced conditional rendering (`v-else-if`, `v-show`, `<template>`)
- Component imports and usage

## Style Binding with `:style`

### Inline style object

We learned to bind CSS styles directly using the `:style` directive with JavaScript object syntax:

```vue
<p :style="{ color: blueColor, textTransform: uppercase }">
  Binding inline styles example
</p>
```

Key points:
- CSS property names use camelCase in JavaScript (`textTransform` instead of `text-transform`)
- Values can be reactive refs
- Expressions are evaluated in real-time

### Style object binding

We can also bind to a reactive object containing styles:

```vue
<p :style="styleObject">
  Binding to style object example
</p>
```

Where `styleObject` is defined in script:

```javascript
const styleObject = reactive({
  color: 'green',
  fontSize: '20px'  // camelCase required
})
```

This is useful for keeping complex style logic out of templates.

## Array-Based Class Binding

We expanded class binding to use arrays:

```vue
<!-- Simple array of class names -->
<p :class="['active', 'text-danger', isCompleted ? 'completed' : '']">
  Binding to array example
</p>
```

### Mixing classes and conditionals in arrays

Arrays can combine static strings and conditional objects:

```vue
<p :class="['klasa-tjeter', { completed: isCompleted }]">
  Binding to array with object example
</p>
```

This is more readable when you have many classes or complex conditions.

## Advanced Conditional Rendering

### v-else-if

We learned to chain multiple conditions:

```vue
<p v-if="type === 'A'">
  Type A
</p>
<p v-else-if="type === 'B'">
  Type B
</p>
<p v-else>
  Other type
</p>
```

This replaces the need for nested if/else statements in templates.

### Template tag for grouping

The `<template>` tag allows grouping multiple elements under a single condition without adding an extra wrapper element to the DOM:

```vue
<template v-if="ok">
  <h1>Template</h1>
  <p>This is a simple template</p>
</template>
```

Result: Only the `<h1>` and `<p>` are added to the DOM, not a wrapper.

### v-show vs v-if

We added the `v-show` directive, which differs from `v-if`:

```vue
<p v-show="ok">V-show</p>
```

**Differences:**

| Feature | v-if | v-show |
|---------|------|--------|
| Removes from DOM | Yes | No (uses CSS display) |
| Performance | Better for infrequent toggles | Better for frequent toggles |
| Works with `<template>` | Yes | No |
| Supports `v-else` | Yes | No |

Use `v-show` for elements that toggle frequently, and `v-if` when removing from DOM is preferred.

## Component Imports and Usage

We added our first imported component:

```javascript
import Detyra1 from './Detyra1.vue';
```

And used it in the template:

```vue
<Detyra1 />
```

This demonstrates:
- Single File Components can be imported as modules
- Components are registered automatically in `<script setup>`
- Component tags use PascalCase naming convention
- Self-closing tags work for components with no slot content

## Summary

In this lesson, we learned:

✅ Inline style binding with `:style`  
✅ Array-based and mixed class binding  
✅ `v-else-if` for chained conditions  
✅ `<template>` for non-DOM-rendering grouping  
✅ `v-show` as an alternative to `v-if`  
✅ How to import and use child components  

These tools make templates more expressive and enable building reusable component-based UIs.
