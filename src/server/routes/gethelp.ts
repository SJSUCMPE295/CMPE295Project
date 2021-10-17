import { Router } from 'express';
const router = Router();
// Create a new Resource
router.post('/', (_req, res) => {
    res.send({ hello: 'Create a new Resource' });
});

// Retrieve all Resources
router.get('/', (_req, res) => {
    res.send({ hello: 'Retrieve all Resources' });
});

// Retrieve a single Resource with id
router.get('/:id', (_req, res) => {
    res.send({ hello: 'Retrieve a single Resource with id' });
});

// Update a Resource with id
router.put('/:id', (_req, res) => {
    res.send({ hello: 'Update a Resource with id' });
});

// Delete a Resource with id
router.delete('/:id', (_req, res) => {
    res.send({ hello: 'Delete a Resource with id' });
});

export default router;
//app.use('/api/gethelp', router);
