// GET ELEMENTS TO DISPLAY FROM HTML
const displayMonth = document.getElementById("dispmonths");
const displayYear = document.getElementById("dispyears");
const displayDays = document.getElementById("dispday");

function calculate() {
  // GET ELEMENTS TO CALCULATE FROM HTML
  const year = document.getElementById("year").value.trim();
  const days = document.getElementById("day").value.trim();
  const month = document.getElementById("month").value.trim();
const dayerrormsg = document.getElementById("dayerrormsg");
const montherrormsg = document.getElementById("montherrormsg");
const dayHead = document.getElementById("dayHead");
const monthHead = document.getElementById("monthHead");
const yearHead = document.getElementById("yearHead");
const yearerrormsg = document.getElementById("yearerrormsg");
const currentDate = new Date();
const currentDay =  String(currentDate.getDate()).padStart(2, '0');
const currentMonth = Number(currentDate.getMonth() + 1); // getMonth() returns 0-11, so we add 1
const currentYear = currentDate.getFullYear();
let NumOfDaysInMonth = 31;
const shortMonths = NumOfDaysInMonth = 30;

// CHECKS IF INPUT VALUES ARE NULL AND RETURNS AN ERROR
  if (year === "" || days == "" || month === "") {
    dayerrormsg.textContent="Must be a valid date";
    dayHead.style.color = "#ff5757";
    monthHead.style.color = "#ff5757";
    yearHead.style.color = "#ff5757";
    year.style.borderColor = 'red';
    days.style.border.color= "#ff5757";
    month.style.border.color= "#ff5757";
  } 

  // IF INPUT FIELDS ARE NOT EMPTY THEN CHECK IF YEARS ARE VALID AND IF DAY ARE VALID AND IF MONTH ARE VALID
  else if(year < 1800 &&  year >= 2024 || isNaN(year) && days < 1 && days > 31 || isNaN(days) && month < 1 &&  month > 12 || isNaN(month)){
    dayerrormsg.textContent="Must be a valid date";
    year.style.borderColor = "#ff5757";
    days.style.borderColor= "#ff5757";
    month.style.borderColor= "#ff5757";
  }

  // IF ALL INPUT FIELDS ARE VALID CHECK IF YEARS IS VALID ONLY IF NOT GIVE A PERSONALIZED ERROR 
  else if (year < 1800 || year >= 2024 || isNaN(year)) {
      yearerrormsg.textContent="Must be a valid year";
      yearHead.style.color = "#ff5757";
      year.style.borderColor = "#ff5757";
    } 

    // IF ALL INPUT FIELDS ARE VALID CHECK IF DAYS IS VALID ONLY IF NOT GIVE A PERSONALIZED ERROR 
    else if (days < 1 || days > 31 || isNaN(days)) {
        dayerrormsg.textContent="Must be a valid day";
        dayHead.style.color = "#ff5757";
        days.style.borderColor= "#ff5757";
    } 

    // IF ALL INPUT FIELDS ARE VALID CHECK IF MONTHS IS VALID ONLY IF NOT GIVE A PERSONALIZED ERROR 
  else if (month < 1 || month > 12 || isNaN(month)) {
    montherrormsg.textContent ="Must be a valid month";
    monthHead.style.color = "#ff5757";
    month.style.borderColor= "#ff5757";
} 
else if(NumOfDaysInMonth && month == 9 || month == 4 || month == 6 || month == 11){
  dayerrormsg.textContent="Must be a valid date";
  dayHead.style.color = "#ff5757";
  monthHead.style.color = "#ff5757";
  year.style.borderColor = "#ff5757";
  days.style.borderColor= "#ff5757";
  month.style.borderColor= "#ff5757";
}

// IF ALL THESE CONDITIONS PASSED  THEN REMOVE ALL ERROR MESSAGES , CHANGE THE LABEL OF EACH INPUT FIELD FROM RED TO THE PREVIOUS COLOR , CALCULATE THE
// DAYS FROM THIER LAST BIRTHDAY -- WHICH RESETS EACH MONTH , CALCULATE THE MONTHS FROM THIER LAST BIRTHDAY -- IF THE BIRTHMONTH IS GREATER THAN THE CURRENT 
// MONTH ADD THE VALUE OF THE CURRENT MONTH WHILE CALCULATING == BECAUSE IT SHOWS THIER LAST BIRTHDAY WAS THE YEAR BEFORE ,THEN CALCULATE THE AGE -- CURRENT MONTH
// YEAR MINUSTHIER YEAR OF BIRTH -- IF THE CURRENT MONTH IS LESS THAN THIER BITHMONTH IT SHOWS THIER  BIRTHDAY WAS THE YEAR BEFORE HENCE HAS NOT BEEN CELEBRATED 
// THIS YEAR , SO FROM THE AGE SUBTRACT 1 YEAR ... THEN DISPLAY ALL THE VALUES 
  else {
    montherrormsg.textContent = "";
    dayerrormsg.textContent = "";
    yearerrormsg.textContent = "";
    dayHead.style.color = " rgb(107 114 128)";
    monthHead.style.color = " rgb(107 114 128)";
    yearHead.style.color = " rgb(107 114 128)";
   
    // CALCULATE DAYS
    let AgeInDays =    NumOfDaysInMonth - days + Number(currentDay) + 1 ;
    
    if (AgeInDays >= 31){
        AgeInDays = AgeInDays % 31;
      }

      if(month == currentMonth && days > Number(currentDay)){
        AgeInDays = days - currentDay;
      }

     if(month == 9 || month == 4 || month == 6 || month == 11){
       AgeInDays =  shortMonths - days + Number(currentDay)
       if (AgeInDays > shortMonths){
        AgeInDays = AgeInDays % 30;
      }
     }

    // CALCULATE MONTH
    let AgeInMonths =  currentMonth - month ;
     if (month == currentMonth) {
     AgeInMonths = AgeInMonths + 1 ; // If the birth month is the current month
 }
     if (month > currentMonth){
        AgeInMonths = currentMonth + 12 - month ;  
     }
     if(currentDay < days){
       AgeInMonths = AgeInMonths - 1;
     }
     // febuary
     if(month === 2){
      if(days > 28){
        AgeInMonths = AgeInMonths - 1;
      }
    
     }

    // CALCULATE YEAR
    let AgeInYear = currentYear - year;
 if(month > currentMonth){
    AgeInYear = AgeInYear - 1;
 }
 if(days >= currentDay && month ==currentMonth ){
  AgeInYear--
 }
    // display calculated values
    displayYear.textContent = AgeInYear;
    displayMonth.textContent = AgeInMonths;
    displayDays.textContent = AgeInDays;
  }
}

