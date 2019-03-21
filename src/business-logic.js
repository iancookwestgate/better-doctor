export class apiCall {
  runGithub() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let api_key = "9fbdddd24530392616432c7c9bf1c241";
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=41.8781,-87.6298,100&skip=2&limit=10&user_key=' + api_key;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}
