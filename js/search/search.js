/* Global search service */
const input=document.querySelector("#searchInput"),results=document.querySelector("#searchResults");
const pagePrefix=location.pathname.includes("/pages/")?"":"pages/";
if(input){
 input.addEventListener("input",()=>{
  const t=input.value.trim().toLowerCase();
  if(!t){results.classList.remove("open");return}
  const staticData=[
   ["Les adjectifs possessifs","Grammaire · A1","grammar-possessifs.html"],
   ["Les articles partitifs","Grammaire · A1","stage-partitifs.html"],
   ["Vocabulaire de la nourriture","Vocabulaire · A1","stage-vocabulario.html"],
   ["Prendre — présent","Conjugaison · A1","conjugaison.html"],
   ["En el restaurante y en la cocina","Tema · A1","topic-restaurant.html"]
  ];
  const conjugationData=Object.keys(window.COQ_VERBS||{}).map(verb=>[
   verb,
   "Conjugación",
   "conjugaison.html"
  ]);
  const data=[...staticData,...conjugationData];
  const hits=data.filter(x=>x[0].toLowerCase().includes(t)).slice(0,12);
  results.innerHTML=(hits.length?hits:[["Aún no hay resultados para esta búsqueda","Coq · búsqueda global",""]])
   .map(x=>`<a class="result" href="${x[2]?pagePrefix+x[2]:""}">${x[0]}<small>${x[1]}</small></a>`).join("");
  results.classList.add("open");
 });
 document.addEventListener("click",e=>{if(!e.target.closest(".search-wrap"))results.classList.remove("open")});
}
