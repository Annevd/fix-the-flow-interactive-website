/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

// Zorgt ervoor dat je op de zoekbalk kan klikken zonder dat het menu weggaat

document.getElementById("myDropdown").addEventListener("click",
function(e) {

e.stopPropagation();

});

  
// Dark mode:

const body = document.querySelector('body')
toggle = body.querySelector(".toggle"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text");

modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
        
    }
});


// Popup warning

const showButton = document.getElementById("button");
const dialog = document.querySelector("dialog");
const closeButton = document.getElementById("popup-close");
const deleteButton = document.getElementById("popup-delete");
const dialogSuccess = document.getElementById("dialog-success");
const closeButtonSuccess = document.getElementById("success-close");


// Openen waarchuwing popup
showButton.addEventListener("click", () => {
  dialog.showModal(); //opent de poup als je op de prullenbak klikt
  document.querySelector("body").classList.add("dont-scroll"); //toggled de class dat ervoor zorgt dat je in de popup niet kan scrollen
});

// Sluit de waarschuwing popup als gebruiker op nee klikt
closeButton.addEventListener("click", () => {
  dialog.close();
  document.querySelector("body").classList.remove("dont-scroll"); // verwijderd de classlist zodat je weer kan scrollen
});

// Opent succesvolle melding als gebruiker op ja klikt
deleteButton.addEventListener("click", () => {
  dialog.close();
  dialogSuccess.showModal();
} )

// Sluit de succes melding als de gebruiker op het kruisje klikt
closeButtonSuccess.addEventListener("click", () => {
  dialogSuccess.close();
  document.querySelector("body").classList.remove("dont-scroll"); // verwijderd de classlist zodat je weer kan scrollen
})
