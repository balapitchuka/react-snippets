create-react-app --version
```
4.0.1
```



# useState Hook
- The useState hook lets you add state to function components.
- Calling React.useState inside a function component generates a <b>single piece of state</b> associated with that component.
- The state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine


### Importing useState Hook in React

`useState` is a named export from `react`. To use it, you can write:
```
React.useState
```
Or to import it just write `useState`:
```
import React, { useState } from 'react';

```

### Using useState Hook
1. The useState Hook allows you to declare only one state variable (of any type) at a time
```
import React, { useState } from 'react';

const Message= () => {
   const messageState = useState( '' );
   const listState = useState( [] );
}
```

2. useState takes the **initial value of the state variable** as an argument

3. `useState` doesn’t return just a variable as the previous examples imply. It returns an array where
    -  the `first` element is the `state` variable
    -  the `second` element is a `function` to update the value of the variable

```
const Message= () => {
   const messageState = useState( '' );
   const message = messageState[0]; // Contains ''
   const setMessage = messageState[1]; // It’s a function
}
```

Usually, you’ll use array destructuring to simplify the code shown above:

```
const Message= () => {
   const [message, setMessage]= useState( '' );
}
```