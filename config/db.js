import mongoose from 'mongoose';

const db = mongoose.connect('mongodb://localhost:27017/productAPI').then((res) => {
    console.log('DB Conncted');
}).catch((err) => {
    console.log('Err' , err);
})

export default db;