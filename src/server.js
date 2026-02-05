import express from 'express';
import { config } from 'dotenv';
import router from './routes.js';

config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening on port http://localhost:${PORT}`);
});
