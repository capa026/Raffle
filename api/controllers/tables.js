import Tables from "../models/Tables.js";

export const createTable = async (req, res, next) => {
  const newTable = new Tables(req.body);
  try {
    const savedTable = newTable.save();
    res.status(200).json(savedTable);
  } catch (error) {
    next(error);
  }
};
