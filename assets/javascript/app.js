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

     

      var newTrain = {
          name: name,
          destination: destination,
          firstTrain: firstTrain,
          frequency: frequency,
      };

      //Upload train data to database
      database.ref().push(newTrain);

      alert("New train added");
      

      $("#search-name").val("");
      $("#search-destination").val("");
      $("#search-time").val("");
      $("#search-frequency").val("");

      return false;
  });

  database.ref().on("child_added", function (childSnapshot, prevChildkey){

    //Store to variable
    var train = childSnapshot.val().name;
    var destination = childSnapshot.val().destination;
    var firstTrain = childSnapshot.val().firstTrain;
    var frequency = childSnapshot.val().frequency;

    var currentTime = moment();

    var differentTime = moment().different(moment.unix(firstTrain), "minutes");
    var timeRemainder = differentTime % frequency;
    var minutes = frequency - timeRemainder;
    var nextTrainArrival = moment().add(minuts, "m").format("HH:mm");

    //Append train info to table
    $("#train-table > tbody").append("<tr><td>" + train + "</td><td>" + destination + "</td><td>" + frequency + "mins"
    + "</td><td>" + nextTrainArrival + "</td><td>" + minutes + "</td></tr>");
  });