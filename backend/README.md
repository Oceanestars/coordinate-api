# coordinate-api

Simple RESTApi that provides coordinates using the MERN stack

## Backend

### Start up the mongo database

```
docker run --name mongodb  -p 27018:27017 -d mongo
```

We have a json file that contains our data so you'll need to copy it. You can also mount it ahead of time if you want with -v.
(Assumes you're in the backend folder)

```
docker cp positionsDB.json mongodb:/tmp/
```

Then you can exec to be able to import the data

```
docker exec -it mongodb bash
```

Inside the container:

```
mongoimport --db coordinates --collection positions --drop --file /tmp/positionsDB.json --jsonArray
```

If you test the endpoint http://localhost:1234/lla and you don't see any data. Wait a little bit.
