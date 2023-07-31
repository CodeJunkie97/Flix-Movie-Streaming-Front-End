## Table of Contents
[1.Full App Description](#full-app-description)\
[2.Current Status](#current-status)\
[3.Still to Come](#still-to-come)\
[4. Runbook Documentation](#steps-to-run-on-localhost)

# Full App Description
This is a full stack ReactJS and NodeJS application that I have been working on for the past few months. Despite the changed logo, the website is almost an exact clone of the Netflix browser website. The website 
has essentially all of the same functionality of the Netflix website without actually displaying any copyrighted material. This functionality includes the home page with Movies and Series lists, a featured movie, 
and a feature that plays the trailer when you hover over a specific card for a movie or TV Series. It can also filter out by Movie/Series and also Movie/Series Genre, depending on what the user is looking for. If 
you click on the actual card of a Movie/TV Series, it will take you to the play window, which will then play the content. There is also a secure register and login system with password hashing and authentication. 
The backend of the application is built with 3 RESTful API's developed in NodeJS backed by a MongoDB Cloud Database. The server is build using Express JS. The future of this application is getting it attached to 
the Data Analysis Suite Application that I built specifically for that and also sone other features including Data Modeling and AI. Read more below in the still to come section.

# Current Status
At this point in time, I have completed most of the Front End/UI Portion of the application as well as the API/Database configuration portion of the application. Although right now the lists and video links are 
just listed with Dummy data/Youtube videos to avoid copyright issues.

# Still to Come
The next step is to connect his application tot he Data Administrator Suite that I developed separately for this application. The current Data Admin suite is not exactly set up for Movie Streaming Data but I am 
in the process of making changes so that it is. My ideal admin suite has User Data and Movie/Show data so an admin can determine important metrics like what are users watching, whats being watched the most, how 
long are they engaged with each content. I then want to use this data to create a AI Recommendation model that can reccomend the best content for users based on the user history. I am in the process of learning 
AI, Data Modeling, and Data Science and this seemed like a challenge where I could learn a lot and build cool things so I am currently in the process of this journey as you read this.

# Flix-Movie-Streaming-Back-End Local Runbook Documentation.
[Backend/API Repository Link] (https://github.com/CodeJunkie97/Flix-Movie-Streaming-Back-End)

# Steps to run on localhost:
1. Clone both this backend repository and the linked front end repository above. You will need both to be running simultaneously for the application to work properly. 
2. After you have both cloned, navigate into the back end server repository and the api folder. 
3. Once in the API folder in a terminal, run the command 'npm install' to install all of the packages needed to run the backend server. 
4. Once the libraries have finished installing, you should then run the command 'npm start' to start the backend development server. From the command terminal, you will recieve two output messages to let you know the backend server is running and that the connection to the database was successful. 
5. After you recieve these messages, it is time to switch to the FrontEnd/UI Repository. Once in the FrontEnd/UI Repository in a command terminal, navigate to the flix-movie-streaming folder and again run 'npm install' to install all of the required libraries and 'npm start' to start the front end development server.
6. Once complete your browser should open up a window to the Front End UI running on Port 3000. Access Tokens for the API are currently hardcoded in. If the access token currently in the repository does not work, I have created a guide on how to get a new token. Read the below instructions to obtain an access token and then return to this guide.
7. Once you have the new token, replace it in Home.jsx, Featured.jsx, and ListItem.jsx and run front end again.

# Get New Access Token
1. Get the backend server running as explained in the previous guide.
2. Once the server is running on local host, open up postman.
3. Once in postman, send a new post request to the endpoint localhost:8800/api/auth/login with the following body:
{
    "email" : "codemonkeeey15@gmail.com",
    "password" : "12345678"
}
4. You will then recieve a response from the database with a new access token, copy it.

