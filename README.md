# React Patterns

A small project to play around with some React patterns - learned from [Kent C. Dodds](https://twitter.com/kentcdodds) 🙏

To run the project:

```
npm install
npm run dev
```

The UI doesn't tell much. Read the code under the `components` folder.

## Element Optimization

To prevent an element from re-rendering, consider these options:

- move the element outside of the component.
- lift it to a parent component with fewer renders.
- use `React.useMemo` or `React.memo`
- pass data via context. The idea is that we can move component somewhere else.

## Optimize Context

The way that context works is that whenever the provided value changes from one render to another, it triggers a re-render of all the consuming components (which will re-render whether or not they're memoized).

To optimize the Context:

- memorize the Context value with `React.useMemo`
- use Provider component
- split context: one context for value, one for setter
