import mongoose from "mongoose";
import app from "./app";
import config from "./config";
async function bootstrap() {
try {
    await mongoose.connect(config.database_url as string) ;
    
app.listen(config.port, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })

} catch (error) {
    console.log(`server connection failed ${error}`);
}
}

bootstrap();