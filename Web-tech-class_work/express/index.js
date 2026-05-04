const express = require('express');
const app = express();
const port = 3000;

// function checkRoute(req, res, next) {
//     console.log(req.url);
//     next();  
// }
// app.use(checkRoute);
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use((requ,res,next) => {
    console.log('Data revised, ' + new Date());
    
});

app.get('/contact_us',(req,res) => {
res.send('Hello from the contact us page!');
});

app.get('/about', (req, res) => {
res.send(  'Hello from the About page!' );
});

app.listen(port, () => {  
    console.log(`-----Example app listening at http://localhost:${port}`);
});