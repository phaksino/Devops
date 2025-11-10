import express from 'express';

const router = express.Router();

// Temporary route for testing
router.get('/', (req, res) => {
  res.json({ 
    message: 'Categories route working!',
    categories: [
      { id: 1, name: 'Technology' },
      { id: 2, name: 'Lifestyle' }
    ]
  });
});

export default router;