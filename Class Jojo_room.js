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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);

      window.location = "Class Jojo_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "  + Room_names);
      row = "<div class='room_name' id='+Room_names+' onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}


      getData();

      function redirectToRoomName(name)
      {
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "Class Jojo_page.html";
      }

      function logout()
      {
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "Class Jojo.html";
      }

