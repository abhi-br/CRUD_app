const mongoose = require('mongoose');

const connectDB = async () => {
  try{
       // mongodb connection string
      const con = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
          useUnifiedTopology: true,
                     // useFindAndModify: false,
       // useCreateIndex: true
  })

    console.log(`MongoDB connected : ${con.connection.host}`);
}catch(err){
      console.log(err);
      process.exit(1);
  }
}

module.exports = connectDB

// var url = "MONGO_URI=mongodb+srv://admin:admin123@cluster0.9jw7m.mongodb.net/users?retryWrites=true&w=majority";
