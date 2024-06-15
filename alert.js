export const createAlert = ()=>{
  const alerta = document.createElement("section")

  alerta.classList.add("notification__error")
  const $template = document.getElementById("error")

  
  const cloneTemplate = $template.content.cloneNode(true)

  alerta.appendChild(cloneTemplate)
  
  
  const cerrar = alerta.querySelector("#alertClose")


  cerrar.addEventListener("click", () => {
    alerta.classList.add("notification-out");
    setTimeout(() => {
        alerta.remove();
    }, 400); 
  });

  return alerta
}