import DB from '../../../database/db';

const allAvos = async(req,res) =>{
    const db = new DB();
    const id = req.query.id;
    const avo = await db.getById(id);
    res.statusCode = 200;
    res.setHeader('Content-Type','application/json');
    res.status(200).json(avo);
}

export default allAvos