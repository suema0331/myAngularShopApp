const express = require('express')
const mongoose = require('mongoose');
const config = require('./config/dev')
const FakeDb = require('./fake')

const productsRoutes = require('./routes/products')

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: false,
  // useCreateIndex: true
}).then(
  () => {
    const fakeDB = new FakeDb();
    fakeDB.initDb()
  }
);

const app = express()

app.use('/api/v1/products',productsRoutes) ///api/v1/productsを叩いたとき

// callback functionなので、serverが/productsにアクセス受け取ったら、呼び出し元で関数実行
// app.get('/products',function(req,res){
//   res.json({'success':true})
// })

const PORT = process.env.PORT || '3001'

app.listen(PORT,function () {
  console.log('running')
})
