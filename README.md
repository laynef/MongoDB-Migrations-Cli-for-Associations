# Mongo Mongoose Cli

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