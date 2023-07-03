import fs from 'fs'
// import productRouter from "./productRouter.js";
// import userRouter from "./userRouter.js";
import homeController from "../controller/homeController.js";

let router = {
    '/': homeController.showHome,
    '/err': homeController.showErr,
    '/signup' : homeController.showSignup,
    '/signin' : homeController.showSignin,
    '/showall' : homeController.showAll,
}
// router = {...router, ...productRouter};
// router = {...router, ...userRouter};
export default router;