const apiMethods = {
  bookmark: function(eventId, userId) {
    return axios
      .post("/events/bookmark", { event: eventId, user: userId })
      .then(res => res.data);
  }
};
