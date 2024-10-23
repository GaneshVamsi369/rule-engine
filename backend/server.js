const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors()); 
app.use(express.json()); 

const mongoURI = 'mongodb+srv://ganeshvamsi05:ejxCKXwugynuud4a@cluster0.a9ff9ol.mongodb.net/GaneshCrud?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.error('MongoDB connection error:', error));

const ruleSchema = new mongoose.Schema({
    rule: String
});

const Rule = mongoose.model('Rule', ruleSchema);

app.post('/api/create_rule', async (req, res) => {
    const { rule } = req.body;

    try {
        const newRule = new Rule({ rule });
        await newRule.save();
        res.status(201).json(newRule);
    } catch (error) {
        res.status(500).json({ message: 'Error creating rule', error });
    }
});

app.get('/api/rules', async (req, res) => {
    try {
        const rules = await Rule.find();
        res.status(200).json(rules);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching rules', error });
    }
});

const evaluateAST = (rule, userData) => {
    try {
        const parsedRule = rule
            .replace(/age/g, userData.age)
            .replace(/department/g, `'${userData.department}'`)
            .replace(/salary/g, userData.salary)
            .replace(/experience/g, userData.experience);

        return eval(parsedRule); 
    } catch (error) {
        console.error('Error evaluating rule:', error);
        return false;
    }
};

app.post('/api/evaluate_rule', async (req, res) => {
    const { userData } = req.body;

    try {
        const rules = await Rule.find();
        let result = false;

        for (let rule of rules) {
            const isEligible = evaluateAST(rule.rule, userData);
            if (isEligible) {
                result = true;
                break; 
            }
        }

        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({ message: 'Error evaluating rule', error });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
