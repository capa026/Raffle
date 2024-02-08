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

export const getTables = async (req, res, next) => {
  try {
    const tables = await Tables.find();
    res.status(200).json(tables);
  } catch (error) {
    next(error);
  }
};

export const updateTable = async (req, res, next) => {
  try {
    await Tables.updateOne(
      { _id: req.params.id },
      {
        $set: {
          [`availableNumbers.${req.body.index}.name`]: req.body.name,
        },
        $push: {
          unAvailableNumbers: req.body.index,
        },
      }
    );
    res.status(200).json("Updated");
  } catch (error) {
    next(error);
  }
};
