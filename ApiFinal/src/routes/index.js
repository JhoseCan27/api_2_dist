const {Router} = require ('express');
const router = Router();
const os = require('os');
const path = require('path');
const fs = require('fs');


router.get('/info', (req, res) =>{
    var hostname=os.hostname();
    var today= new Date();
    var now=today.toLocaleString();
    var file_json={"name":hostname, "hora":now}
    res.send(file_json)
    console.log(file_json)
});

router.get('/archivos',(req, res) =>{
    console.log(__dirname)
    console.log(process.cwd()) 
    let ruta = process.cwd()
    
    fs.readdir(ruta, function (err, archivos) {
    if (err) {
    onError(err);
    return;
    }
    let file_json={"ruta":process.cwd(), "archivos":archivos}
    res.send(file_json)
    });
})
module.exports=router   ;
