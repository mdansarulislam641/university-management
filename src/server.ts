import mongoose from "mongoose";
import app from "./app";

async function bootstrap() {
try {
    await mongoose.connect('mongodb://127.0.0.1:27017/test');
    
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })

} catch (error) {
    console.log(`server connection failed ${error}`);
}
}

bootstrap();