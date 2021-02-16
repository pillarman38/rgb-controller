var exec = require('child_process').exec
const { spawn } = require('child_process');

var pid = 0

let routeFunctions = {
    changemode: (mode, callback) => {
        
            var newProc = exec(`sudo pkill -9 python3`, (error, stdout, stderr) => {
                if (error) {
                console.error(`error: ${error.message}`);
                return;
                }
            
                if (stderr) {
                console.error(`stderr: ${stderr}`);
                return;
                }
            
                console.log(`stdout:\n${stdout}`);
            })
        
       console.log("mode: ", mode);
       
           var newProc = exec(`sudo python3 ~/dancyPi-audio-reactive-led/python/visualization.py ${mode['mode']}`, (error, stdout, stderr) => {
            if (error) {
            console.error(`error: ${error.message}`);
            return;
            }
        
            if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
            }
        
            console.log(`stdout:\n${stdout}`);
        })
        pid = newProc.pid
        console.log("PID: ", pid);
       }
       
    }

module.exports = routeFunctions