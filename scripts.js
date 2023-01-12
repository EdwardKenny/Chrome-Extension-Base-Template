// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   let app_id = document.getElementById('app_id').value;
//   let app_key = document.getElementById('app_key').value;
//   let recipe = document.getElementById('recipe').value;
//   let pre = document.getElementById('response');

//   var url = 'https://api.edamam.com/api/nutrition-details?app_id=' + app_id + '&app_key=' + app_key;

//   var xhr = createCORSRequest('POST', url);
//   if (!xhr) {
//     alert('CORS not supported');
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function () {
//     var text = xhr.responseText;
//     pre.innerHTML = text;
//   };

//   xhr.onerror = function () {
//     alert('Woops, there was an error making the request.');
//   };

//   pre.innerHTML = 'Loading...';
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(recipe);
// }

document.querySelector('#submit-button').addEventListener('click', getRecipes);

function getRecipes(event) {
  event.preventDefault(); // prevent the form from submitting
  let ingredient = document.querySelector("#ingredient").value;
  let apiKey = "YOUR_API_KEY";
  let url = `https://api.edamam.com/search?q=${ingredient}&app_id=0a2f8b4d`;
  // 0a2f8b4d
  // df6d9f9912a7e92d5dbc5e9e64947eee
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Do something with the data
      console.log(data);
      // You can use this data to display the recipes on the popup
    })
    .catch(error => {
      // Handle any errors
      console.log(error);
    });
}

