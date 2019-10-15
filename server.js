const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const candie = require('./routes/candies')
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/candie', candie);
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send(err.message)
  })

app.get('/', async (req, res) => {
    res.json({
      "Homepage": 0
    })
  })

app.post('/candies', async (req, res) => {
    const candie = await Candie.create(req.body)
    res.json({ candie })
  })


app.get('/candies', async (req, res) => {
    const candies = await Candie.findAll()
    res.json({
      candies
    })
  })
  
  
  app.delete('/candies/:id', async (req, res) => {
    await Candie.destroy({ where: { id: req.params.id } })
    res.json({
      message: `Deleted: ${req.params.id}`
    })
  })

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`)
})