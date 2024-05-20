import app from './app';

import mongoose from 'mongoose';
import config from './app/config';

try {
  async function main() {
    await mongoose.connect(config.database_url as string);
  }

  const a = 10;
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`);
  });
} catch (error) {
  console.log(error);
}
