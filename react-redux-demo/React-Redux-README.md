# install dependancies
npm install redux react-redux

# Provider
```
Its best practice to include provide in App.js
From Provider store is broadcast to all submodules wrap by Provider tag. 
provide store to Provider via provider store props
```

# Selector
```
This is need to learn. 
selectors - aggreate state with mapStateToProps 

Specially selectors can use to avoid execute re calcuate for any rendering. 
specially when, not related propery change for calcualtion. 
it keep state in memory. 
https://redux.js.org/recipes/computing-derived-data/?_sm_au_=iRV54M4QNsNQLvM6ML8tvK34L00HF

```

# Connect
```
How react componenet connect to redux. 
Ex : CackContainer.js
```

# React-Redux Hooks
```
Replacement for connect. 
Ex : HooksCakeContainer.js

Using hooks over connect have few warnings. 
please read react-redux documentation for that. 
```

# Redux Devtools. 
```
npm i --save redux-devtools-extension
```
https://github.com/reduxjs/redux-devtools/blob/master/docs/Walkthrough.md#manual-integration
