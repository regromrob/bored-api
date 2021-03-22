// //Example fetch using pokemonapi.co
// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('#choice').value
//   // console.log(choice)
//   const url = 'http://www.boredapi.com/api/activity?type='+choice

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h2').innerText=data.activity
//         // if(choice==='music'){
//         //   document.querySelector('h2').innerText=data.type
        
//         // }
        
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

document.querySelector('button').addEventListener('click', boredom)

async function boredom(){
  const choice = document.querySelector('#choice').value
  const res = await fetch('http://www.boredapi.com/api/activity?type='+ choice)
  const data = await res.json()
  console.log(data)
  document.querySelector('h2').textContent = data.activity

  try{
    console.log('i work')
  } catch(error){
    console.error(error)
  }
}
boredom()
