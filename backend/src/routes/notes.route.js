import { Router } from "express";
import {getAllnotes,getnoteById,createnote,updatenote,deletenote} from "../controllers/notes.controller.js"

const router = Router();

router.route('/getallnotes').get(getAllnotes);
router.route('/getnote/:id').get(getnoteById);
router.route('/createnotes').post(createnote);
router.route('/updatenotes/:id').patch(updatenote);
router.route('/deletenotes/:id').delete(deletenote);


export default router;