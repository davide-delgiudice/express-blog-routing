// importo express
const express = require('express');

// inizializzo express nella variabile app
const app = express();

// definisco il numero di porta
const port = 3000;


// definisco use per richiamare gli asset statici nella cartella public
app.use(express.static('public'));

// definisco la rotta base dell'app
app.get('/', (req, res) => {
    res.send('Server del mio blog');
})


// importo il router dei post
const routerPosts = require('./routers/routerPosts')

// vado ad utilizzare routerPosts
app.use ('/posts', routerPosts);


// impostiamo il server in ascolto sulla porta stabilita
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})