const weatherForm = document.querySelector('form');
const errorElement = document.getElementById('error-data');
const resultElement = document.getElementById('result-data');

// weatherForm.addEventListener('submit', (event) => {
//     event.preventDefault();

//     const location = document.getElementById('location-input').value;

//     errorElement.innerText = '';
//     resultElement.innerText = 'Loading...';

//     const url = 'http://localhost:3000/weather?address=' + location;

//     fetch(url).then((response) => {
//         response.json().then((data) => {
//             console.log(data);
//             if (data.error) {
//                 resultElement.innerHTML = '';
//                 errorElement.innerText = data.error;
//             } else {
//                 errorElement.innerText = '';
//                 var result = 'Location : ' + data.location + '\n';
//                 result = result + 'The weather is ' + data.summary + '\n';
//                 result = result + 'The temperature is ' + data.temperature + ' degrees with ' + data.precipitation + '% chance of rain';

//                 resultElement.innerText = result;
//             }
//         });
//     });
// });