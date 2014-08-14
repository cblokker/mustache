$(document).ready(function () {
  var trips = [
    {duration: "365 days",    completed: false, user_id: 1, destination_id: 1},
    {duration: "12 days",     completed: true,  user_id: 2, destination_id: 1},
    {duration: "365 seconds", completed: true,  user_id: 2, destination_id: 1},
    {duration: "365 days",    completed: false, user_id: 3, destination_id: 1}
  ];

  var data = {
    users: [
      {
        name: "Chase",
        email: "chase@chase.com",
        trips: [trips[0], trips[1], trips[2], trips[3]]
      },
      {
        name: "Bob",
        email: "bob@bob.com",
        trips: [trips[1], trips[2]]
      },
      {
        name: "Sue",
        email: "sue@sue.com",
        trips: [trips[3]]
      }
    ],
    cat: "meow",
    dog: "woof"
  };


  var template1 = $("#test1").html();
  var html1 = Mustache.render(template1, data);
  $('body').append(html1);


  // var template2 = $("#test2").html();
  // var html2 = Mustache.render(template2, "meow");

  $('body').append(html2);
});