const express = require('express');
const session = require('express-Session');
const path = require('path');
const App = express();
const PORT = 3011;

const authRoutes = require('./routes/authRoutes');

App.use(express.json());
App.use(express.urlencoded({Extended: true }));
App.use(express.static(path.join(__dirname, 'Public')))

App.use(session({
    secret: 'Clave_Ultra_Secreta',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: false,
        maxAge: 100*30*5
    }
}));

App.use('/api', authRoutes); 

App.listen(PORT, () => {
    console.log(`[LOG] El servidor esta funcionando en http://localhost:${PORT}`);
});
