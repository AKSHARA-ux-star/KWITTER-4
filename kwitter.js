function adduser()
{
    username= document.getElementById("user_name").value;
    localStorage.setItem("user_name" , username);
    window.location = "kwitter_room.html";
}

function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "index.html";
}