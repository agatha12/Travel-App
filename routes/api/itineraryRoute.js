const router = require("express").Router();
const itiControlller = require("../../controllers/iticontroller");


router.route("/")
    .get(itiControlller.findAll)
    .post(itiControlller.create);

router
    .route("/:id")
    .get(itiControlller.findById)
    .put(itiControlller.update)
    .delete(itiControlller.remove)

module.exports = router;