const { collection, collectiontask } = require("../../models");

exports.getAllCollections = async (req, res) => {
    try {
        const data = await collection.findAll({ attributes: { exclude: [ "createdAt", "updatedAt"] } });
        res.status(200).send({
            status: "success",
            data: {
                user: data,
            },
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "Server error",
        });
    }
};

exports.getCollection = async (req, res) => {
    try {
        const data = await collection.findOne({ 
            where: { id: req.collections.id },
            include: [
                {
                    model: donate,
                    as: "collections",
                    attributes: { exclude: ["collection_id", "createdAt", "updatedAt"] },
                },
            ],
            attributes: { exclude: [ "createdAt", "updatedAt"] } 
        });
        res.status(200).send({
            status: "success",
            data: {
                user: data,
            },
        });
    } catch (error) {
        res.status(500).send({
            status: "failed",
            message: "Server error",
        });
    }
};