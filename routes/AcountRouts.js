import express from "express";
import {
    createAccount,
    deleteAccount,
    updateBalance,
    getAccounts,
    getAccount,
} from "../controllers/accountsController.js";

const router = express.Router();

router.route("/").get(getAccounts).post(createAccount);

router.route("/updateBalance/:id").put(updateBalance);

router.route("/:id").delete(deleteAccount).get(getAccount);

// module.exports=router;
export default router