const router = require("express").Router();
const itiControlller = require("../../controllers/iticontroller");

// Matches with "/api/itinerary"
router.route("/")
    .get(itiControlller.findAll)
    .post(itiControlller.create);

// Matches with "/api/itinerary/:id"
router
    .route("/:id")
    .get(itiControlller.findById)
    .put(itiControlller.update)
    .delete(itiControlller.remove)

router
    .route("/pass/:id")
    .get(itiControlller.findByPass)

module.exports = router;