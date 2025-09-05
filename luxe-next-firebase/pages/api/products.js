// API: /api/products
// Query params: ?category=Category Name  or ?pid=productId
import fs from 'fs';
import path from 'path';
import { initFirebaseAdmin } from '../../lib/firebaseAdmin';

export default async function handler(req,res){
  const { category, pid } = req.query || {};
  // Try Firestore via admin SDK if service account present
  const admin = initFirebaseAdmin();
  if(admin){
    try{
      const db = admin.firestore();
      let q = db.collection('products');
      if(category) q = q.where('category','==', category);
      if(pid){
        const snap = await db.collection('products').where('id','==', pid).get();
        const arr = snap.docs.map(d=>d.data());
        return res.status(200).json(arr);
      }
      const snap = await q.get();
      const arr = snap.docs.map(d=>d.data());
      return res.status(200).json(arr);
    } catch(e){
      console.warn('Firestore admin read failed', e.message || e);
    }
  }
  // fallback to static JSON
  const file = path.join(process.cwd(),'public','data','products.json');
  const raw = fs.readFileSync(file,'utf8');
  let arr = JSON.parse(raw);
  if(category) arr = arr.filter(p=>p.category===category);
  if(pid) arr = arr.filter(p=>p.id===pid);
  res.status(200).json(arr);
}