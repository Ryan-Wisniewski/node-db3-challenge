const db = require('../dbConfig')

module.exports = {
    find,
    findById,
    findSteps,
    add,
    remove,
    update
}

function find(){
    return db('schemes')
}
function findById(id){
    return db('schemes')
        .where({ id })
        .first()
}
function findSteps(id){
    return db('schemes as s')
        .join('steps as st', 's.id', 'st.scheme_id')
        .where({ scheme_id: id})
        .select('s.scheme_name','st.step_number','st.instructions','s.id')
        .then(scheme =>{ return scheme })
}
function add(scheme){
    return db('schemes')
    .insert(scheme)
    .then( ids => {
        return findById({ id: ids[0]})
    })
}
function remove(){
    return db('schemes')
}
function update(){
    return db('schemes')
}
