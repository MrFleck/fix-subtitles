// 34,678
// const fs = require('fs/promises');

// async function example() {
//   try {
//     const data = await fs.readFile('/home/felipe/Videos/Billions/S06/BillionsS06E09/BillionsS06E09.srt', { encoding: 'utf8' });
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }
// example();


const fs = require('fs');
const readline = require('readline');
  
// Creating a readable stream from file
// readline module reads line by line 
// but from a readable stream only.
const file = readline.createInterface({
    input: fs.createReadStream('/home/felipe/Videos/Billions/S06/BillionsS06E09/BillionsS06E09.srt'),
    output: process.stdout,
    terminal: false
});
  
// Printing the content of file line by
//  line to console by listening on the
// line event which will triggered
// whenever a new line is read from
// the stream
file.on('line', (line) => {
    let init = line.slice(0, 2);
    if (init == '00'){
        let date = new Date('August 19, 1975 00:00:00');
        let startAndEnd = line.split(' --> ');
        //START TIMES
        let timesStart = startAndEnd[0].split(':');
        // let hourStart = timesStart[0];
        // let minutesStart = timesStart[1];
        // let secondsStart = timesStart[2];

        //END TIMES
        let timesEnd = startAndEnd[1].split(':');
        // let hoursEnd = timesEnd[0];
        // let minutesEnd = timesEnd[1];
        // let secondsEnd = timesEnd[2];

        let retornoStart = addHour(date, timesStart);
        let retornoEnd = addHour(date, timesEnd);
        
        console.log(`${retornoStart.getHours()}:${retornoStart.getSeconds()}`);
        console.log(retornoEnd);

        // console.log(`inicio: ${hourStart}:${minutesStart}:${secondsStart} | fim: ${hoursEnd}:${minutesEnd}:${secondsEnd} `);

    }
});

function addHour(date, time){
    date.setHours(time[0], time[1]);
    return date;
}


function subtractSeconds(numOfSeconds, date = new Date()) {
    date.setSeconds(date.getSeconds() - numOfSeconds);
  
    return date;
}

  