const router = require("express").Router();
const axios = require("axios");


// matches with /api/gethotel
router.post("/", (req, res) => {

    axios(
        {
            method: "post",
            url: "https://api.makcorps.com/auth",
            header: 'Content-Type: application/json',
            data: {
                username: "jacobsan",
                password: "Fdm5dR"
            }
        })
        .then(({ data: { access_token } }) => res.json(access_token))
        // .then(data => console.log(data))
        .catch(err => console.log(err));
     });


module.exports = router;