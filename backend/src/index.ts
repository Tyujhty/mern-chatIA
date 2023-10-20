import app from "./app.js";
import { connectToDatabase } from "./db/connections.js";

// Server and listeners
const PORT = process.env.PORT || 5000;

connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
      console.log("Server is running on port 5000 & Connected to Database"));
  })
  .catch((err)=> console.log(err))
