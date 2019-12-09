# async-notation
Async notation for callback-styled functions and methods.

```js
(async()=>{
    let [result] = await asyncNotation(target, ...arguments);
})();
```

- `target`  
Function or method with object: `[object, 'methodName']` or `{methodName : object}`

- `arguments`  
Arguments for target function / method

Returned value:  array of callback arguments.

## Example

```js
import { asyncNotation } from 'async-notation';

//Prepare callback-styled function
const timeoutFunction = (time, name, cb)=>{ setTimeout(()=>cb(name, 'done'), time); };

//Prepare callback-styled object method
class TimeoutClass {
	timeoutMethod (time, name, cb) { setTimeout(()=>cb(name, 'done'), time); }
}
const timeoutObject = new TimeoutClass();

//Examples
(async()=>{
    //For function
    const [name, status] = await asyncNotation(timeoutFunction, 100, 'test func');

    //For object method, variant 1
    [name, status] = await asyncNotation([timeoutObject, 'timeoutMethod'], 100, 'test array');
    
    //For object method, variant 2
    [name, status] = await asyncNotation({timeoutMethod : timeoutObject}, 100, 'test object');
})();

```

