import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import './sass/styles.scss';
import { DocLocCall } from "./../src/business-logic.js";

$(document).ready(function() {
  $(".lookCondition").click(function() {
    $(".output").html("");

    if($("#condition").val() == ""){
      alert("Please input what hurts.");
    } else {
      const freshApi = new DocLocCall();
      const promise = freshApi.runGithub();

      promise.then(function(response) {
        const body = JSON.parse(response);
        const input = $("#condition").val();
        body.data.forEach(function(index){
          for (let i = 0; i < index.specialties.length; i++) {
            if (index.specialties[i].description.match(input)) {
              const pic = index.profile.image_url;
              $(".output").append("<img src='" + pic + "'>");
              const bio = index.profile.bio;
              $(".output").append("<p>" + bio + "</p>");
              const address = index.practices[0].visit_address.street;
              const city = index.practices[0].visit_address.city;
              $(".output").append("<p>This doctor's address is: " + address + ", located in " + city + " Oregon.</p>");
              const phone = index.practices[0].phones[0].number;
              $(".output").append("<p>This doctor's phone number is: " + phone + ".</p>");
              const availability = index.practices[0].accepts_new_patients;
              $(".output").append("<p>It is " + availability + " that this doctor is accepting new patients.");
              if (typeof index.practices[0].website == "string") {
                const website = index.practices[0].website;
                $(".output").append("<p>Visit this doctor's website at: " + website + "</p>");
              }
              break;
            }
          }
        });
        if($(".output").text() == ""){
          const noResult = "I'm sorry, but no doctors in Portland, OR have the training to treat your '" + input + ".' Please try using a different word to describe where you are experiencing pain.";
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
      const freshApi = new DocLocCall();
      const promise = freshApi.runGithub();

      promise.then(function(response) {
        const body = JSON.parse(response);
        const input = $("#doctor").val();
        body.data.forEach(function(index){
          if (index.profile.bio.match(input)) {
            const pic = index.profile.image_url;
            $(".output").append("<img src='" + pic + "'>");
            const bio = index.profile.bio;
            $(".output").append("<p>" + bio + "</p>");
            const address = index.practices[0].visit_address.street;
            const city = index.practices[0].visit_address.city;
            $(".output").append("<p>This doctor's address is: " + address + ", located in " + city + " Oregon.</p>");
            const phone = index.practices[0].phones[0].number;
            $(".output").append("<p>This doctor's phone number is: " + phone + ".</p>");
            const availability = index.practices[0].accepts_new_patients;
            $(".output").append("<p>It is " + availability + " that this doctor is accepting new patients.");
            if (typeof index.practices[0].website == "string") {
              const website = index.practices[0].website;
              $(".output").append("<p>Visit this doctor's website at: " + website + "</p>");
            }
          }
        });
        if($(".output").text() == ""){
          const noResult = "I'm sorry, but " + input + " is not a doctor in Portland, OR.";
          $(".output").append("<p>" + noResult + "</p>");
        }
      }, function(error) {
        $('.output').text(`There was an error processing your request: ${error.message}`);
      })

    }
  });
});
