# 02-38 Exercise: Create a Configurable Component

Create and use a "Tasks" component (app-tasks).

Receive & output the name of the selected user.

## Hint

You can find a user with the specific id in the DUMMY_USERS array like this:
```
DUMMY_USERS.find(user => user.id === selectedUserId)!
```


Note: 

You can create the component using: 
```
ng g(enerate) c(omponent) tasks --skip-tests

--skip-tests: avoid generating the tasks.spec.ts (test file)
```
