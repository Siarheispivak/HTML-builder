const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const os = require('os');


const filePath = path.join(__dirname, 'writeText.txt');
const out = fs.createWriteStream(filePath);

const rl = readline.createInterface({ input, output });
rl.on('close', () => console.log('Goodbye'));
if (os.platform().slice(0, -2) === 'win') {
  process.on('SIGINT', () => {
    process.exit();
  });
}
rl.question('Напишите свой текст здесь >', (answer) => {
  if (answer === 'exit') {
    rl.close();
  } else {
    rl.on('line', (line) => {
      console.log(`Received: ${line}`);
      if (line === 'exit') {
        rl.close();
      } else {
        out.write(line);
      }
    });
    console.log(`Это ваш текст, который вы написали: ${answer}`);
    out.write(answer);
  }
});


