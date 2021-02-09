const app = require('./app')
//Database
require('./database')

//Server
app.listen(app.get('port'),() =>{
    console.log(`Server listening on port ${app.get('port')}`);
})