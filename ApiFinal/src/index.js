const app = require('./app');

async function main(){
    await app.listen(3000)
    console.log('server is running')
}

app.listen(3000, ()=> console.log('server on port '))