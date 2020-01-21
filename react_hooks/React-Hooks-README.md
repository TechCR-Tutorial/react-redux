#### Important Notes:
```
Dont call hooks inside loops, conditions or nested functions. 
call them from with in react functional component and not just any regular java script functions
```

#### useState Notes
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

#### useEffect Notes
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