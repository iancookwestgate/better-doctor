import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { docLocCall } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".lookCondition").click(function() {
    $(".output").html("");

    if($("#condition").val() == ""){
      alert("Please input what hurts.");
    } else {
      let freshApi = new docLocCall();
      let promise = freshApi.runGithub();

      promise.then(function(response) {
        let body = JSON.parse(response);
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
              let availability = index.practices[0].accepts_new_patients;
              $(".output").append("<p>It is " + availability + " that this doctor is accepting new patients.");
              break;
            }
          }
        });
        if($(".output").text() == ""){
          let noResult = "I'm sorry, but no doctors in Portland, OR have the training to treat your '" + input + ".' Please try using a different word to describe where you are experiencing pain.";
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
      let freshApi = new docLocCall();
      let promise = freshApi.runGithub();

      promise.then(function(response) {
        let body = JSON.parse(response);
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
