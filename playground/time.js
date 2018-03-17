var moment = require('moment');



var someTimeStmap = moment().valueOf();
var createdAt = 111;
var date = moment(createdAt);

console.log(date.format('hh:mm a'));