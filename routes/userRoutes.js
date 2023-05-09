import express from "express";

import {
    createUser,
    deleteUser,
    getUsers,
    getUser,
    getUserByQuery,

} from "../controllers/userController.js";

//crud routs
const router = express.Router({ mergeParams: true });
router.route("/").get(getUsers).post(createUser);
router.route("/getUserByQuery").get(getUserByQuery);
router.route("/:id").get(getUser).delete(deleteUser);

// module.exports=router;
export default router