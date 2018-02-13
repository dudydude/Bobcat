const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const ensureLogin = require("connect-ensure-login");

// GET create event

router.get("/new", function(req, res, next) {
  res.render("events/create");
});

// POST a new event

router.post("/", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const eventInfo = {
    name: req.body.name,
    venue: req.body.venue,
    date: req.body.date,
    description: req.body.description,
    genre: req.body.genre,
    creator: req.user._id
  };

  const newEvent = new Event(eventInfo);
  console.log(newEvent);
  newEvent.save(err => {
    // if (newEvent.errors) {
    //   return res.render("events/new", {
    //     title: "Create an event",
    //     errors: newEvent.errors,
    //     event: newEvent
    //   });
    // }
    const event = newEvent;
    if (err) {
      return next(err);
    }
    // redirect to the event page if it saves
    return res.redirect(`/events/${event._id}`);
  });
});

// show event page

router.get("/:eventId", (req, res, next) => {
  Event.findById(req.params.eventId, (err, event) => {
    if (err) return next(err);
    res.render("events/event", {
      title: "event details - " + event.name,
      event: event
    });
  });
});

// edit specific event

router.get("/:id/edit", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Event.findById(req.params.id, (err, event) => {
    if (err) {
      return next(err);
    }
    if (event.creator.equals(req.user._id)) {
      res.render("events/edit", { event });
    } else
      res.render("events/event", {
        title: "event details - " + event.name,
        event: event
      });
  });
});

router.post("/:id", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Event.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      venue: req.body.venue,
      date: req.body.date,
      description: req.body.description,
      genre: req.body.genre,
      creator: req.user._id
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

module.exports = router;
