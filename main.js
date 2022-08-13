//Input how many hours you have slept in a week
const getSleepHours = day => {
switch (day) {
  case 'monday':
  return 8;
  case 'tuesday':
  return 7;
  case 'wednesday':
  return 6;
  case 'thursday':
  return 6;
  case 'friday':
  return 6;
  case 'saturday':
  return 6;
  case 'sunday':
  return 6;
}
};

//console.log (getSleepHours('monday')); 

const getActualSleepHours = () => 
getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

//how many hours you should slept in a week
const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours*7;
}

// test function work correctly
//console.log(getActualSleepHours());
//console.log(getIdealSleepHours());

// calculate and console a sleep debt 
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  
  if (actualSleepHours === idealSleepHours) {
  console.log ('You have an ideal schedule!')
  }
  else if (actualSleepHours < idealSleepHours) {
  console.log ('You should have a rest! Your sleep debt is ' + (idealSleepHours - actualSleepHours)  + ' hours!');
  }
  else {
  console.log ('You sleep to much! Your sleep debt is ' + (actualSleepHours - idealSleepHours) + 'hours!');
  }
}
calculateSleepDebt();
