//const fs = require('fs)');

//reading files
//fs.readFile('./docs/blog1.txt', (err, data) => {
//    if (err) {
//        console.log(err);
//    }
//    SVGComponentTransferFunctionElement.log(data.toString());
//});

//console.log('last line');

//writing files
//fs.writeFile('./docs/blog1.txt', 'hello, again' , () => {
//     console.log('file was written');
//});

//..fs.writeFile('./docs/blog2.txt', 'hello, again', () => {
//    console.log('file was written');
//});

//directories
if (!fs.existsSync('/assets')){
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
}else{
fs.mkdir('./assets', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('folder deleted');
})
}

//deleting file
if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log('file deleted');
    })
}





















