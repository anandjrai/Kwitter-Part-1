
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
   apiKey: "AIzaSyA-lBRr_vbsZKjdzc235j7KfcyYfnCysNM",
   authDomain: "kwitter-app-f1934.firebaseapp.com",
   databaseURL: "https://kwitter-app-f1934-default-rtdb.firebaseio.com",
   projectId: "kwitter-app-f1934",
   storageBucket: "kwitter-app-f1934.appspot.com",
   messagingSenderId: "233245797020",
   appId: "1:233245797020:web:ee86379b00424ba5225b59"
 };
 
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("name");
document.getElementById("header3").innerHTML="welcome "+username+"!";
function addroom(){
   Roomname=document.getElementById("room_input").value;
   firebase.database().ref("/").child(Roomname).update({
      purpose:"adding room name"
   });
   localStorage.setItem("Roomname",Roomname);
   window.location="kwitter_room.html"

}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function logout(){
   window.location="index.html";   
}

function redirectToRoomName(name){
   localStorage.setItem("roomname",name);
   window.location="message.html";
}