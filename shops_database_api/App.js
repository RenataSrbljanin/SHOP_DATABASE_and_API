const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

// Routes
app.use('/stores', require('./routes/stores'));
app.use('/items', require('./routes/items'));
app.use('/tags', require('./routes/tags'));

app.get('/', (req, res) => {
  res.send('Store API is running.');
});

// DB Sync and Start
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
});
