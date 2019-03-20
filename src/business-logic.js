export class apiCall {
  runGithub() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://api.github.com/users/Doriswarren/repos";
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
