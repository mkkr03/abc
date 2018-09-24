let  heroes;
fetch("https://my.api.mockaroo.com/mkkr.json?key=1a45b0b0&qty=3")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    heroes=myJson;
render();
  }); 
function render(){

      const htmlSnippet = heroes.map(hero =>
          `
         <div class="email-item email-item-selected pure-g">
            <div class="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar"
class="email-avatar" src="${hero.pic}">
            </div>
   <div class="pure-u-3-4">
                <h5 id="nchange" class="email-name">${hero.name}</h5>
                <h4 id="schange" class="email-subject">${hero.subject}</h4>
                <p id="pchange" class="email-desc">
                   ${hero.paragraph}
                </p>
            </div>
        </div>

`
      )
          .join("");

      const main = document.querySelector("#list1");
      main.innerHTML = htmlSnippet;
}

const c =document.querySelector(".compose");
c.addEventListener("click", function(error){
                                           
  let  h;
fetch("https://my.api.mockaroo.com/mkkr.json?key=1a45b0b0&qty=3")
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    h=myJson;
render();
  }); 
function render(){

      const htmlSnippet = h.map(her =>
          `
         <div class="email-item email-item-selected pure-g">
            <div class="pure-u">
                <img width="64" height="64" alt="Tilo Mitra&#x27;s avatar"
class="email-avatar" src="${her.pic}">
            </div>
   <div class="pure-u-3-4">
                <h5 id="nchange" class="email-name">${her.name}</h5>
                <h4 id="schange" class="email-subject">${her.subject}</h4>
                <p id="pchange" class="email-desc">
                   ${her.paragraph}
                </p>
            </div>
        </div>

`
      )
          .join("");

      const main = document.querySelector("#list2");
      main.innerHTML = htmlSnippet;
}
  
  
                                           });
