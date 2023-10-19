import app from "./app.js";
import { connectToDatabase } from "./db/connections.js";

// Server and listeners
connectToDatabase()
  .then(() => {
    app.listen(5000, () => console.log("Server is running on port 5000 & Connected to Database"));
  })
  .catch((err)=> console.log(err))
