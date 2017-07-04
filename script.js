alert ('hi');
function convertTemp(newTemp1,newTemp2){

  if (newTemp1 === 100) {
        console.log (newTemp1 * 9/5 + 32);
  }
  else if (newTemp1 === -40) {
      console.log(newTemp1 * 9/5 + 32);
  }
  else {
    console.log(((newTemp1 - 32) / (9/5)));
  }
}


convertTemp(212,'');
convertTemp(32,'');
convertTemp(65,'');
convertTemp(100,'');
convertTemp(-40,'');
