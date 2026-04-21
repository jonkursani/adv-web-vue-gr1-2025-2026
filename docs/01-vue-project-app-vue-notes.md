# Lesson 01 - Vue Project and App.vue Basics

## Project Overview

We created a small Vue 3 project using Vite. The app is currently very simple and is focused on learning the basic structure of a Vue Single File Component and how reactive data works.

The app entry point is [src/main.js](src/main.js). It imports the root component and mounts it into the `#app` element in the page.

## What We Did In App.vue

The main work so far is in [src/App.vue](src/App.vue). This file is a Single File Component, which means it is split into three main parts:

1. `<script setup>` for JavaScript logic
2. `<template>` for HTML markup
3. `<style scoped>` for component styles

### Script Logic

Inside the script section, we imported `ref` from Vue and created reactive values:

- `msg` stores the message shown in the heading
- `url` stores the link to the Vue documentation
- `isBtnDisabled` controls whether the button is disabled

This lets the template react to changes in the data without touching the DOM directly.

### Template Logic

The template demonstrates a few core Vue concepts:

- `{{ msg }}` uses interpolation to display the reactive message
- `:href="url"` binds the link address dynamically
- `:disabled="isBtnDisabled"` binds the disabled state of the button

We also used `target="_blank"` and `rel="noopener"` on the link so it opens safely in a new tab.

## Key Concepts Learned

- Vue components can be written as one `.vue` file
- `ref()` is used to create reactive state
- Template interpolation displays reactive values
- Attribute binding connects JavaScript data to HTML attributes
- A scoped style block is ready for component-specific CSS, even if it is empty for now

## Current Result

At this point, the app shows:

- a heading with the message `You did it!`
- a link to the Vue documentation
- a button that is currently disabled

This gives us a clean starting point for adding more Vue examples and lessons later.