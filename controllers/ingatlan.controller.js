const db = require('../models');
const Kategoria = db.Kategoria;
const Ingatlan = db.Ingatlan;


exports.findAll = (req, res) => {
    Ingatlan.findAll({ include: Kategoria })
        .then(data => {
            res.status(200).send(data);
        })
}

exports.create = (req, res) => {
    if (!req.body.kategoria || !req.body.tehermentes || !req.body.ar) {
        res.status(400).send("Hiányos adatok!")
        return
    }

    const ujIngatlan = {
        kategoria: req.body.kategoria,
        leiras: req.body.leiras ? req.body.leiras : null,
        hirdetesDatuma: req.body.hirdetesDatuma ? req.body.hirdetesDatuma : null,
        tehermentes: req.body.tehermentes,
        ar: req.body.ar,
        kepUrl: req.body.kepUrl ? req.body.kepUrl : null
    }

    Ingatlan.create(ujIngatlan)
        .then(data => {
            res.status(201).send({ id: data.id });
        })

        .catch(err => {
            res.status(500).send("Sajnáljuk...Szerver oldali hiba történt: " + err);
        })
}

exports.delete = (req, res) => {
    const id = req.params.id;
    Ingatlan.destroy({ where: { id: id } })
        .then(num => {
            if (num === 1) {
                res.status(204).send();
            }
            else {
                res.status(404).send("Az ingatlan nem létezik!")
            }
        })
        .catch(err => {
            res.status(500).send("Sajnáljuk...Szerver oldali hiba történt: " + err);
        })
}