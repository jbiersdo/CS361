import express, { Router } from 'express';

const app = express();
const router = Router();
const PORT = 8000;
const FIXER_API_URL =
  'http://data.fixer.io/api/latest?access_key=5d35c596a45714ff94a4ed9321076f80&format=1';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', router);

router.route('/convert').get(routeHandler);

app.listen(PORT, () =>
  console.log(`Example app listening on http://localhost:${PORT}`)
);

async function routeHandler(req, res) {
  try {
    const result = await fetch(FIXER_API_URL);
    const json = await result.json();

    res.json(json);
  } catch (error) {
    console.error("Error fetching data", error);
    res.status(500).json({ error: "An error occured while fetching conversion data"})
  }
}

