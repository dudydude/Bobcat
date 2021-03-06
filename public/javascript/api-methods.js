const apiMethods = {
  bookmark: function(eventId, userId) {
    return axios
      .post("/events/bookmark", { event: eventId, user: userId })
      .then(res => res.data);
  },
  delete: function(eventId, userId) {
    return axios.delete(`/events/${eventId}/${userId}/`).then(res => res.data);
  },
  deleteAll: function(userId) {
    return axios
      .delete(`/events/${userId}/`)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
      });
  }
};
