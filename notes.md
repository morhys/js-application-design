### ADVANTAGES OF JAVASCRIPT 

- performance
- objects
- syntax
- first class functions
- events
- reusability
- the net results


### ANATOMY OF A TYPICAL MODERN JAVASCRIPT APPLICATION

- a data store
- a virtual private network (vpn) or firewall(to protect the data store from unauthorized access)
- a black box JSON RESTful Web Service Layer
- various third-party API's
- an app server/content management system to route and request and deliver pages to the client
- a static content deliver network (CDN) for cached files (images, js, css, templates)
- the client (browser)

### JSON BASED DATA STORES

- JSON based NoSQL data stores included MongoDB AND CouchDB.

### LAMBDA

A lambda is a function that is used as data. As such, it can be used the same way any other expression can: as a parameter for another function, the return value of a function, or anywhere you might use a literal value.

	In JavaScript, lambdas are commonly used to:

	- Perform operations on the other arguments passed in (as demonstrated earlier).

	- Attach event handlers for DOM interactions.

	- Pass in a callback function to be executed when the current function is complete.

	- Wrap existing functions with additional functionality (often used to implement cross-cutting concerns, such as logging). A function that adds functionality to another function is called a function decorator.

	- Take a function that requires multiple parameters, and return a function that requires fewer parameters—for example, by fixing one or more of the parameters to specific values. (See “Partial Application and Currying”.)

	- Return a function from another function. For example, you might have a function that takes an argument and returns a curried function that applies that argument in a predetermined calculation.



### IMMEDIATELY INVOKED FUNCTION EXPRESSIONS

This technique is often used to create a new scope to encapsulate modules. 

Before the IIFE became popular, a common technique was to assign names to the object prototype.

### METHOD CONTEXT

When you invoke a method with dot notation, you have access to the object's properties using this.The number parameter is compared to filter1.cutoff. The method returns false because 3 is less than the value stored in this.cutoff, which refers to filter1.cutoff. Remember, this refers to the object that the method is called on.

In the second example, the call method (inherited from Function.prototype) delegates to the method on filter2 instead. Because filter2.cutoff is 3 instead of 5, the same test passes this time.

To clarify, the .call() method shared by all functions allows you to call any method or function on any object. In other words, it sets this inside the method to refer to the object of your choosing. The signature is:

someMethod.call(context, argument1, argument2, ...);


** Function.prototype.bind() **

As useful as .call() and .apply() can be, they have one serious drawback: they impermanently bind the context to the target method. You have to remember to use them every time you invoke the method, and you have to have access to the context object in scope. That's not always easy, particularly in event handlers.

The .bind() method is used to permanently set the value of this inside the target function to the passed in context object. The .bind() method is a recent addition to the language. It was first popularized by Prototype and adopted in many other libraries and was standardized in ECMAScript 5


### Function Scope

Variable scope is the section of code in which the identifier refers to the expected value. Outside a variable's scope, the variable is undefined or replaced by another variable with the same name. Most C-family languages have block scope, meaning that you can create blocks arbitrarily to contain variables. The var keyword is not block scoped. This is a common source of confusion among people who are new to JavaScript but familiar with other languages.

var uses function scope instead. Block scope will be available using the let keyword in ES6. It is already implemented in several browsers, but it may be some time before you can safely use it if you need wide cross-browser support.

***
If you declare all of your variables at the top of your function, and define your functions before you try to use them, you'll never need to worry about any of this. This practice can substantially reduce scope-related bugs.
***


### CLOSURES

Closures are critical to successful application development. In a nutshell, a closure stores function state, even after the function has returned. To create a closure, simply define a function inside another function and expose it. To expose a function, return it or pass it to another function. The inner function will have access to the variables declared in the outer function. This technique is commonly used to give objects data privacy.



### METHOD DESIGN

Several techniques exist in JavaScript to design method APIs. JavaScript supports named parameter lists, function polymorphism, method chaining, and lambda expressions. You should be familiar with all of these techniques so that you can choose the right tool for the job.

	There are some principles to keep in mind when you design your methods. This bears repeating:

	- Keep It Simple, Stupid (KISS)
	- Do One Thing (DOT), and do it well
	- Don't Repeat Yourself (DRY)



### FUNCTION POLYMORPHISM

In computer science, polymorphism means that something behaves differently based on context, like words 
that have different meanings based on how they're used.






















