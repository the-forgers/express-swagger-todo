const router = require('express').Router();

import { task } from '../controllers';

router.get('/', (req, res) => (
  res.status(200).json(task.getAll())
));

export default router;
