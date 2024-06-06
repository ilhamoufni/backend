// const sequelize = require("./Dbconfig");
// const User = require("../models/userModels");
// const Document = require("../models/DocumentModels");


// // Invoice.belongsTo(User);
// // User.hasMany(Invoice);
// // Transaction.belongsTo(User);
// // User.hasMany(Transaction);
// // Post.belongsTo(User);
// // User.hasMany(Post);


// sequelize.sync({force : true},() =>{console.log('connected');}).then(()=>{
//     console.log("Migration Succeed");
// }).catch((err)=>{
//     console.log(err);
// })

// module.exports = {
//     Document,
//     User,
// }