//Ce fichier ne doit pas contenir de logique, de conf ou de paramétrage, sinon il devient vite illisible. Il faut
//séparer et découpler au maximum le code pour pouvoir facilement faire des changements quand nécessaires
//Il est bien plus flexible et facile de maintenir des composants séparés, d'autants plus qu'ils sont découplés.


import express from 'express';

import routes from '/routes/routes.js'



const app = express()
app.use(express.json());


app.use('/products', routes)

export default app

