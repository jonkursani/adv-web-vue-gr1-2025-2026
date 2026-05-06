# Lesson 05 - List Rendering and Form Input Bindings

## What We Learned Next

This lesson adds two big Vue topics to [src/App.vue](src/App.vue):

- List rendering with `v-for`
- Two-way form bindings with `v-model`

## List Rendering with `v-for`

We added list rendering to show how Vue can repeat elements from an array.

### Simple numeric loop

```vue
<ul>
  <li v-for="n in 5">{{ n }}</li>
</ul>
```

This is a simple example of looping a fixed number of times.

### Looping over arrays of objects

The `author.books` array was changed to store objects instead of strings:

```javascript
const author = reactive({
  name: 'John Doe',
  books: [
    { title: 'Book 1', year: 2020 },
    { title: 'Book 2', year: 2021 },
    { title: 'Book 3', year: 2022 }
  ]
})
```

That lets us render structured data with destructuring:

```vue
<template v-for="({ title, year }, index) in author.books" :key="index">
  <li>{{ index }}. {{ title }} - ({{ year }})</li>
  <hr>
</template>
```

### Key points about `v-for`

- `v-for` repeats an element for each item in an array
- `:key` should be unique when possible
- `<template>` can be used to group repeated elements without adding an extra DOM wrapper
- We should avoid putting `v-if` and `v-for` on the same element because `v-if` has higher priority

### Rendering object properties

We also learned that `v-for` can loop through object properties:

```vue
<li v-for="(vlera, celsi, indeksi) in user">
  {{ indeksi }}. {{ celsi }}: {{ vlera }}
</li>
```

This shows:

- `vlera` = the value
- `celsi` = the key
- `indeksi` = the index of the iteration

## Form Input Bindings with `v-model`

We introduced two-way binding so form inputs automatically stay in sync with reactive state.

### Text input

```vue
<input type="text" v-model="text">
<p>Text: {{ text }}</p>
```

### Textarea

```vue
<textarea v-model="textArea"></textarea>
<p>Text area: {{ textArea }}</p>
```

### Checkbox

```vue
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">Check me</label>
<p>Checked: {{ checked }}</p>
```

### Multiple checkboxes

```vue
<input type="checkbox" id="vue" value="vue" v-model="checkedNames">
<input type="checkbox" id="react" value="react" v-model="checkedNames">
<input type="checkbox" id="angular" value="angular" v-model="checkedNames">
<p>Checked names: {{ checkedNames }}</p>
```

This stores selected values in an array.

### Radio buttons

```vue
<input type="radio" id="one" value="one" v-model="picked">
<input type="radio" id="two" value="two" v-model="picked">
<p>Picked: {{ picked }}</p>
```

Radio buttons share one bound value.

### Select dropdown

```vue
<select v-model="selected">
  <option value="" disabled>Select an option</option>
  <option v-for="option in options" :value="option.value">
    {{ option.text }}
  </option>
</select>
<p>Selected: {{ selected }}</p>
```

The `options` array provides the dropdown values and labels dynamically.

## Why This Matters

These additions show how Vue handles real UI data:

- `v-for` helps display lists from arrays or objects
- `v-model` keeps form state synchronized automatically
- Both features reduce manual DOM handling and keep the template declarative

## Summary

In this lesson we learned:

- Repeating UI with `v-for`
- Using `:key` in repeated lists
- Rendering object arrays with destructuring
- Looping through object properties
- Binding text inputs, textareas, checkboxes, radios, and selects with `v-model`
