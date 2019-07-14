module.exports = function (app) {
    var mongojs = require('mongojs')
    var mongodb = require('mongodb')
    // var databaseUrl = 'frienddb'
    var collections = ['books']
    let databaseUrl = process.env.MONGODB_URI || 'mongodb://localhost:27017/googlebooks'
  
    // Use mongojs to hook the database to the db variable
    var db = mongojs(databaseUrl, collections)
  
    mongodb.MongoClient.connect(databaseUrl, {useMongoClient: true}, function (err, client) {
      if (err) throw err
      console.log(databaseUrl)
      // This makes sure that any errors are logged if mongodb runs into an issue
      db.on('error', function (error) {
        console.log('Database Error:', error)
      })
      app.get('/api/books', function (req, res) {
        db.books.find({}, function (err, data) {
          if (err) {
            console.log(err)
          } else {
            res.json(data)
          }
        })
      })
  
      app.post('/api/books', function (req, res) {
      // req.body hosts is equal to the JSON post sent from the user
      // This works because of the body parsing middleware
        var newBook = req.body
        console.log('new book:', newBook)
        db.books.insert(newBook, function (err, data) {
          if (err) {
            console.log(err)
          } else {
            res.json(data)
          }
        })
      })

      app.delete('/api/books:id', function (req, res) {
        db.books.remove(req.params.id, function (err, data) {
          err ? console.log(err) : res.json(data)
        })
      })
      client.close()
    })
  }