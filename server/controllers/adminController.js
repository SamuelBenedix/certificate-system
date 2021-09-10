module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/showDashboard");
  },
  viewMember: (req, res) => {
    res.render("admin/member/showMember");
  },
  viewPosition: (req, res) => {
    res.render("admin/position/showPosition");
  },
  viewEvent: (req, res) => {
    res.render("admin/event/showEvent");
  },
  viewCertificate: (req, res) => {
    res.render("admin/certificate/showCertificate");
  },
};
