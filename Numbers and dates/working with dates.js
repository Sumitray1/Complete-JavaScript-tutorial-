//In this session we learn about inserting date in our js program there are various ways of inserting date into our program but few of them are given below

//1> first method------> to get current date
const today = new Date();
console.log(today);
//2> second method------>to get deatials of certain date
const details = new Date(" december 05 2030 18:05:41");
console.log(details);
//3> third method------> to pass some date deatials nad get some certain info form that file

const da = new Date(2037, 05, 11, 15, 12, 13); //here sequnce work as (year, month, day, hour, minute, second)
console.log(da);

// and to get require data form the given data like geting year month ,time etc we can do this -->
console.log(da.getFullYear()); //to get year from required dates
console.log(da.getMonth()); //to get month;
console.log(da.getDate()); //to get days in month number
console.log(da.getDay()); //to get days in week
console.log(da.getHours()); //to get hours form dates
console.log(da.toISOString()); //to conver date in intersational standard format
console.log(da.getTime()); // to see milliseconds that has passed since jan 1 1970;
console.log(new Date(2128325233000)); // to conver miilsecons in the date format
console.log(Date.now()); // to get miilsecond till now

//we can also set i.e. update the dates which is we just used in our program just us var_Names.setFullYear()---> etc
da.setFullYear(2000);
console.log(da);
