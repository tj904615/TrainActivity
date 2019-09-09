var firebaseConfig = {
    apiKey: "AIzaSyDkPHAG1JyOjawl6tjYli4zpDaAsRQm4PI",
    authDomain: "trainactivity-210fe.firebaseapp.com",
    databaseURL: "https://trainactivity-210fe.firebaseio.com",
    projectId: "trainactivity-210fe",
    storageBucket: "",
    messagingSenderId: "355726279667",
    appId: "1:355726279667:web:ce95dded90cdb566220886"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();

  // Adding trains Button
  $("#submit").on("click", function() {
      //Get inputs
      var name = $("#search-name").val().trim();
      var destination = $("#search-destination").val().trim();
      var firstTrain = moment($("#search-time").val().trim(), "HH:mm").format("X");
      var frequency = $("#search-frequency").val().trim();

      console.log(name);
      console.log(destination);
      console.log(firstTrain);
      console.log(frequency);

      var newTrain = {
          name: name,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency,
      };
  })