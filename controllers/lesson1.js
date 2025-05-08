const HannahRoute = (req, res) => {
    res.send("Hello Hannah");
  }

const SarahRoute = (req, res) => {
    res.send("Hello Sarah");
 }

  module.exports = {
    HannahRoute,
    SarahRoute
  }