//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('#choice').value
  // console.log(choice)
  const url = 'http://www.boredapi.com/api/activity?type='+choice

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText=data.activity
        // if(choice==='music'){
        //   document.querySelector('h2').innerText=data.type
        
        // }
        
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
