const express = require('express');
const graphqlHTTP = require('express-graphql');
const app = express();
import schema from './query'


const cors = require('cors')

app.use('/graphql', cors(), graphqlHTTP({
  schema,
  graphiql:true
}))


app.listen(3000)
console.log("connected to 3000")
