import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { apiCall } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".callApi").click(function() {
    let freshApi = new apiCall();
    let promise = freshApi.runGithub();

    promise.then(function(response) {
      let body = JSON.parse(response);
      console.log(body);
      $('.output').html(body[0].owner[1]);
      console.log(body[19]);
    }, function(error) {
      $('.showErrors').text(`There was an error processing your request: ${error.message}`);
    })

  });
});
