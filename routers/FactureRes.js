const express = require("express");
const { getdesignations, getdesignationbycode } = require("../controllers/designationFacture");


const { getFactureresCount, getfactureres, createfacture, getfactureresById, updatefactureRes, getfacturebyfournisseur, getfacturehistorique, getFacturehistoriqueCount, getfacturebyfournisseurpaiement, getFacturevaliderCount, getfacturevalider, updatefacturevalider, getsumfacturebyfournisseurwithfn, getsumfacturebyfournisseurwithoutfn } = require("../controllers/facturesResptionne");


const router = express.Router();
router.get("/f",getFactureresCount ,getfactureres);
router.get("/f/:id", getfactureresById);

router.post("/f", createfacture);

router.put("/f/:id", updatefactureRes);

router.get("/facturebyfournisseur/:nom", getfacturebyfournisseur);
router.get("/designation", getdesignations);
router.get("/designationbycode/:id", getdesignationbycode);
router.get("/historiquefacture", getFacturehistoriqueCount,getfacturehistorique);

router.get("/getfacturebyfournisseur/:id", getfacturebyfournisseurpaiement);


router.get("/facturevalider",getFacturevaliderCount ,getfacturevalider);

router.get("/facturevalider/:id", getfactureresById);

router.get("/getsumfacturebyfournisseurwithfn/:id",getsumfacturebyfournisseurwithfn);

router.get("/getsumfacturebyfournisseurwithoutfn/:id",getsumfacturebyfournisseurwithoutfn);

router.put("/facturevalider/:id", updatefacturevalider);
module.exports = router;