import { addNewCoordinates } from '../controllers/coordinatesController'
const routes = (app) => {
    //create route for donations
    app.route('/lla')
      //create get request
      .get((req, res) =>
      res.send('GET request successful!'))
      //create post request
      .post((req, res) =>
      res.send('POST request successful!'))
    //   TODO: get this to work
    //   .post(addNewCoordinates);

    // create a new route so you can get these donation entries by their ID's
    app.route('/lla/:timestamp')
      //create put request
      .put((req, res) =>
      res.send('PUT request successful!'))
      //create delete request
      .delete((req, res) =>
      res.send('DELETE request successful'))
  }
  export default routes;