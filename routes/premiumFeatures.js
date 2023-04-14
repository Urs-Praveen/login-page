const express = require("express")
const router = express.Router()
const userAuthentication = require("../middleware/authenticate")
const premiumControllers = require("../controllers/premiumFeatureController")

router.get("/premium/showleaderboard", userAuthentication.authenticate,
    premiumControllers.showLeaderBoard)
router.get("/premium/showtable", userAuthentication.authenticate, premiumControllers.getTableData)

module.exports = router