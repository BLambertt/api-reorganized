//fichier contenant les routes

import express from 'express';

import {
    getAllProducts

} from '../controllers/ProductsControllers.js';

const router = express.Router();

router.get('/', getAllProducts);         // GET all products


export default router;
