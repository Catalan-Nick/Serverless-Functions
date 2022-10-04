
document.addEventListener('DOMContentLoaded', () => {
        const homeBtn = document.getElementById('home-btn');
        
        const fetchKantoBtn = document.getElementById('fetch-kanto-btn');
        const fetchHoennBtn = document.getElementById('fetch-hoenn-btn');
        const fetchJohtoBtn = document.getElementById('fetch-johto-btn');
        const fetchSinnohBtn = document.getElementById('sinnoh-btn');
        const fetchUnovaBtn = document.getElementById('unova-btn');
        const fetchAlolaBtn = document.getElementById('alola-btn');
        const responseText = document.getElementById('response-output');
        
        // dynamically creates cards for each pokemon in selected region
        async function display(object){
          const responseName = JSON.stringify(object.pokemon_species.name);
          const pokeName = responseName.replaceAll('"', '')
          const responseUrl = JSON.stringify(object.pokemon_species.url);
          
          //get pokemon info by name
          const pokeData = await fetch('/.netlify/functions/getPokeData', {
            method: 'POST',
            body: JSON.stringify({
              name: object.pokemon_species.name
            })

        }).then(pokeData => pokeData.json())
          
          const pokemonInfo = pokeData.pokemon
          
          const card = document.createElement('div');
          const cardImg = document.createElement('img');
          const cardBody = document.createElement('div');
          const cardTitle = document.createElement('h5');
          const cardText = document.createElement('p');
          const cardLink = document.createElement('a');

          card.classList.add("card", "m-2", "col-sm-3", "bg-card");
          cardImg.classList.add("card-img-top");
          cardBody.classList.add("card-body", "bg-danger", "rounded", "mb-2");
          cardTitle.classList.add("card-title", "text-outline");
          cardText.classList.add("card-text");
          //cardLink.classList.add("btn", "btn-primary");

          cardImg.src = pokemonInfo.sprites.front_default

          card.append(cardImg);
          card.append(cardBody);
          cardBody.append(cardTitle);
          cardBody.append(cardText);
          //cardBody.append(cardLink);
        
          cardTitle.innerText = "# " + pokemonInfo.id
          cardText.innerText = pokeName
          responseText.append(card)
        }

          fetchKantoBtn.addEventListener('click', async () => {
            const response = await fetch('/.netlify/functions/pokedex', {
              method: 'POST',
              body: JSON.stringify({
                region: 'kanto'
              })
            }).then(response => response.json())
            const pokemon = JSON.stringify(response.pokemon)
            const obj = JSON.parse(pokemon)
            responseText.innerText = ""
            console.log(obj)
            obj.forEach(display);
          })

          fetchHoennBtn.addEventListener('click', async () => {
            const response = await fetch('/.netlify/functions/pokedex', {
              method: 'POST',
              body: JSON.stringify({
                region: 'hoenn'
              })
            }).then(response => response.json())
            const pokemon = JSON.stringify(response.pokemon)
            const obj = JSON.parse(pokemon)
            responseText.innerText = ""
            obj.forEach(display)
          })

          fetchJohtoBtn.addEventListener('click', async () => {
            const response = await fetch('/.netlify/functions/pokedex', {
              method: 'POST',
              body: JSON.stringify({
                region: 'original-johto'
              })
            }).then(response => response.json())
            const pokemon = JSON.stringify(response.pokemon)
            const obj = JSON.parse(pokemon)
            responseText.innerText = ""
            obj.forEach(display);
      
          })

          fetchSinnohBtn.addEventListener('click', async () => {
            const response = await fetch('/.netlify/functions/pokedex', {
              method: 'POST',
              body: JSON.stringify({
                region: 'original-sinnoh'
              })
            }).then(response => response.json())
            const pokemon = JSON.stringify(response.pokemon)
            const obj = JSON.parse(pokemon)
            responseText.innerText = ""
            obj.forEach(display);
      
          })

          fetchUnovaBtn.addEventListener('click', async () => {
            const response = await fetch('/.netlify/functions/pokedex', {
              method: 'POST',
              body: JSON.stringify({
                region: 'original-unova'
              })
            }).then(response => response.json())
            const pokemon = JSON.stringify(response.pokemon)
            const obj = JSON.parse(pokemon)
            responseText.innerText = ""
            obj.forEach(display);
      
          })

          fetchAlolaBtn.addEventListener('click', async () => {
            const response = await fetch('/.netlify/functions/pokedex', {
              method: 'POST',
              body: JSON.stringify({
                region: 'original-alola'
              })
            }).then(response => response.json())
            const pokemon = JSON.stringify(response.pokemon)
            const obj = JSON.parse(pokemon)
            responseText.innerText = ""
            obj.forEach(display);
      
          })

        homeBtn.addEventListener('click', async () => {
          const response = await fetch('/.netlify/functions/hello-world')
          .then(response => response.json())
          responseText.innerText = JSON.stringify(response.message);
          responseText.classList.add("text-xl-center", "text-outline")
        })
        //home on page load
        homeBtn.click();
      })