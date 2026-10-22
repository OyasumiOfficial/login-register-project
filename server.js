import express from 'express'

const app = express()
app.use(express.json())

const port = 3000;
const users = []


app.post("/Register", (req, res) => {
    console.log(req.body) 

    res.send(`Ok post`)
})


app.get("/Register", (req, res) => {
res.json(users)
})


app.listen(3000, () => console.log('Servidor Rodando'))



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
