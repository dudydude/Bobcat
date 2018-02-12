const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");

// GET create event

router.get("/new", function(req, res, next) {
  res.render("events/create");
});

// POST a new event

router.post("/", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const eventInfo = {
    eventTime: req.body.eventTime,
    venue: req.body.venue,
    description: req.body.description,
    genre: req.body.genre,
    _creator: req.user._id
  };

  const newEvent = new Event(eventInfo);

  newEvent.save(err => {
    if (err) {
      return next(err);
    }
    // redirect to the event page if it saves
    return res.redirect(`/events/${event.id}`);
  });
});
module.exports = router;

// edit specific event

router.get("/:id/edit", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) return next(err);
    res.render("events/edit");
  });
});

router.post("/:id", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Event.findByIdAndUpdate(
    req.params.id,
    {
      eventTime: req.body.eventTime,
      venue: req.body.venue,
      description: req.body.description,
      genre: req.body.genre,
      _creator: req.user._id
    },
    (err, event) => {
      if (err) return next(err);
      res.redirect(`/events/${req.params.id}`);
    }
  );
});

// delete event

router.post("/:id/delete", (req, res, next) => {
  Event.findByIdAndRemove(req.params.id, (err, event) => {
    if (err) return next(err);
    res.redirect("/events");
  });
});
