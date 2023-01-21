const jwt = require("jsonwebtoken");
const Employees = require("../models/employees.model").employees;

// CHECK IF USER IS AN EMPLOYEE
const validateEmployee = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ status: false, message: "token not found" });
  }
  const decodedJwt = jwt.decode(token, { complete: true });
  if (!decodedJwt || !decodedJwt?.payload?.id) {
    return res
      .status(401)
      .json({ status: false, message: "Not a valid JWT token" });
  }
  const userEmail = decodedJwt?.payload?.email;
  Employees.findOne({
    where: {
      email: userEmail
    },
  })
    .then((employee) => {
      if (employee) {
        if (!employee.emp_role === "employee") {
          return res
            .status(401)
            .json({ status: false, message: "access denied" });
        }
        req.employee = employee;
        next();
      } else {
        return res
          .status(404)
          .json({ status: false, message: "user not found" });
      }
    })
    .catch((err) => {
      return res.status(500).json({ status: false, message: err.message });
    });
};

module.exports = { validateEmployee };
