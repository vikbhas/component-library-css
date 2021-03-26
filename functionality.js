function buttonOnClick(id){
    const modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function spanOnClick(id){
    const modal = document.getElementById("myModal");
    modal.style.display = "none";
}


window.onclick = function(event) {
    const modal = document.getElementById("myModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


function validateForm() {
  console.log("HI")
  const fname = document.forms["form"]["fname"].value;
  const fnameValidate = document.getElementById("fname-validate");
  console.log(fname)
  console.log(fnameValidate.className)
  if(fname === ""){
    fnameValidate.className = "fa fa-times-circle"; 
  }else{
    fnameValidate.className = "fa fa-check-circle";
  }

  const lname = document.forms["form"]["lname"].value;
  const lnameValidate = document.getElementById("lname-validate");
  console.log(lname)
  console.log(lnameValidate.className)
  if(lname === ""){
    lnameValidate.className = "fa fa-times-circle"; 
  }else{
    lnameValidate.className = "fa fa-check-circle";
  }
}