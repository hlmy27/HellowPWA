importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');
var config = {
apiKey: "AIzaSyA4tbVnR4uJ5hyjXyCfEAn5LqHj7bxKf04",
authDomain: "https://hello-pwa-71bbe.firebaseapp.com/",
databaseURL: "https://hello-pwa-71bbe.firebaseio.com",
projectId: "hello-pwa-71bbe",
storageBucket: "hello-world-pwa-71bbe.appspot.com",
messagingSenderId: "581416972717"
};
firebase.initializeApp(config);
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'Hello World';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});