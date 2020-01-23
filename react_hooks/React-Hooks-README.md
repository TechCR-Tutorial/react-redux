## Important Notes:
```

React Function Equality
even though its same function, function before render and function after render is different. 
so if you use function (method) as props, react will identify props get change after every rendering of component. (reference different)
For reading
https://www.youtube.com/watch?v=IL82CzlaCys&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=26&_sm_au_=iRV5VS1F6fQrWjssML8tvK34L00HF


Dont call hooks inside loops, conditions or nested functions. 
call them from with in react functional component and not just any regular java script functions


There are mising hooks
useImpertiveHandle
useLayoutEffect
useDebugValue
```

## useState Notes
```
useState hookd for mange state inside functional component. 
useState hook return an array with two elements. 
first element is current value of state, second element is state  value setter function.

You need to use previous value supplier when need to do calcualtion based on previous state. 
Ex : UseStateCounterPrevState - setCount(prevCount => prevCount + 1)

When use object in useState its need to extract (...name) before set values to object attribute. 
Ex : UseStateObject - <input type="text" value={name.firstname} onChange={e => setName({...name, firstname: e.target.value})}/>


Array Ex : UseStateArray.js
Need to add how to update, delete objects in array. 

When use object or array, make sure to spread state variable and then call the setter method. 

```

## useEffect Notes
```
useEffect hook for perfom side effects in functional components. 
as replacement for componentDidMount, compoentnDidUpdate, componentWillUnmount.

** Use effect run every time after component render  ***

ClassCounter :
to avoid update title every time component render use if conditions. 
to achive this from useEffect
can pass relevant attributes as list to useEffect method. 
Ex : UseEffectConditionaly - useEffect. ( can check this by removing useEffect 2nd parameter - list, logs will apperaed even name changd. )

 
achive componetDidMount : Only execute one time useeffect - to avoind not neede fetchs. 
just need to pass empty array as second parameter to useEffect method. 
Ex : UseEffectMouce.js - useEffect. ( can check by removing empty array, and use effect called log apper in consile every time mouce movued. )

Cleanup :
execute componentWillUnmount via useEffect. 
for that need to add return function into useEffect method. 
Ex : UseEffectMouce.js - - useEffect. (remove return claue and you can see logs even you move to another menu. listner not detach from window. )

```
#### Use effect IM:
```
For haing more than one prop change you can use multile useEffect hooks for code seperations. 
```

#### Use effect fetch
```
Ex : UseEffectFetchList (here you can see empty dependcy array for avoid fetch repeatly. )

Ex : UseEffectFetchByID - useEffect for id - remove id form dependacy list and check. even input change data wont fetch. 
    can see multiple useEffect for different dependies. 
```

## useContext Notes
```
Context provide way to pass data through component tree without pass down manually at every level as props. 

Context creating and providing is same in both with hooks and without hooks. 
Ex ; ContextComponent 
Noraml usage of Context : ContextComponentC

useContext hooks usage : UseContext.js

```

## useReducer Notes
```
Use reducer also for manage state. 
its alternative to useState.
  Different - (useState build using useReducer)
  When to use - 
     Number, String, Boolean - useState / Object - useReducer
     Local - useReducer / Gloabal - useReducer (via dispatch as context)
     Business Logic: Not Have - useState / Have - useReducer

Steps :
1 - create initial state, reducer. 
2. use useReducer by passing reducer and initial state as parameter. 
Ex : UseReducerCounterOne


Use reducer with state as object and action as object. 
Ex : UseReducerCounterWithObject

Mutlipele reducers 
Ex : UseReducerCounterMultipleReducer

Handling common values in component Tree. (pass reducer as context value)
Ex : UserReducerWithContextTree


Fetch using useState - Ex : UseReducerFetchByUseState
Fetch using useReducer - Ex : UseReducerFetchByUseReducer
```

## useCallback
```
so many things to understand. 
Please read : https://www.youtube.com/watch?v=IL82CzlaCys&list=PLC3y8-rFHvwisvxhZ135pogtX7_Oe3Q3A&index=26&_sm_au_=iRV5VS1F6fQrWjssML8tvK34L00HF

Spcially for -
optimize import 

Even we use React.memo (disble rendering if props not change), if we use function (method) as props 
when parent getting redering react identify as function (method) was changes (because reference different)

Read logs for identify perfomance. by clicking buttons.  
Without Memo - all logs will appear
Adding Memo - with out one counter ( only having clicke counter log. )
Adding useCallback - only relevant compoentn. 
Ex : UseCallbackComponent
```

## useMemo
```
use memo also for increase performance, 
When we have slow method (fetch data from server) if component slowness to other componest can use useMemo hook. 
Ex : UseMemoComponent
count two get updated with out slowness. 
useReduce cache function and useMemo cache only value it return. 

```

## useRef
```
for access DOM 
Ex : for focus an element. 
UseRefComponent / UseRefConstant
```

## custom Hooks
```
should start with use
custom hook can call other hooks also  

```