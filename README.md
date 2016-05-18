##Documentation

This repo provides a basic development environment for single page  applications. However you can add multiple views using any JS router.

###Main features included in this repo:

- [x] Gulp for task handling
- [x] Browser sync for live reloading
- [x] Browserify to require modules
- [x] Semantic scaffolding for your files
- [x] SASS capabilities
- [x] Bootstrap
- [x] Quick building for production


####Cloning and setting up:

1. `git clone https://github.com/Cruz14/init_dev_environment.git`

2. `cd init_dev_environment`

3. then to install dependencies locally `npm install .` (may require `sudo`)


####Running the local environment (on the terminal):
`npm run watch`

:fire: The environment, your edits and your files go in **/src** and not in **/build** 

####To make a production ready build:
`npm run build`

This will uglufy the JavaScript files. You can find the files at **./production**

The difference between this folder and the **./build** folder is that this one is uglified, whereas the **./build** files are generated for the development environment.


####An overview of the scaffold:

![Scaffold](http://i.imgur.com/iMRveZi.png)

####To personalize your environment:

#####If you want to add tasks:

1. Go to **/gulp** and add a new file: `newTask.js`
2. Then require gulp: `var gulp = require('gulp');`
3. Add your own libraries and create the task.


#####To only require certain parts of bootstrap:

1. Go to **/src/style/dependencies/_bootstrap.scss**
2. Comment anything you don't need
3. You can of course turn it off altogether

