This is base nodejs project templete , which anyone can use it has been prepared, by keeping some of the most important code principle and project management recomendition. Feel free to change anything.

`Src`-> inside the src folder all the actual source code regarding teh project will reside, his will not include any kind of test. (You might want to make seperate tests folder).

Let take a look inside the `src` folder 

- `config` -> In this folder anything and everything regarding any configurations or setup of a library or module will be done For example: setting up `dotenv` so that we can use the environment variables anywhere in a cleaner fashion , this is done in the `server-config.js`. One more example can be to setup you logging library that can help you to prepare meaningful logs , so configuration for this library should also be done here.

- `routes` -> In the routes folder , we register a route and the corresponding middleware and controllers to it.

- `middlewares` -> they are just going to intercept the incoming request the incoming requests where we can write ur validators , authenticators etc.

- `controllers` -> they are kind of last middlewares as post them you can call you business layer to execute the business logic. In controllers we just receieve incoming requests and data and then pass it to the business layer , and once business layer returns an output , we structure the API response in controllers and send the output .

- `repositories` -> this folder contains all the logic using which we intract the DB by writing queries , all the raw queries and ORM queries will go here.

- `services` -> contains the business logic and intracts with repositories for data from the database

- `utils` -> contains the helper method , error classes.

### Setup the project

-Download this templet from github and open it in your favourite text editor.
- Go inside the folder path and execute the following command:
  ```
     npm install
  ```

- In the root directory create the `.env` file and the following env variables
  ```
     PORT=<Port number of your choice>
  ```

  ex:
  ```
     PORT = 3000
  ```
- go inside the `src` folder and run following command:
  ```
    npx sequelize init
  ```
- By executing the above command you will get migrations and seeders folder along with `config.json` 
  inside the config folder

- If you are setting up your development environment, then write the username of your db,password of your db and in dialect mention whatever db you are using for eg:mysql, mariadb etc
- If you are setting up the prod environment , make sure you also replace the host with the hosted db url.

- To run the server execute:
  ```
     npm run dev
  ```
