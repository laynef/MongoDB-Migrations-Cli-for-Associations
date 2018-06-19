# Cobra CLI for MongoDB with Mongoose

## Goal of CLI
```

This CLI will be designed to update new tables made and update 
existing databases with data in production for new associations

In example, we have a user table that has favorite 
video ids (favorite_video_ids: [ Number ]) with a key 
in the user table, we will be create a favorites table 
for the ability to archive for possible query purposes 
for marketing. The new key in the database is 
favorite ids (favorite_ids: [ Number ]) and the 
Favorites table has a association for the user table 
and video table for queries with include parameters.

```

## Contributors

Rules and Structure

- Never use es6 for older Node.js version compatibility
- File names on alias and methods in actions must match

Understanding circular imports

- Circular imports are built to have all reusable functions in the same place
- I've use file names to make the function name in actions
- However with utils all functions must be unique because
all helper functions should be reusable in any actions or commander methods
- Strict naming conventions are important so there are no overrides affecting 
the final desired outcome

## Bugs 

I will not be responsive to criticism in Issues filed. I did this to clean up legacy code
for myself. I will definitely take a look at pull requests and import them when you
solve the problem yourself. 

I personally choose PostgreSQL so you will not see updates from myself in the future.
Structure is important in databases and NoSQL databases are to 'new' for my taste. I
however work with them. So please be considerate when you find issues or request 
updates.

The code has documentation on every step of the way for you to follow alone. I will
require documentation in pull requests. I love creativity just please document your
changes.
