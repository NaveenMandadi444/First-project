import Department from "../models/Department.js";

const addDepartment = async (req, res) => {
  try {
    console.log(req.body);
    const { dep_name, description } = req.body;
    const newDept = new Department({
      dep_name,
      description,
    });
    await newDept.save();
    return res.status(200).json({ success: true, department: newDept });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, error: "add dept server error" });
  }
};

export { addDepartment };
