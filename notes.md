** ADVANTAGES OF JAVASCRIPT **

- performance
- objects
- syntax
- first class functions
- events
- reusability
- the net results


** ANATOMY OF A TYPICAL MODERN JAVASCRIPT APPLICATION **

- a data store
- a virtual private network (vpn) or firewall(to protect the data store from unauthorized access)
- a black box JSON RESTful Web Service Layer
- various third-party API's
- an app server/content management system to route and request and deliver pages to the client
- a static content deliver network (CDN) for cached files (images, js, css, templates)
- the client (browser)

JSON BASED DATA STORES **

- JSON based NoSQL data stores included MongoDB AND CouchDB.

** LAMBDA **

A lambda is a function that is used as data. As such, it can be used the same way any other expression can: as a parameter for another function, the return value of a function, or anywhere you might use a literal value.

	In JavaScript, lambdas are commonly used to:

	- Perform operations on the other arguments passed in (as demonstrated earlier).

	- Attach event handlers for DOM interactions.

	- Pass in a callback function to be executed when the current function is complete.

	- Wrap existing functions with additional functionality (often used to implement cross-cutting concerns, such as logging). A function that adds functionality to another function is called a function decorator.

	- Take a function that requires multiple parameters, and return a function that requires fewer parameters—for example, by fixing one or more of the parameters to specific values. (See “Partial Application and Currying”.)

	- Return a function from another function. For example, you might have a function that takes an argument and returns a curried function that applies that argument in a predetermined calculation.