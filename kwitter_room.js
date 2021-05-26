var firebaseConfig = {
      apiKey: "AIzaSyAJNYa5lhA7pMSmOAo1G5Ej8LF8ggvQHIk",
      authDomain: "kwitter-d195c.firebaseapp.com",
      databaseURL: "https://kwitter-d195c-default-rtdb.firebaseio.com",
      projectId: "kwitter-d195c",
      storageBucket: "kwitter-d195c.appspot.com",
      messagingSenderId: "144276130636",
      appId: "1:144276130636:web:ee8c47d928b2ed94101de9",
      measurementId: "G-WXV6JGHT5G"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick'redirectToRoomName(this.id)'>#"+Room_names +"</div?<hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
 function addRoom()
{
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
        purpose : "adding rome name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}