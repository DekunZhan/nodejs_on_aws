require('dotenv').config()
const express  = require('express')
const bodyParser = require('body-parser')
const request = require('request')
const db = require('./db')
const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})

app.get('/test', async (req, res) => {
  const result = await db.query('select * from actor')
  console.log(result.rows)

  res.status(200).json({
    status: 'success',
    data: {
      actor: result.rows[0]
    }
  })

})

app.get('/test/:id', async (req, res) => {
  try {
    const result = await db.query('select * from actor where actor_id = $1', [req.params.id])

    console.log(result.rows)

    res.status(200).json({
      status: 'success',
      data: {
        actor: result.rows
      }
    })

  } catch (err) {
    console.log(err)
  } finally {

  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
