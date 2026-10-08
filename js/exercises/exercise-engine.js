/* COQ — Motor global de ejercicios. Extraído de V43 sin cambios de comportamiento. */
/* Exercises: no answer is revealed until every question has been answered. */
document.querySelectorAll(".exercise").forEach(ex=>{
 const questions=[...ex.querySelectorAll(".question")];
 questions.forEach(q=>{
  q.querySelectorAll(".option").forEach(o=>o.addEventListener("click",()=>{
   if(q.dataset.done)return;
   q.dataset.done="1";
   q.dataset.correct=o.dataset.answer==="correct"?"1":"0";
   o.classList.add(q.dataset.correct==="1"?"correct":"wrong");
   q.querySelectorAll(".option").forEach(x=>x.disabled=true);
   const fb=q.querySelector(".feedback");
   if(fb)fb.textContent="Respuesta registrada.";
   const done=questions.filter(x=>x.dataset.done).length;
   const bar=ex.querySelector(".exercise-progress span");
   const txt=ex.querySelector(".exercise-progress-text");
   const pct=Math.round(done/questions.length*100);
   if(bar)bar.style.width=pct+"%";
   if(txt)txt.textContent=`${done} / ${questions.length} respondidas`;
   if(done===questions.length){
    const answers=ex.querySelector(".answers"); if(answers)answers.classList.add("visible");
    const correct=questions.filter(x=>x.dataset.correct==="1").length;
    const score=ex.querySelector(".exercise-score"); if(score)score.textContent=`Resultado: ${correct} / ${questions.length}`;
    const complete=ex.querySelector(".exercise-complete"); if(complete)complete.classList.remove("hidden");
    markStageComplete();
   }
  }));
 });
});
