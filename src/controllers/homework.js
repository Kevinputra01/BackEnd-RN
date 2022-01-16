const { homework } = require("../../models");

exports.addHomeworks = async (req, res) => {
    try {
        await homework.create(req.body);
    
        res.send({
            status: "success",
            message: "Add homework finished",
        });
        } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};

exports.getAllHomeworks = async (req, res) => {
    try {
        const data = await homework.findAll({ attributes: { exclude: [ "createdAt", "updatedAt"] } });
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

exports.getHomework = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await homework.findOne({
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

exports.updateHomework = async (req, res) => {
    try {
        const { id } = req.params;
    
        await homework.update(req.body, {
            where: {
            id,
            },
        });
    
        res.send({
            status: "success",
            message: `Update homework id: ${id} finished`,
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

exports.deleteHomework = async (req, res) => {
    try {
        const { id } = req.params;
    
        await homework.destroy({
            where: {
                id,
            },
        });
    
        res.send({
            status: "success",
            message: `Delete homework id: ${id} finished`,
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
}