//DB APPROACH: REMOVE DUE TO ERC721 ERROR. COULD ADD A COUNT OF TOKENS (LIKE ERC20 AMOUNTS FIELDS) TO FIX.

// const mongoose = require('mongoose');


// const NewFtRequestsSchema = mongoose.Schema({
//     from: {
//         type: String,
//         required: true,
//         lowercase: true
//     },
//     to: {
//         type: String,
//         required: true,
//         lowercase: true
//     },
//     deposit_amounts: [{
//         type: String,
//         min: 1,
//         match: /^(([0-9]+)|(Null))$/i
//     }],
//     deposit_from_networks: [{
//         type: String,
//         match: /^(MBC|AGD|Null)$/i
//     }],
//     deposit_TxIds: [{
//         type: String,
//         lowercase: true,
//     }],
//     deposit_is_native: [{
//         type: Boolean,
//     }],
//     withdraw_amounts: [{
//         type: String,
//         min: 1,
//         match: /^(([0-9]+)|(Null))$/i
//     }],
//     withdraw_from_networks: [{
//         type: String,
//         match: /^(MBC|AGD|Null)$/i
//     }],
//     withdraw_TxIds: [{
//         type: String,
//         lowercase: true,
//     }],
//     withdraw_is_native: [{
//         type: Boolean,
//     }]
// })

// const NewNftRequestsSchema = mongoose.Schema({
//     from: {
//         type: String,
//         required: true,
//         lowercase: true
//     },
//     to: {
//         type: String,
//         required: true,
//         lowercase: true
//     },
//     deposit_from_networks: [{
//         type: String,
//         match: /^(MBC|AGD|Null)$/i
//     }],
//     deposit_TxIds: [{
//         type: String,
//         lowercase: true,
//     }],
//     deposit_tokenIds: [{
//         type: String, 
//         min: 1,
//         match: /^(([0-9]+)|(Null))$/i}],

//     withdraw_from_networks: [{
//         type: String,
//         match: /^(MBC|AGD|Null)$/i
//     }],
//     withdraw_TxIds: [{
//         type: String,
//         lowercase: true,
//     }],
//     withdraw_tokenIds: [{
//         type: String,
//         min: 1,
//         match: /^(([0-9]+)|(Null))$/i
//     }]
// })

// const trim = function(string){
//     if(string.slice(0,2) !== "0x"){
//         let new_str = "0x" + string
//         return new_str
//     }
//     return string
// }

// const trim_arr = function(arr){
//     for (let i = 0; i < arr.length; i++){
//         arr[i] = trim(arr[i])
//     }
//     return(arr)
// }

// const trim_TxIds = function(next){
//     if (this.isModified('deposit_TxIds')){
//         this.deposit_TxIds = trim_arr(this.deposit_TxIds)
//     }
//     if (this.isModified('withdraw_TxIds')){
//         this.withdraw_TxIds = trim_arr(this.withdraw_TxIds)
//     }
//     next();
// }


// NewFtRequestsSchema.pre('save', trim_TxIds);
// NewNftRequestsSchema.pre('save', trim_TxIds);


// const NewFtRequests = mongoose.model('NewFtRequests', NewFtRequestsSchema);
// const NewNftRequests = mongoose.model('NewNftRequests', NewNftRequestsSchema);

// module.exports = {
//     NewFtRequests,
//     NewNftRequests
// }



// test = async() => {
//     const nft_requests =  new NewNftRequests({
//         from: '0x8FBF5A7505d323D0b957c0aF3FaB8Ceea9226758',
//         to: '0x8FBF5A7505d323D0b957c0aF3FaB8Ceea9226758',
//         deposit_tokenIds: ['Null', '47'],
//         deposit_TxIds: ["Null", "0x3ae8cbf99aed0d7f583f2bc749492cf655f5d4f665afc168734354cd19539ccc"],
//         deposit_from_networks: ['Null', 'MBC'],
//         withdraw_tokenIds: ['Null'],
//         withdraw_TxIds: ["Null"],
//         withdraw_from_networks: ["Null"]
//     });
//     await nft_requests.save(); 
//     console.log('done');
//     // const result = await NewNftRequests.findOne({
//     //     from: '0x8FB35A7505d323D0b957c0aF3FaB8Ceea9226758',
//     //     to: '0x8FBF3A7505d323D0b957c0aF3FaB8Ceea9226758'
//     // });
//     // console.log(result);
//     // console.log('done find');
// }

// try{
//     test();
// }catch(e){
//     console.log(e);
// }
