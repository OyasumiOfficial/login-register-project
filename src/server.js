import express from 'express'
import dotenv from 'dotenv';
import { pool } from './db.js';

import publicRoutes from '../routes/public/register.js'

dotenv.config();

const app = express()
const PORT = process.env.port;

// middlewares
app.use(express.json())
app.use(`/`, publicRoutes)


// Create user - Create
app.post(`/`, async (req, res) => {
    try {
        const { userID, username, email, password } = req.body;
        const [result] = await pool.query(
            'INSERT INTO users (userID, username, email, password) VALUES (?, ?, ?, ?)',
            [userID, username, email, password]
        );
        res.status (201).json({ userID, username, email, password });
    }
     catch (error) {
    console.error('Erro ao criar usuário:', error);

    res.status(500).json({
        error: 'Erro ao criar usuário',
        details: error.message
    });
    }

});
// Show UserName - Read 

// Update UserData - Update


app.listen(PORT, () => console.log(`Servidor Rodando em http://localhost:${PORT}`));



// Routes to create:
// Publics
//     Login 
//     Register


// Privates
//     Home 
//     E-check|
//     Password Reset 
//     EnterResetCode
//     NewPassword


// GET 
// POST 
// PUT/PATCH 
// DELETE
