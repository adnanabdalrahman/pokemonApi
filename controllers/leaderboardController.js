import Leaderboard from '../models/Leaderboard.js';

export const createRecord = async (req, res) => {
    try {
        const record = await Leaderboard.create(req.body);
        res.status(201).json(record);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getRecords = async (req, res) => {
    try {
        const records = await Leaderboard.findAll();
        res.status(200).json(records);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const getRecordById = async (req, res) => {
    try {
        const record = await Leaderboard.findByPk(req.params.id);
        if (record) {
            res.status(200).json(record);
        } else {
            res.status(404).json({ error: "Record not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateRecord = async (req, res) => {
    try {
        const [updated] = await Leaderboard.update(req.body, {
            where: { id: req.params.id }
        });
        if (updated) {
            const updatedRecord = await Leaderboard.findByPk(req.params.id);
            res.status(200).json(updatedRecord);
        } else {
            res.status(404).json({ error: "Record not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const deleteRecord = async (req, res) => {
    try {
        const deleted = await Leaderboard.destroy({
            where: { id: req.params.id }
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ error: "Record not found" });
        }
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}; 