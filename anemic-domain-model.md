Presentational components






Our application will have three layers domain, state and components.

A front-end application consists of three elements:
model state view

Anemic Domain Model and Functional Programming

There are two common traights of FP:
 1. immutable data structures
 2. operations upon data structures are kept separately

The basic strategy here is you create functions that take in a state and return the new state. 

F# encourages you to keep data separate from functions.

The data and operations that work with that data into separate classes.

Following the FP principles does not mean that you will have maintainability problems down the road.

When you work with immutable data structures you don't need to worry about corruption of internal state.

Michael Feathers
Object-oriented programming makes code undestandable by encapsulating moving parts. FUnctional programming makes code understandable by minimizing moving parts.

Discoverability of the operations working upon immutable data may suffer.
Can be mitigated by using convetions, guidelinse to get all functions related to a data structure into a single group.
