const mongoose = require("mongoose");

const bugSchema = mongoose.Schema({
  name: String,
  details: String,
  steps: String,
  version: String,
  priority: Number,
  assigned: String,
  creator: String,
  status: String,
  time: String,

});
const Bug = mongoose.model("bug", bugSchema);


module.exports = {
    insertBug: Bug => {
      let newBug = new Bug(Bug);
      return newBug.save();
    },
  
    getAllBugs: () => {
      return Bug.find({}).sort({ addedAt: '-1'});
    },
  
    getBugById: id => {
      return Bug.findById(id);
    },
  
    getBugsByOption: (obj) => {
      return  Bug.find(obj)
    },
  
    updateBug: (id, Bug) => {
      return Bug.findByIdAndUpdate(id, Bug);
    },
  
    deleteBug: id => {
      return Bug.deleteOne({ _id: id });
    }
  };