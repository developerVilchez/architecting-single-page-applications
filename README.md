# Architecture and State Flow of Single Page Applications

## Lets architect a React application and understand state flow

Our app will display a list of articles. As a user, I will be able to create, delete and like articles.

In this article we will talk about how modern frameworks work and about their declarative nature, touching the concept of state. With this knowledge, we will architect our application from the domain to the view layer.

### Todays frameworks are declarative

React, Angular and most modern front-end frameworks are declarative, encouraging us to use elements of functional programming.

Have you ever seen a flip book?

A flip book is a book with a series of pictures that vary gradually from one page to the next …

Sounds familiar?


Now let’s check a part of React’s definition

Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes …

And a part of Angular’s

Build features quickly with simple, declarative templates. Extend the template language with your own components …

Frameworks help us build apps consisting of views. Views are representations of state. But what is state? 

### State

The state represents every piece of data that changes in an application.

You visit an URL, that’s state, make an Ajax call to retrieve a list of movies, state again, persist info to local storage, ditto, state.

State should be immutable.

### Domain layer

The domain layer describes the state and holds the business logic. It represents the core of our application and should be agnostic to the view layer. Angular, React, Vue, it shouldn’t matter, we should be able to use our domain layer regardless of the framework we choose.

Because we are dealing with immutable architecture, our domain layer will consist of entities and domain services.

Seen as an anti-pattern in OOP, especially in large-scale applications, the anemic domain model is perfectly acceptable when working with immutable data

Having to display a list of articles, the first thing we’ll create is the Article entity.

https://gist.github.com/intojs/5008a2a41196c133a9e8847ae9ee461d

Now let’s create the ArticleService. This domain service will allow us to create instances of the Article class and increment the likes count.
