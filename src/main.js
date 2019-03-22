import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { apiCall } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".lookCondition").click(function() {
    $(".output").html("");

    if($("#condition").val() == ""){
      alert("Please input your condition.");
    } else {
      let freshApi = new apiCall();
      let promise = freshApi.runGithub();

      promise.then(function(response) {
        let body = JSON.parse(response);
        console.log(body);
        let input = $("#condition").val();
        body.data.forEach(function(index){
          for (let i = 0; i < index.specialties.length; i++) {
            if (index.specialties[i].description.match(input)) {
              let pic = index.profile.image_url;
              $(".output").append("<img src='" + pic + "'>");
              let bio = index.profile.bio;
              $(".output").append("<p>" + bio + "</p>");
              let address = index.practices[0].visit_address.street;
              let city = index.practices[0].visit_address.city;
              $(".output").append("<p>This doctor's address is: " + address + ", located in " + city + " Oregon.</p>");
              let phone = index.practices[0].phones[0].number;
              $(".output").append("<p>This doctor's phone number is: " + phone + ".</p>");
              break;
            }
          }
        });
        if($(".output").text() == ""){
          let noResult = "I'm sorry, but " + input + " is not a doctor in Portland, OR.";
          $(".output").append("<p>" + noResult + "</p>");
        }
      }, function(error) {
        $('.output').text(`There was an error processing your request: ${error.message}`);
      })
    }


  });

  $(".lookName").click(function() {
    $(".output").html("");
    if($("#doctor").val() == ""){
      alert("Please input your doctor.");
    } else {
      let freshApi = new apiCall();
      let promise = freshApi.runGithub();

      promise.then(function(response) {
        let body = JSON.parse(response);
        console.log(body);
        let input = $("#doctor").val();
        body.data.forEach(function(index){
          if (index.profile.bio.match(input)) {
            let pic = index.profile.image_url;
            $(".output").append("<img src='" + pic + "'>");
            let bio = index.profile.bio;
            $(".output").append("<p>" + bio + "</p>");
          }
        });
        if($(".output").text() == ""){
          let noResult = "I'm sorry, but " + input + " is not a doctor in Portland, OR.";
          $(".output").append("<p>" + noResult + "</p>");
        }
      }, function(error) {
        $('.output').text(`There was an error processing your request: ${error.message}`);
      })

    }
  });
});
