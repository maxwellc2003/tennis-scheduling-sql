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
    .then((dbEventData) => res.json(dbEventData))
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
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id!" });
        return;
      }
      res.json(dbEventData);
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
    .then((dbEventData) => res.json(dbEventData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  Event.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbEventData) => {
      if (!dbEventData) {
        res.status(404).json({ message: "No event found with this id!" });
        return;
      }
      res.json(dbEventData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;