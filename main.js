function performGetRequest1() {
  var getResult = document.getElementById("getresult1");
  getResult.innerHTML = "";
  axios
    .get("http://localhost:3000/todos")
    .then(function(responce) {
      getResult.innerHTML =
        "<pre>" + JSON.stringify(responce.data, null, "\t") + "</pre>";
    })
    .catch(function(err) {
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then(function(response) {
          getResult.innerHTML =
            "<pre>" + JSON.stringify(response.data, null, "\t") + "</pre>";
          console.log(JSON.stringify(response.data, null, "\t"));
        })
        .catch(function(err) {
          getResult.innerHTML =
            "<pre>" + JSON.stringify(err, null, "\t") + "</pre>";
        });
    });
}
