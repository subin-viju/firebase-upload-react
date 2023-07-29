Firebase Upload in React

This project is a simple web application built with React that allows users to upload images to Firebase Storage.

Technologies used :
React
firebase

Features :
Upload image to firebase and view that image

Getting Started
Prerequisites
Before running the project locally, you need to have the following installed:

Node.js and npm
Firebase account and project setup

Installation

Clone the project and run : npm install

Set up Firebase configuration:

Create a Firebase project at https://console.firebase.google.com/.
Go to the project settings and find the configuration settings (apiKey, authDomain, projectId, etc.).
Open src/utils/firebase.js and replace the Firebase configuration with your own.

Usage :

    run the development server : npm run dev

    Click on the "Upload file" input to select an image from your device and upload it to Firebase Storage.

    The uploaded images will be displayed below the upload form.
