import { app } from './app';
import mongoose from 'mongoose';

const start = async () => {
  const port = 8082;
  if (!process.env.MONGO_URI) {
    process.env.MONGO_URI="mongodb://localhost:27017/ctse"
    // throw new Error('MONGO_URI should be added as an environment variable');
  }
 
  try {
    await mongoose.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
      }
    );
  }
  catch (err){
    console.error(err);
  }
  
  app.listen(port,  "0.0.0.0",() => {
    console.log('http://localhost:'+port);
  });
};

start();