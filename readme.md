# Steps
* npm init // package.json
* npm install --save-dev typescript@latest // adding typescript locally to this project

* tsc --init // to create the tsconfig file
* changed esinterop to false
* "list emitted files added 

* npm install --save-dev express
* npm install --save-dev @types/express

* enable declarations, source map, outdir
* created tsconfig.json in server/

* tsc --p server/tsconfig.json // to use a subproject
* tsc --build // builds all files instead of reusing old files
// was done after deleting build folder

* // -p for project followed by name of dir in package.json

# Debugging :
* launch.json created and congiguration to debug with npm added, ran from debug pannel
* npm install --save-dev eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
* eslint --init or make manual file

