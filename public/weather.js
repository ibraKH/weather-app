const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

let date = new Date();
let day = date.getDate();

document.getElementById("day").innerHTML = day;
document.getElementById("month").innerHTML = monthNames[date.getMonth()];