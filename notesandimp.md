https://browserslist.dev/?q=bGFzdCAxNSB2ZXJzaW9ucw%3D%3D

https://www.npmjs.com/package/babel-plugin-transform-remove-console

https://randomapi.com/api/6de6abfedb24f889e0b5f675edc50deb?fmt=raw&sole


## Config-driven UI
Config-driven UI is a software development approach that uses a configuration file to define the layout, styles, and other properties of a user interface. This approach makes it easier to customize the UI for different use cases or user groups, without the need for extensive coding.

In a config-driven UI, the configuration file is typically a JSON or YAML file. The file specifies the UI elements, their properties, and their relationships. The configuration file is then used by a UI framework to render the UI.
Here are some of the benefits of using config-driven UI:
Easier to customize: The UI can be easily customized by changing the configuration file. This makes it easy to create different versions of the UI for different use cases or user groups.
Improved maintainability: The configuration file can be used to document the UI and to track changes to the UI. This makes it easier to maintain the UI over time.
Reduced development time: The configuration file can be used to generate the UI automatically. This can reduce the development time required to create the UI.


## optional chaining ==>> ?.

Optional chaining is a feature introduced in ECMAScript 2020 (ES11) that provides a concise way to access nested properties of an object or call nested functions when dealing with potentially undefined or null values. It helps to avoid the "TypeError: Cannot read property 'x' of undefined/null" error and simplifies handling of optional properties and methods.

The optional chaining syntax uses the question mark (`?`) and the dot (`.`) operators to safely navigate through object properties or call functions. It allows you to chain property accesses and method calls without worrying about whether an intermediate property or function exists.

Here's the basic syntax of optional chaining:

```javascript
object?.property
object?.method()
object?.property?.nestedProperty
object?.method()?.nestedMethod()
```

Explanation:
- `object`: The object you want to access a property or call a method on.
- `property`: The optional property you want to access on the `object`.
- `method()`: The optional method you want to call on the `object`.
- `nestedProperty`: A property nested inside another property.
- `nestedMethod()`: A method nested inside another method.

If the property or method accessed via optional chaining is undefined or null, the expression will short-circuit, and the result will be `undefined`. No error will be thrown, and the subsequent property or method will not be attempted.

Usage example:

```javascript
const person = {
  name: 'John',
  address: {
    city: 'New York',
    zipCode: '10001'
  },
  sayHello() {
    return 'Hello!';
  }
};

// Using optional chaining to access properties and call methods
const cityName = person?.address?.city; // 'New York'
const zipCode = person?.address?.zipCode; // '10001'
const unknownProperty = person?.unknownProperty; // undefined

const greeting = person?.sayHello?.(); // 'Hello!'
const nonExistentMethod = person?.nonExistentMethod?.(); // undefined
```

In the example above, `person?.address?.city` safely accesses the `city` property of the `address` object. If `address` is null or undefined, the result will be `undefined`. Similarly, `person?.sayHello?.()` safely calls the `sayHello` method of the `person` object. If `sayHello` is not defined, the result will be `undefined`.

Optional chaining is especially helpful when dealing with complex data structures and APIs that may return nested objects with unknown structures. It allows you to write more concise and robust code by handling potential null or undefined values without causing runtime errors.

## react fibre reconcilation
https://github.com/acdlite/react-fiber-architecture

# Logic

getting the filterdata
and then its render 
fetch()
data.json()
monolith /microservices
useEffect



## extension for cors 
Allow CORS: Access-Control-Allow-Origin

>> App.js >>
chunking
code splitting
Dynamic bundling
Lazy loading

// import Instamart from "./Components/Instamart";//  normal import
const Instamart = lazy(() => import("./Components/Instamart")); // this is a dynamic import lazy loading , on dimand loaing, code splitting ,bundle chunking
// on demand loadig react will suspend bcoz there is no any bundle
// On demand loading => upon render => suspend loading
// code yaychy aadhich react try to render thats why error thrown
// to candle this case --> Suspense from react library

const AppLayout = () => {
  // const Instamart = lazy(() => import("./Components/Instamart")); //  dont do this // coz lazy load for every render cycle 
  }

  make import on the top lazy loading


  ====================================

  
In React.js, both state and props are used to manage data within a component, but they serve different purposes and have different characteristics.

Props (Properties):
Props are used to pass data from a parent component to a child component.
Props are read-only and cannot be modified by the child component that receives them.
They are used to provide data and configuration to child components so that the parent component can control the behavior of its children.
Props flow in a unidirectional manner, from parent to child, and cannot be passed back to the parent directly.
When a parent component updates the props it passes down, the child components that receive those props will also update their rendering to reflect the new data.
Example of using props:

jsx
Copy code
// Parent component
import React from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
  const dataToPass = "Hello from Parent!";
  return <ChildComponent message={dataToPass} />;
};

// Child component
import React from 'react';

const ChildComponent = (props) => {
  return <div>{props.message}</div>;
};
State:
State is used to manage the internal data of a component.
It is mutable and can be updated using the setState method provided by React.
State is used to store and manage data that can change over time, and when the state changes, React will automatically re-render the component with the updated data.
State belongs to the component that declares it and cannot be accessed or modified by other components.
Changes to the state trigger React's reconciliation process, where it determines what parts of the UI need to be updated.
Example of using state:

jsx
Copy code
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};
In summary, props are used for passing data from parent to child components in a unidirectional flow, while state is used for managing internal component data that can change and trigger re-rendering. Both state and props are essential for building dynamic and interactive React applications.


=============REDUX TOOLKIT ==================
- need packges
 npm install @reduxjs/toolkit
 npm install react-redux

