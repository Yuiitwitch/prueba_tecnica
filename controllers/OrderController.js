//Importo modelo de datos
const db= require("../models");
const orders = db.order;
const Op = db.Sequelize.Op; //Importo todas las ORM de sequelize

const OrderController = {}; //Creamos el objeto controller

//CRUD de fuciones end-point

//GET todas las ordenes de la base de datos
OrderController.getAll = (req,res) =>{

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
    .then(data =>{
        if(data){
            res.send(data);
        } else{
            res.status(404).send({
                message: `No se puede encontrar order por id=${id}.`
            });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error al obtener orders con id=" + id
        });
    });
};