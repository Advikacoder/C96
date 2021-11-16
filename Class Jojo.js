var firebaseConfig = {
    apiKey: "AIzaSyCJcl_OJDxdMtpVDYLqvwDb4MMg7CIRIaQ",
    authDomain: "kwitter-4091a.firebaseapp.com",
    databaseURL: "https://kwitter-4091a-default-rtdb.firebaseio.com",
    projectId: "kwitter-4091a",
    storageBucket: "kwitter-4091a.appspot.com",
    messagingSenderId: "357159517711",
    appId: "1:357159517711:web:a055c3452c31d20ee62d7a"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser() 
{
    user_name = document.getElementById("user_name").value ;
    localStorage.setItem("user_name", user_name);
    firebase.database().ref("/").child(user_name).update({
        asd : "unicorn"
    })
    window.location = "Class Jojo_room.html";

}