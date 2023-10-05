const accountButtons = document.querySelector(".accountButtons");
const buttons = Array.from(document.querySelectorAll(".accountButtons button"));
const forms = Array.from(document.querySelectorAll(".intro form"));
buttons.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    const buttonFormName = button.className.substring(0,6);
    forms.forEach(form=>{
      if(form.classList.contains(buttonFormName)){
        form.classList.toggle("hidden");
      }
    })
    accountButtons.classList.add("hidden");
  })
})
const closeButtons = Array.from(document.querySelectorAll(".closeForm"));
closeButtons.forEach(button=>{
  button.addEventListener('click',(e)=>{
    e.preventDefault();
    const formToClose = button.parentNode;
    formToClose.classList.add("hidden");
    accountButtons.classList.remove("hidden");
  })
})