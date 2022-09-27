
      document.addEventListener('DOMContentLoaded', () => {
        const fetchBtn = document.getElementById('fetch-btn');
        const fetchKantoBtn = document.getElementById('fetch-kanto-btn');
        const fetchHoennBtn = document.getElementById('fetch-hoenn-btn');
        const responseText = document.getElementById('response-output');
        

        function display(object){
          const responseName = JSON.stringify(object.pokemon_species.name);
          const responseUrl = JSON.stringify(object.pokemon_species.url);

          const card = document.createElement('div');
          const cardBody = document.createElement('div');
          card.classList.add("card", "bg-primary")
          card.innerText = responseName
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
          console.log(obj[0])
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
          console.log(obj[0])
          obj.forEach(display)
        })

        fetchBtn.addEventListener('click', async () => {
          const response = await fetch('/.netlify/functions/hello-world')
          .then(response => response.json())
          responseText.innerText = JSON.stringify(response.message);
        })
      })