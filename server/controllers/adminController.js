const Member = require("../models/member");
const ObjectId = require("mongoose").Types.ObjectId;

module.exports = {
  viewDashboard: (req, res) => {
    res.render("admin/dashboard/showDashboard");
  },
  viewMember: async (req, res) => {
    const data = await Member.find();
    res.render("admin/member/showMember", { data });
  },
  addMember: async (req, res) => {
    const { name } = req.body;
    await Member.create({ name });
    res.redirect("/admin/member");
  },
  getMember: async (req, res) => {
    const { _id } = req.body;
    const data = await Member.find({ id: new ObjectId(_id) });
    res.send(data);
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
