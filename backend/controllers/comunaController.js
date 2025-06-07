const  ComunaModel = require('../models/ComunaModel');

const ComunaController = {
    getByRegionId: (req, res) => {
        const regionId = req.params.regionId;
    
        ComunaModel.getByRegionId(regionId, (err, results) => {
          if (err) return res.status(500).json({ error: err });
          res.json(results);
        });
      }
}

module.exports = ComunaController;