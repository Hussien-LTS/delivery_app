const Employees = require("../../models").employees;

// GET EMPLOYEE PROFILE
const httpGetEmpProfileHandler = async (req, res) => {
  try {
    const empProfile = await Employees.findOne({
      where: {
        id: req.params.id,
      },
    });
    if (!empProfile) {
      return res.status(404).send("No employee Profile found");
    }
    return res.status(200).json(empProfile);
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};

// UPDATE EMPLOYEE PROFILE
const httpUpdateEmpProfileHandler = async (req, res) => {
  try {
    const empProfile = await Employees.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!empProfile) {
      return res.status(404).send("No employee Profile found");
    }
    return res.status(200).json(empProfile);
  } catch (error) {
    return res.status(500).json({ status: false, message: error.message });
  }
};
module.exports = { httpGetEmpProfileHandler, httpUpdateEmpProfileHandler };
