import fs from 'fs';
import path from 'path';

function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;
        const name = req.body.name;
        const comment = req.body.comment;
        const newComment = { email, name, comment };
        const filePath = path.join(process.cwd(), 'asset', 'data', 'comments.json');
        const jsonData = fs.readFileSync(filePath);
        const data = JSON.parse(jsonData);
        data.push(newComment);
        fs.writeFileSync(filePath, JSON.stringify(data));
    }
}

export default handler;