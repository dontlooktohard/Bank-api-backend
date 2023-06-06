import express from "express";

import {
    createUser,
    deleteUser,
    getUsers,
    getUser,
    getUserByQuery,

} from "../controllers/userController.js";

const router = express.Router({ mergeParams: true });
router.route("/").get(getUsers).post(createUser);
router.route("/getUserByQuery").get(getUserByQuery);
router.route("/:id").get(getUser).delete(deleteUser);


export default router