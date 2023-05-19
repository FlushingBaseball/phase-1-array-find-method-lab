
  
  function superbowlWin(record){
      

    const win = record.find((yearToTest) => yearToTest.result === 'W');
        

        if (win){
            return win.year
        }
        else {
            return undefined
        }

    
}

superbowlWin(record)

