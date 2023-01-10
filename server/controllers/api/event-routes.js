const router = require("express").Router();
const { Event, User, EventUser } = require("../../models");

router.get("/", (req, res) => {
  Event.findAll({
    include: [
      {
        model: User,
        attributes: ["username"],
        through: EventUser,
        as: "event_users",
      },
    ],
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  Event.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No product found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  Event.create({
    date: req.body.date,
    location: req.body.location,
    time: req.body.time,
    min: req.body.min,
    max: req.body.max,
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;