import DB from '../../../database/db';

const allAvos = async(req,res) =>{
    const db = new DB();
    const allEntries = await db.getAll();
    const length = allEntries.length;
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');

    res.status(200).json({data:allEntries,length})
}

export default allAvos