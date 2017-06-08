const BASE_URL = '/api/drinks/';

function getBars() {
  return fetch(BASE_URL)
  .then(response => response.json())
  .then(bars => bars);
}

// getAbilityList() {
//     fetch('http://pokeapi.co/api/v2/ability', {
//       method: 'get'
//     })
//     .then((response) => response.json())
//     .then(data => data.results)
//     .then(data => {
//       this.setState({
//         abilityList: data
//       })
//     })
//     .catch((error) => {
//       this.setState({errorMessage: 'cannot get Poke ability'})
//       console.log(error)
//       console.error(error)
//     })
//   }


export default {
  getBars
};
