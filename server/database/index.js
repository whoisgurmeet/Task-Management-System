const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb://127.0.0.1:27017/mydatabase"
  )
  .then(() => console.log("MongoDB Connection successfull"))
  .catch((error) => console.log(`Error occured: ${error}`));
