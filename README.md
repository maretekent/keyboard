# Keyboard

The keyboard is a project demostrates uses JavaScript MVC framework (such as React) so that when you click on a white key the key is highlighted and the corresponding letter is appended to an element below the keyboard that acts as a log.


## Running locally - without Docker
Requirements
* Yarn/ npm

### Step 1
Ensure you have either `npm` or `yarn` installed.
> To check whether you have `npm` or `yarn` installed you can run the command `npm -v` or `yarn -v`
> to check whether you have them installed respectively.

### Step 2
You need to install all the project's dependencies locally, for this you should run

```shell script
yarn install # If you have yarn installed

# or

npm install # If you have npm installed
``` 

### Step 3
Once you have completed all the steps above you are ready to run the application.
You can use any of the commands below for that:

```shell script
yarn start # Use this when you have the backend configured and running too.

# or 

yarn start:dummy # To start the application using the dummy server
```

alternatively is to run 

```
npm start
```

### Adding an Octave to Keyboard

- You can add an octave to the keyboard on line [17](https://github.com/maretekent/keyboard/blob/master/src/components/App.js#L17) of App.js file
for instance `octave : ['c','d','e','f','g','a','b','c','d','e','f','g','a','b']`
- A nice to have would be creating configurable file or env variables that one can easily add the octave


### Running Test
We are currently using mocha, chai, sinon and enzyme for testing
to run the test just run the following:
`npm test`

### Pull Requests
There are pull requests closed
[Pull Requests](https://github.com/maretekent/keyboard/pulls?q=is%3Apr+is%3Aclosed)

### Issues
I have logged issues here
[Issues](https://github.com/maretekent/keyboard/issues)


