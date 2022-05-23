const fs = require('fs');
const path = require('path');


const way = path.join(__dirname, 'secret-folder');

(async () => {
  try {
    const files = await fs.promises.readdir(way, { withFileTypes: true });
    for (const file of files) {
      if (!file.isDirectory()) {
        console.log(file);
      }
    }
  } catch (err) {
    console.error(err);
  }
})();




// fs.promises.readdir(path.resolve(__dirname, 'secret-folfer'),
//   { withFileTypes: true }).then((files) => {
//     files.forEach(file => {
//       fs.stat(path.join(__dirname, 'secret-folfer', file.name), (err, stats) => {
//         if (err) throw err;
//         if (!stats.isDirectory()) {
//           console.log(`${file.name.split('.')},${stats.size * 0.001}kb`.split(',').join('-'));
//         }
//       });
//     });
//   });


