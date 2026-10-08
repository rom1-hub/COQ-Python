/* COQ — Progreso global. Extraído de V43 sin cambios de comportamiento. */
function markStageComplete(){
 localStorage.setItem("coq-stage-complete-"+location.pathname,"1");
 const pageComplete=document.querySelector("#completeBox");
 if(pageComplete)pageComplete.classList.remove("hidden");
}
