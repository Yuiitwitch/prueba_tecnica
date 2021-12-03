//Importo modelo de datos
const db = require("../models");
const orders = db.order;
const Op = db.Sequelize.Op; //Importo todas las ORM de sequelize

const OrderController = {}; //Creamos el objeto controller

//CRUD de fuciones end-point

//GET todas las ordenes de la base de datos
OrderController.getAll = (req, res) => {

    orders.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Ha ocurrido un error al buscar todos los pedidos"
            });
        });
};

//--------------------------------------------------------------
//GET Orders por Id de la base de datos
OrderController.getById = (req, res) => {
    const id = req.params.id;

    orders.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `No se puede encontrar order por id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error al obtener orders con id=" + id
            });
        });
};
//--------------------------------------------------------------
//CRUD para crear una nueva order en data base.
OrderController.create = (req, res) => {

    if (!res.body.id) {
        res.status(400).send({
            message: "El contenido no puede estar vacio"
        });
        return;
    }

    //Crear un Order
    const newOrder = {
        country: req.body.country,
        date: req.body.date,
        company: req.body.company,
        status: req.body.status,
        type: req.body.type
    };

    //Guarda la orden en la base de datos
    orders.create(newOrder)
    .the(data =>{
        res.send(data);
    })
    .catch(err =>{
        res.status(500).send({
            message:
            err.message || "Ha ocurrido un error al crear un Order"
        });
    });

};

//------------------------------------------------------------------
// Funcion para realizar cambios en el Order.
OrderController.update = (req, res) => {

    const id = req.params.id;

    orders.update(req.body,{
        where : {id: id}
    })
        .then(num =>{
            if(num == 1){
                res.sed({
                    message: "Se ha creado la orden correctamente."
                });
            } else{
                res.sed({
                   message: `No se puede editar el Order con id=${id} .Revisa el body.`
                })
            }
        })
        .catch(err => {
            res.status(500).sed({
                message: "Error editando el Order con id=" + id
            });
        });
};

//--------------------------------------------------------------
//Borrar la orden de la base de datos.
OrderController.delete = (req, res) => {
    const id = req.params.id;

    orders.destroy({
        where: {id : id}
    })
    .then(num =>{
        if(num == 1){
            res.send({
                message: "La orden se ha borrado correctamente!"
            });
        } else{
            res.send({
                message: `No se puede borrar el order con id=${id}`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Podria no haberse borrado el order con id=" + id
        });
    });
};

module.exports = OrderController;