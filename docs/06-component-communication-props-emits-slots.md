# Lesson 06 - Component Communication: Props, Emits, and Slots

## What We Learned Next

This lesson focuses on how components communicate with each other in Vue. We added two new child components and learned:

- How to pass data from parent to child with **props**
- How to send data from child to parent with **emits**
- How to add flexible content to components with **slots**

## Importing Components

We imported two new local components at the top of the script:

```javascript
import MyComponent from './MyComponent.vue';
import UserForm from './UserForm.vue';
```

Components are registered automatically in `<script setup>` and can be used as HTML-like tags in templates.

## Props: Passing Data to Child Components

Props allow a parent component to pass data down to a child component.

### Basic prop usage

```vue
<MyComponent 
  :post="{
    title: 'Post Title',
    content: 'This is the content of the post.',
    views: 200
  }"
/>
```

In this example, we pass an object as a prop called `post` to the `MyComponent` component. The `:` indicates the value is a JavaScript expression (binding).

### Passing different data

```vue
<UserForm is-edit />
```

This passes a boolean prop `is-edit` that can be used to show different UI (add mode vs edit mode).

## Emits: Sending Data from Child to Parent

Child components emit events to send data back to the parent. The parent listens with `@event-name`.

### Listening for emit events

```vue
<MyComponent 
  :post="{ ... }"
  @on-click-like="handleLike"
/>
```

The `@on-click-like` directive listens for an event emitted by `MyComponent`. When it fires, it calls the `handleLike` function.

### Handler function

```javascript
function handleLike(vleraNgaChild) {
  alert(vleraNgaChild);
}
```

The parent receives the data sent by the child and can use it.

### Another emit example

```vue
<UserForm @on-submit="handleSubmit" />
```

```javascript
function handleSubmit(userData) {
  alert(`Submitted user: ${userData.name} with email: ${userData.email}`);
}
```

When `UserForm` emits `on-submit`, it sends `userData` which the parent can use immediately.

## Slots: Adding Flexible Content to Components

Slots allow a parent to pass HTML content into a child component.

### Default slot

```vue
<MyComponent :post="{ ... }">
  <p>This is some additional content passed from the parent component.</p>
</MyComponent>
```

In the child component, this content would appear where there's a `<slot>` tag.

### Named slots

```vue
<MyComponent :post="{ ... }">
  <p>Default slot content here.</p>

  <template #button>
    <button>Subscribe</button>
  </template>
</MyComponent>
```

The `#button` syntax (shorthand for `v-slot:button`) targets a specific named slot. The child component uses `<slot name="button">` to place this content.

### How slots work

- A child can define `<slot></slot>` to accept default content
- A child can define `<slot name="name"></slot>` for named slots
- The parent uses `<template #name>` to pass content to specific slots
- If a slot has no content passed from parent, it shows default content (if any)

## Summary of Component Communication

| Concept | Direction | Purpose |
|---------|-----------|---------|
| **Props** | Parent → Child | Pass data and configuration down |
| **Emits** | Child → Parent | Send events and data up |
| **Slots** | Parent → Child | Pass flexible HTML content down |

Together, these create a parent-child communication pattern:

1. Parent passes data to child via props
2. Child uses props to configure its appearance/behavior
3. Child emits events when user interacts with it
4. Parent listens and responds to child events
5. Parent can pass flexible content to child via slots

This makes components reusable and composable, enabling you to build complex UIs from small building blocks.
