'use client';
import { useEffect, useState } from 'react';
export default function TopPromoBar(){
  const slides = [
    { id:1, jsx: (<>{'✨ '}<span style={{fontWeight:700,fontSize:14}}>GET  OFF YOUR FIRST ORDER WHEN YOU</span> <a href='/login' style={{color:'#FFD700',textDecoration:'underline',fontWeight:800}}>SIGN UP</a>!</>) },
    { id:2, jsx: '👜 Handmade Bags' },
    { id:3, jsx: '📱 Tech Accessories' },
    { id:4, jsx: '🌟 Custom Collection' },
  ];
  const [idx,setIdx] = useState(0);
  useEffect(()=>{ const t = setInterval(()=> setIdx(i=> (i+1)%slides.length), 4000); return ()=> clearInterval(t); }, []);
  return (
    <div className='top-slider' role='region' aria-label='Promotions'>
      <div style={{display:'flex',width:'100%',justifyContent:'center'}}>{slides[idx].jsx}</div>
      <div style={{position:'absolute',top:'50%',left:8,transform:'translateY(-50%)'}}><button onClick={()=>setIdx((idx-1+slides.length)%slides.length)} style={{background:'transparent',border:'none',color:'#fff',fontSize:18}}>&#10094;</button></div>
      <div style={{position:'absolute',top:'50%',right:8,transform:'translateY(-50%)'}}><button onClick={()=>setIdx((idx+1)%slides.length)} style={{background:'transparent',border:'none',color:'#fff',fontSize:18}}>&#10095;</button></div>
    </div>
  );
}