const { Document } = require("../models/index");

const createDocument = async (req, res) => {
  try {
    const newDocument = await Document.create({
      provinces: req.body.province,
      communes: req.body.communes,
      centre: req.body.centres,
      intitule_de_document: req.body.intitule_de_document,
      responsables: req.body.responsables,
      collaborateurs: req.body.collaborateurs,
      bet: req.body.bet,
      situations: req.body.situations,
      observations: req.body.observations,
      observations_chef_département: req.body.observations_chef_département,
      piece_jointes: req.body.piece_jointes,
    });

    res.status(201).json({
      message: "Document created successfully",
      document: newDocument,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while creating the document" });
  }
};

const findDocument = async (req, res) => {
  try {
    const documents = await Document.findAll();
    if (documents.length === 0) {
      return res.status(404).json({ message: "No documents found" });
    }
    res.status(200).json({
      message: "Documents retrieved successfully",
      documents: documents,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while retrieving documents" });
  }
};

const updateDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const updatedDocument = await Document.update(req.body, {
      where: { id: id },
    });
    if (updatedDocument[0] === 0) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({
      message: "Document updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while updating the document" });
  }
};

const deleteDocument = async (req, res) => {
  try {
    const id = req.params.id;
    const deleted = await Document.destroy({ where: { id: id } });
    if (deleted === 0) {
      return res.status(404).json({ message: "Document not found" });
    }
    res.status(200).json({
      message: "Document deleted successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "An error occurred while deleting the document" });
  }
};

module.exports = {
  createDocument,
  findDocument,
  updateDocument,
  deleteDocument,
};
