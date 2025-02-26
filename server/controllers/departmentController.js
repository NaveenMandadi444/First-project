import Department from "../models/Department.js";

const getDepartments = async (req, res) => {
  try {
    const departments = await Department.find();
    console.log(departments);
    return res.status(200).json({ success: true, departments });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, error: "get dept server error" });
  }
};

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

const getDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const department = await Department.findById({ _id: id });
    return res.status(200).json({ success: true, department });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, error: "get dept server error" });
  }
};
const updateDepartment = async (req, res) => {
  try {
    const { id } = req.params;
    const { dep_name, description } = req.body;
    const updateDep = await Department.findByIdAndUpdate(
      { _id: id },
      {
        dep_name,
        description,
      }
    );
    return res.status(200).json({ success: true, updateDep });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, error: "edit dept server error" });
  }
};
export { addDepartment, getDepartments, getDepartment, updateDepartment };
