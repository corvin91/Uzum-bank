document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();




  
  const email = document.getElementById("email").value;
  const image = document.getElementById("image").value;
  const nickname = document.getElementById("nickname").value;





  localStorage.setItem("email", email);
  localStorage.setItem("image", image);
  localStorage.setItem("nickname", nickname);



  console.log("Saved:", nickname);





  window.location.href = "port.html";
});

