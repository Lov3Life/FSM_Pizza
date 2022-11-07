var DisabledNav = document.querySelectorAll(".disabled-nav");

for (let i = 0; i < DisabledNav.length; i++) {
    DisabledNav[i].addEventListener("click", () =>{
        alert("Sekcja chwilowo nieczynna!" + " Przepraszamy za utrudnienia!");
    });
};