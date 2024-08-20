const Solicitud = require('../models/solicitud');

exports.getSolicitudes = async (req, res) => {
  try {
    const solicitudes = await Solicitud.findAll();
    res.json(solicitudes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createSolicitud = async (req, res) => {
  try {
    const { codigo, descripcion, resumen, id_empleado } = req.body;
    const solicitud = await Solicitud.create({ codigo, descripcion, resumen, id_empleado });
    res.status(201).json(solicitud);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteSolicitud = async (req, res) => {
  try {
    const { id } = req.params;
    await Solicitud.destroy({ where: { id } });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};