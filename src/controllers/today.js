const { today } = require("../../models");

exports.addTodays = async (req, res) => {
    try {
        await today.create(req.body);
    
        res.send({
            status: "success",
            message: "Add today finished",
        });
        } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getAllTodays = async (req, res) => {
    try {
        const data = await today.findAll({ attributes: { exclude: [ "createdAt", "updatedAt"] } });
        res.status(200).send({
            status: "success",
            data
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "Server error",
        });
    }
};

exports.getToday = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await today.findOne({
            where: { id },
            attributes: { exclude: [ "createdAt", "updatedAt"] } 
        });
        res.status(200).send({
            status: "success",
            data
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "Server error",
        });
    }
};

exports.updateToday = async (req, res) => {
    try {
        const { id } = req.params;
    
        await today.update(req.body, {
            where: {
            id,
            },
        });
    
        res.send({
            status: "success",
            message: `Update today id: ${id} finished`,
            data: req.body,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.deleteToday = async (req, res) => {
    try {
        const { id } = req.params;
    
        await today.destroy({
            where: {
                id,
            },
        });
    
        res.send({
            status: "success",
            message: `Delete today id: ${id} finished`,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
}