import * as express from 'express';
import Users from 'models/user';
import Doctor from 'models/doctor';
import Resources from 'models/resources';
import Services from 'models/services';

import { configureStore } from '../../shared/store';

const addStore = async (
    _req: express.Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const usersData = await Users.findById('61883fa501eadb8bb5df8f0d');
    const user = usersData && usersData.toJSON();
    let initialState: any = { user };
    const userId = `${user?._id}`;
    if (userId) {
        const doctor = await Doctor.findOne({ userId }).exec();
        const resources = await Resources.find({ userId });
        const services = await Services.find({ userId });
        initialState = {
            user: { ...user, doctor, resources, services },
        };
    }
    res.locals.store = configureStore({ initialState });
    next();
};

export default addStore;
