# Lesson 07 - Routing Basics and Navigation

## What We Learned Next

This lesson introduces Vue Router and replaces the old single-page component layout with route-based views.

The main idea is that the app now renders pages through the router instead of keeping everything inside one component.

## Router Setup

We installed `vue-router` and connected it in [src/main.js](src/main.js):

```javascript
createApp(App)
  .use(router)
  .mount('#app')
```

We also created the router instance in [src/router/index.js](src/router/index.js) using:

- `createRouter()`
- `createWebHistory()`

This is the standard setup for HTML5 history mode navigation.

## Router View

In [src/App.vue](src/App.vue), the app now uses:

```vue
<RouterView />
```

`RouterView` is where the currently matched page component is displayed.

## Route Configuration

We created multiple routes in the router file:

- `/` for the home page
- `/about` for the about page
- `/about-us` as a redirect to `/about`
- `/users/:id` for dynamic user editing pages
- `/:pathMatch(.*)*` for the not-found page

This means the app now supports real page-like navigation.

## View Components

We split the app into route views inside [src/views](src/views):

- [HomeView.vue](src/views/HomeView.vue)
- [AboutView.vue](src/views/AboutView.vue)
- [EditUserView.vue](src/views/EditUserView.vue)
- [NotFoundView.vue](src/views/NotFoundView.vue)

This is the first step from a single large component toward a page-based architecture.

## RouterLink

Instead of plain anchor tags, we use `RouterLink` for navigation:

```vue
<RouterLink to="/about">About</RouterLink>
```

`RouterLink` is preferred because it works with Vue Router without reloading the page.

We also learned that `RouterLink` can receive object syntax:

```vue
<RouterLink :to="{ name: 'edit-user', params: { id: 2 } }">
  Edit User 2
</RouterLink>
```

## Programmatic Navigation

We learned how to navigate from script using `useRouter()`:

```javascript
const router = useRouter()
router.push({ name: 'edit-user', params: { id } })
```

This is useful when navigation happens after an action like a button click.

We also used navigation directly in the template with `$router.push(...)`.

## Route Params

The route `/users/:id` introduces a dynamic segment.

In [src/views/EditUserView.vue](src/views/EditUserView.vue), we read the current route with `useRoute()`:

```javascript
const route = useRoute()
const userId = route.params.id
```

This allows the page to access the `id` from the URL.

## Lazy Loading

We also learned route-level lazy loading:

```javascript
component: () => import('@/views/AboutView.vue')
```

This loads the page component only when the route is visited, which keeps the initial bundle smaller.

## Redirects and Fallbacks

### Redirect

We added a redirect route:

```javascript
{
  path: '/about-us',
  redirect: '/about'
}
```

This sends users from one URL to another automatically.

### Not Found route

We added a wildcard route for unknown pages:

```javascript
{
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: () => import('@/views/NotFoundView.vue')
}
```

This is the 404-style fallback page.

## Navigation Guard

We also added a global navigation guard:

```javascript
router.beforeEach((to, from) => {
  console.log('Navigating from', from, 'to', to)
})
```

This runs before every route change and can be used for:

- logging
- authentication checks
- analytics
- blocking or redirecting navigation later on

## New Concepts Summary

In this lesson we learned:

- How to install and register Vue Router
- How to render pages with `RouterView`
- How to navigate with `RouterLink`
- How to navigate programmatically with `useRouter()`
- How to read route params with `useRoute()`
- How to create redirects and a 404 fallback route
- How to lazy load route components
- How to use a global navigation guard

This is the foundation for building multi-page Vue applications with clean routing structure.
