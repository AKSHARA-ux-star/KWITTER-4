var firebaseConfig = {
  apiKey: "AIzaSyATMDZq3gko-cDvsjBjclu8_fK2pImZ0vE",
  authDomain: "kwitter-chat-463cd.firebaseapp.com",
  databaseURL: "https://kwitter-chat-463cd-default-rtdb.firebaseio.com",
  projectId: "kwitter-chat-463cd",
  storageBucket: "kwitter-chat-463cd.appspot.com",
  messagingSenderId: "382990099175",
  appId: "1:382990099175:web:c55b7f12583fa4f79eb842",
  measurementId: "G-G33X2KFT0S"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
    console.log(firebase_message_id);
    console.log(message_data);
    name1 = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name1_with_tag = "<h4>" + name1 + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button = "<button class='btn btn-warning' id=" + firebase_message_id +" value = "+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class='glyphicon glyphicon glyphicon-thumbs-up>Like: " + like + "</span></button<hr>";

    row = name1_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML += row;
} });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
  button_id = message_id;
  likes=document.getElementById(button_id).value;
  updated_likes = Number(likes) + 1;
  console.log(updated_likes);

  firebase.database().ref(room_name).child(message_id).update({
    like:updated_likes
  });

}