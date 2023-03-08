// only time 
let time = document.getElementById("current-time");
setInterval(() => {
        let d = new Date();
        time.innerHTML = d.toLocaleTimeString();


    }, 1000)
    // var video = document.getElementById("myVideo");
    // video.playbackRate = 0.3;

// let time = document.getElementById("current-time");
// setInterval(() => {
//     let d = new Date();

//     // Display the current time and week
//     time.innerHTML = `${d.toLocaleTimeString()} (Week ${d.getWeek()})`;
// }, 1000);




// let time = document.getElementById("current-time");
// setInterval(() => {
//     let d = new Date();

//     // Display the current week
//     let week = d.getWeek();
//     time.innerHTML = `Week ${week}: ${d.toLocaleTimeString()}`;
// }, 1000);


// let time = document.getElementById("current-time");
// setInterval(() => {
//     let d = new Date();

//     // Add 3 weeks to the date
//     d.setDate(d.getDate() + 21);

//     // Adjust the month and year if necessary
//     if (d.getDate() < 21) {
//         d.setMonth(d.getMonth() + 1);
//     }
//     if (d.getMonth() === 12) {
//         d.setFullYear(d.getFullYear() + 1);
//         d.setMonth(0);
//     }

//     time.innerHTML = d.toLocaleTimeString();
// }, 1000);

// alert("sujan")
// let time = document.getElementById("current-time");
// setInterval(() => {
//     let d = new Date();
//     // d.setDate(d.getDate() + 14);
//     d.setDate(d.getDate() + 14);

//     time.innerHTML = d;
// }, 1000)





// try 
// let time = document.getElementById("current-time");
// setInterval(() => {
//     let numOfWeeks = 4;
//     let totalDays = (numOfWeeks * 7);
//     let todaysDate = new Date();
//     todaysDate.setDate(now.getDate() + totalिDays);
// }, 1000);

// var now = new Date();
// now.setDate(now.getDate()+14);
// alert(now);


// let click = document.getElementById("click");
// setInterval(() => {
//         var now = new Date();
//         now.setDate(now.getDate() + 14);

//     }, 1000)
// alert(click);


// var now = new Date();
// now.setDate(now.getDate() + 14);
// alert(now);

// let time = document.getElementById("current-time");
// setInterval(() => {
//     let date = new Date(); // current date

//     // Add 3 weeks to the date
//     date.setDate(date.getDate() + 21);

//     // Adjust the month and year if necessary
//     if (date.getDate() < 21) {
//         date.setMonth(date.getMonth() + 1);
//     }
//     if (date.getMonth() === 12) {
//         date.setFullYear(date.getFullYear() + 1);
//         date.setMonth(0);

//     }
//     return date;

// })

// console.log(date); // Outputs the new date with 3 weeks added