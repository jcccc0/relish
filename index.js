const express = require('express')
const app = express()
const port = 6780

// For parsing application/json
app.use(express.json());
 
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.post('/relish', (req, res) => {
	console.log('request->',"Body: ", req.body, "Headers",req.headers)
	res.send()
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})