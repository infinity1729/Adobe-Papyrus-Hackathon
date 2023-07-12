const express = require("express");
const requestRouter = require("./routes/route.js");
const cors = require('cors');
const app = express();
const port=3001;
app.use(express.json());
app.use(cors());
app.use("/",requestRouter);



app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
