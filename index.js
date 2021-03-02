const express = require('express')
const app = express()
const db = require('./models')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res)=> {
    res.send('hello james')
})

app.get('/bobby', (req, res)=> {
    //make a user named bobby
    db.User.create({
        name: 'Bobby',
        email: 'Bobby@sue.com',
        meta: {
            age: 29,
            website: 'BobbySue.com'
        }
    }, (err, newUser)=> {
        if (err) {
            console.log(err)
        }
        console.log(newUser)
        res.send(newUser.name)
    })
})


const PORT = 3000
app.listen(PORT, ()=> console.log('the app is listening on' + PORT))