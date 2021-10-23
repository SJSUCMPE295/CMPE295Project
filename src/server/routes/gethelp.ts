import { Router } from 'express';
const router = Router();
// Create a new Resource
export const createHandler = async (_req, res) => {
    res.send({ hello: 'Create a new Resource' });
};
router.post('/', createHandler);

// Retrieve all Resources
export const getAllHandler = async (_req, res) => {
    res.send({ hello: 'Retrieve all Resources' });
};
router.get('/', getAllHandler);

// Retrieve a single Resource with id
export const getItemHandler = async (_req, res) => {
    res.send({ hello: 'Retrieve a single Resource with id' });
};
router.get('/:id', getItemHandler);

// Update a Resource with id
export const updateItemHandler = async (_req, res) => {
    res.send({ hello: 'Update a Resource with id' });
};
router.put('/:id', updateItemHandler);

// Delete a Resource with id
export const deleteItemHandler = async (_req, res) => {
    res.send({ hello: 'Delete a Resource with id' });
};
router.delete('/:id', deleteItemHandler);

export default router;
//app.use('/api/gethelp', router);
