document.addEventListener("DOMContentLoaded",()=>{document.getElementById("pokemonName").value=""});const button=document.querySelector(".button");button.addEventListener("click",()=>{const e=document.getElementById("pokemonName").value.toLowerCase();fetch("https://pokeapi.co/api/v2/pokemon/"+e).then(e=>{if(!e.ok)throw new Error("The fetch action is not okay!");return e.json()}).then(e=>{const t=e.sprites.front_default,o=e.name,n=document.getElementById("pokemonSprite");document.getElementById("mypokemonName").innerText=""+o,n.src=t,n.style.display="block"}).catch(e=>console.error("There's an error: "+e))});
//# sourceMappingURL=app.js.map
