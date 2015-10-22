var mongoose = require("mongoose");
var Promise = require("bluebird");

var jobSchema = mongoose.Schema({
    title: { type: String},
    description: { type: String}
});

var Job = mongoose.model('Job', jobSchema);

exports.seedJobs = function () {
    return new Promise(function(resolve, reject) {
       Job.find({}).exec(function (error, collection) {
            if(collection.length === 0) {
                Job.create({ title: 'Cook', description: 'You will be making bagels'});
                Job.create({ title: 'Enginner', description: 'You will be making areas'});
                Job.create({ title: 'Developer', description: 'You will be making apps'});
                Job.create({ title: 'Dress', description: 'You will be making customers'}, resolve);
            }
        });
    });
}