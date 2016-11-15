import { Router } from 'express';

const router = new Router();

const users = [
  {
    avator: 'https://pbs.twimg.com/profile_images/458794430200152064/XdQULww6_400x400.png',
    name: 'Pusheen',
    age: 23
  },
  {
    avator: 'https://s-media-cache-ak0.pinimg.com/736x/0c/13/1d/0c131d6570d1b8a8848e555ac6b7cd74.jpg',
    name: 'Fat Pusheen',
    age: 18
  },
];

// Write your restful api here:
router.get('/users', (req, res) => {
  res.json({
    users: users,
  });
});

router.get('/users/:id', (req, res) => {
  const index = parseInt(req.params.id) - 1;
  const result = (index >= 0 && index < users.length) ? users[index] : {};
  res.json(result);
});

export default router;
