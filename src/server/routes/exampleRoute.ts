import { Router } from 'express';
const router = Router();
// Create a new Resource
export const createHandler = async (_req, res) => {
    res.send({ hello: 'Create a new Resource' });
};
// Retrieve all Resources
export const getAllHandler = async (_req, res) => {
    res.send({ hello: 'Retrieve all Resources' });
};
// Retrieve a single Resource with id
export const getItemHandler = async (_req, res) => {
    res.send({ hello: 'Retrieve a single Resource with id' });
};
// Update a Resource with id
export const updateItemHandler = async (_req, res) => {
    res.send({ hello: 'Update a Resource with id' });
};
// Delete a Resource with id
export const deleteItemHandler = async (_req, res) => {
    res.send({ hello: 'Delete a Resource with id' });
};
router.post('/', createHandler);
router.get('/', getAllHandler);
router.get('/:id', getItemHandler);
router.put('/:id', updateItemHandler);
router.delete('/:id', deleteItemHandler);
export default router;
