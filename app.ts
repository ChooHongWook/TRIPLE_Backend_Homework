import express from 'express';
import cors from 'cors';

const app = express();
const local = 'http://localhost:3000';
const corsOption = {
  origin: [`${local}`],
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
};

app.use(cors(corsOption));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get('/', (req, res) => {
  res.status(200).send('server is work!!');
});

export default app;
