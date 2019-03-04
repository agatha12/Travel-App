const router = require("express").Router();
const photoControlller = require("../../controllers/photoController");


// router.route("/")
//     .get(photoControlller.findAll)
//     .post(photoControlller.create);


// router
//     .route("/:id")
//     .get(photoContolller.findby)
//     .put(photoControlller.update)
//     .delete(photoControlller.remove)

// router
//     .route("/pass/:id")
//     .get(photoControlller.findByPass)

router.route("/")
    .post(photoControlller.create)

router.route("/:id")
    .get(photoControlller.findByUser)
    .put(photoControlller.update)

module.exports = router;