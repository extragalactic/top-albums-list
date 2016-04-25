INTRODUCTION
------------

The edmDistrict Top Albums List is a Node.js app that shows the top albums from an edmDistrict database, based on listen count. The user can select the number of top albums to view, as well as do a basic album name search to narrow the results. The interface reacts to the user rolling over each entry in the list with an animation, but the list does not have any further clickable functionality. The database is initialized via a script that imports a .csv file into a MongoDB database. Album data is retrieved from the database via HTTP GET requests from the client (for example: http://192.168.1.69:3000/albums/20 will return data for the top 20 albums).

Author: Matt Mazur
        matt@sigma-1.com


REQUIREMENTS
------------

Install Node.js

Install MongoDB, and ensure the system's PATH variable has been set to the 'mongodb/bin' folder of the MongoDB install location.


APP INSTALLATION
----------------

Download or unzip the application files, then navigate to the application's root folder in a terminal window. Run 'npm install' to download all node_modules dependencies.

From the application root folder, run the data importer script 'data_import\import-script.cmd'


TO RUN
------

To start the MongoDB database, open a fresh terminal window, navigate to your MongoDB install location, and run with: 'mongod --dbpath data/db'

Navigate to the 'public' folder, open the file 'serverIP.js' and change the variable to your server's IP address. You can also change the port here (the default port is 3000).

Navigate to the 'server' folder, start the Node.js server: 'node edm-server'

The client can now navigate to the page on the selected IP and port (e.g. http://192.168.1.66:3000)


PROJECT NOTES
-------------

a) The Client app is built with AngularJS.

b) The site is responsive with a Bootstrap layout.

c) I have added a few basic search operations on the album list page.

d) Some console.log tracing comments have been left in the code to help track program flow.

e) I have also implemented basic sockets for client/server messaging. Currently the server keeps track of the users in a user array and reports to the connected clients the current number of users.

f) I have included a random set of album covers to make it look nice.

g) The site is styled with the Sass CSS pre-processor.

h) The project is built using Gulp


The project URL on GitHub is: https://github.com/extragalactic/top-albums-list.git




