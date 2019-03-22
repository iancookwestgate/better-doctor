export class docLocCall {
  runGithub() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let api_key = process.env.exports.apiKey;
      let url = 'https://api.betterdoctor.com/2016-03-01/doctors?location=45.5122,-122.6587,100&skip=2&limit=30&user_key=' + api_key;
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
