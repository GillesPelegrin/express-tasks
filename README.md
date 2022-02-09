# Express Backend

The purpose of this project it to learn how to implement best practices from the java world to the javascript world.
Reflect if they still make sense and refactor if needed. And of course to play with it!

## What will be implemented

You will find a basic CRUD for tasks and some authorization.

## Train of Thoughts

### DB

- [x] choose DB -> MongoDb
- [ ] find out how to connect to the DB
- [ ] make sure that the DB is first launched before the application

### Testing | Tdd | Bdd

```
Thought:
Normally I write for each class a unit test. which makes refactoring a lot harder -> thighty coupled
So I want to adapt to a more domain unit test approach and an e2e/acceptance test  at the top of the API.
```

Pro | Contra |
| :--- |:------------|
Easier to refactor  | Take more time to run |
Domain becomes better present in the tests  |

- [x] create your first acceptance test
- [ ] create an acceptance test that does a full rest call ( -> so also writing and reading to a DB )
- [ ] making test more readable and remove boiler plate code -> put in a util class
- [ ] create unit test for your domain model

### Models

- [x] find out how to create a domain model
- [ ] add validations so your model can not come in a invalid state

### Modules | Onion architecture

- [ ] find out the best how that different layers can speak to each other
- [ ] require vs import -> find out what's best and refactor
- [ ] wrap everything into a class and export vs functions in function export ? -> refactor
- [ ] make that controller layer can not speak to the domain layer without going through the service layer 

### Restfull

- [ ] could add in the Api /api/v1 
