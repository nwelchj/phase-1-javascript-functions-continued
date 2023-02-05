// code your solution here


function saturdayFun( Act = "roller-skate",){
    return(`This Saturday, I want to ${Act}!`);

}
saturdayFun();

function mondayWork(activity = "go to the office"){
    return (`This Monday, I will ${activity}.`);

}
mondayWork()



function wrapAdjective (greeting = "*", name = 'You are') {
    const innerFunction = function (msg = "a dedicated programmer!") {
      return (`${name} ${ greeting}${msg}${greeting}!`);


    };
    return innerFunction;
  }
  ;