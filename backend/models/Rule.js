const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RuleSchema = new Schema({
  rule: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Rule', RuleSchema);
