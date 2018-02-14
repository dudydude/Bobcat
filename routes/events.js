const express = require("express");
const router = express.Router();
const Event = require("../models/event");
const Venue = require("../models/venue");
const User = require("../models/user");

const ensureLogin = require("connect-ensure-login");

// GET create event

router.get("/new", function(req, res, next) {
  res.render("events/create");
});

// POST a new event

router.post("/", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  const eventInfo = {
    name: req.body.name,
    date: req.body.date,
    description: req.body.description,
    venue: req.body.searchTextField,
    genre: req.body.genre,
    creator: req.user._id
  };

  const venueInfo = {
    name: req.body.searchTextField,
    adress: req.body.adress,
    loc: {
      lng: req.body.venue_long,
      lat: req.body.venue_lat
    }
  };

  //   console.log(newEvent);
  //   newEvent.save(err =>
  //     { if (req.body.searchTextField ===  checkVenue)
  //       {
  //        newVenue.save(err => {

  //        })
  //       }
  //     const event = newEvent;
  //     if (err) {
  //       return next(err);
  //     }
  //     // redirect to the event page if it saves
  //     return res.redirect(`/events/${event._id}`);
  //   });
  // });

  const newVenue = new Venue(venueInfo);
  const newEvent = new Event(eventInfo);
  //const checkVenue = Venue.findOne({ name: req.body.searchTextField })//,(function (err, results) {

  console.log(newEvent);
  // console.log("DEBUG CHECK VENUE" + checkVenue);

  newEvent.save(err => {
    const event = newEvent;
    if (err) {
      return next(err);
    }

    Venue.findOne({ name: req.body.searchTextField }, function(err, result) {
      if (err) {
        console.error;
      }
      if (!result) {
        newVenue.save(err => {
          const venue = newVenue;
          if (err) {
            return next(err);
          }
        });
      }
    }),
      // redirect to the event page if it saves
      res.redirect(`/events/${event._id}`);
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

// show all events

router.get("/:id/all", ensureLogin.ensureLoggedIn(), (req, res, next) => {
  Event.find({}, (err, events) => {
    if (err) return next(err);
    res.render(`events/listings`, { userId: req.params.id, events: events });
  });
});

// add event to user's bookmarks

router.post("/bookmark", (req, res, next) => {
  const userId = req.body.user;
  const eventId = req.body.event;

  // User.findByIdAndUpdate(
  //   userId,
  //   { $push: { eventsAttending: eventId } },
  //   (err, updatedUser) => {
  //     Event.findById(eventId, (err, event) => {
  //       res.json({ event });
  //     });
  //   }
  // );

  User.findById(userId, (err, user) => {
    user.eventAttending.push(eventId);
    user.save(err => {
      Event.findById(eventId, (err, event) => {
        res.json({ event });
      });
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
