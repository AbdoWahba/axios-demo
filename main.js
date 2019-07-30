function performGetRequest1() {
  var getResult = document.getElementById("getresult1");
  getResult.innerHTML = "";
  axios.get("http://localhost:3000/todos").then(function(responce) {
    getResult.innerHTML =
      "<pre>" + JSON.stringify(responce.data, null, "\t") + "</pre>";
    console.log(JSON.stringify(responce.data, null, "\t"));
  });
}
