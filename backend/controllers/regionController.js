const  RegionModel = require('../models/regionModel');

const regionController = {
    index: (req, res) => {
        RegionModel.getAll((err, results) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            res.json(results);
        });
    },
    findById: (req, res) => {
        try {
          const id = req.params.id;
          RegionModel.findById(id, (err, results) => {
            if (err) return res.status(500).json({ error: err });
            res.json(results[0]);
          });
        } catch (err) {
          res.status(500).json({ error: err });
        }
      }
      
}

module.exports = regionController;
