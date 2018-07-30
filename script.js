function sidebarOpen() {
  document.getElementById("sidebarContent").style.display = "block";
};

function sidebarClose (){
  document.getElementById('sidebarContent').style.display = 'none';
};


var regMember = Math.floor(Math.random(1000) * 32004);
document.getElementById("regMember").innerHTML = regMember;

var onMember = Math.floor(Math.random(1000) * 32204);
document.getElementById("onlineMember").innerHTML = onMember;
