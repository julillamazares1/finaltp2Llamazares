import express from 'express';
import router from "./Router/router.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(8000, () => {
  console.log('Server ok in port 8000');
});
