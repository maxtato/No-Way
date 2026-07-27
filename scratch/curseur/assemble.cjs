/* Assemble questions-curseur.js à partir des lots {q,n,u,e} produits par thème.
   Les échelles (min/max) sont calculées ici, pas par les rédacteurs : c'est le
   seul moyen de garantir des positions de réponse vraiment variées et une
   bonne réponse toujours atteignable au pas près.
   Usage: node assemble.cjs <dir> <repo> [--write] */
const fs = require('fs');
const path = require('path');
const [,, DIR, REPO] = process.argv;

const THEMES = ['geo','histo','sci','espace','pop','sport','wtf','litt',
                'musique','art','cuisine','techno','animaux','langue'];

const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'')
  .replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
const sig = s => [...new Set(norm(s).split(' ').filter(w=>w.length>3))].sort().join(' ');

/* --- échelles --- */
function nice(x){
  if(x<=0) return 1;
  const k=Math.floor(Math.log10(x)), p=Math.pow(10,k), m=x/p;
  const c=[1,1.2,1.5,2,2.5,3,4,5,6,8,10];
  return c.reduce((a,b)=>Math.abs(b-m)<Math.abs(a-m)?b:a)*p;
}
function pas(mn,mx){
  const e=mx-mn, raw=e/120, p=Math.pow(10,Math.floor(Math.log10(raw))), m=raw/p;
  const s=(m<1.5?1:m<3.5?2:m<7.5?5:10)*p;
  return e>=20?Math.max(1,Math.round(s)):s;
}
/* générateur pseudo-aléatoire figé : le même lot donne toujours le même jeu */
function rng(seed){let x=seed;return()=>{x=(x*1103515245+12345)&0x7fffffff;return x/0x7fffffff}}

/* On cherche la borne « jolie » la plus proche de l'idéal QUI LAISSE la bonne
   réponse atteignable au pas près : sinon le 100 devient impossible. */
function echelle(n,unite,cible){
  if(unite==='%') return [0,100];
  const ideal=n/cible, k0=Math.floor(Math.log10(ideal));
  const cands=[];
  for(const k of [k0-1,k0,k0+1]){
    const p=Math.pow(10,k);
    for(const m of [1,1.2,1.5,2,2.5,3,4,5,6,8,10]) cands.push(m*p);
  }
  const ok=cands.filter(mx=>mx>n*1.05).sort((a,b)=>Math.abs(a-ideal)-Math.abs(b-ideal));
  for(const mx of ok){
    const s=pas(0,mx);
    if(Math.abs(Math.round(n/s)*s-n)/mx<=0.015) return [0,mx];
  }
  return [0, ok[0]||nice(n*1.15)];
}

/* --- lecture, validation, dédup --- */
const existant = fs.existsSync(path.join(REPO,'questions-curseur.js'))
  ? new Function(fs.readFileSync(path.join(REPO,'questions-curseur.js'),'utf8')+'; return QC;')()
  : [];
const vus=new Set(), sigs=new Set();
for(const q of existant){ vus.add(norm(q.q)); sigs.add(sig(q.q)); }

const propre = o => o && typeof o.q==='string' && o.q.trim().length>=15
  && typeof o.n==='number' && isFinite(o.n) && o.n>0
  && typeof o.u==='string' && o.u.trim().length>0 && o.u.length<=22
  && typeof o.e==='string' && o.e.trim().length>=10 && o.e.split(/\s+/).length<=45;

const frais={}; const rejets=[];
for(const t of THEMES){
  frais[t]=[];
  const f=path.join(DIR,`new_${t}.json`);
  if(!fs.existsSync(f)){ console.log(`!! manquant new_${t}.json`); continue; }
  let arr; try{ arr=JSON.parse(fs.readFileSync(f,'utf8')); }
  catch(e){ console.log(`!! JSON invalide new_${t}.json — ${e.message}`); continue; }
  for(const o of arr){
    if(!propre(o)){ rejets.push([t,'format',o&&o.q]); continue; }
    const nq=norm(o.q), sq=sig(o.q);
    if(vus.has(nq)||sigs.has(sq)){ rejets.push([t,'doublon',o.q]); continue; }
    vus.add(nq); sigs.add(sq);
    frais[t].push({q:o.q.trim(),n:o.n,u:o.u.trim(),e:o.e.trim()});
  }
}

/* --- attribution des positions : étalées sur toute la plage --- */
const tous=[];
for(const t of THEMES) for(const o of frais[t]) tous.push({...o,t});
const N=tous.length;
if(N){
  const cibles=Array.from({length:N},(_,i)=>0.10+(0.92-0.10)*i/Math.max(1,N-1));
  const r=rng(20260726);
  for(let i=cibles.length-1;i>0;i--){const j=Math.floor(r()*(i+1));[cibles[i],cibles[j]]=[cibles[j],cibles[i]];}
  tous.forEach((o,i)=>{ const [mn,mx]=echelle(o.n,o.u,cibles[i]); o.min=mn; o.max=mx; });
}
/* contrôle : réponse atteignable, position dans les clous */
let horsPlage=0, inatteignable=0;
const pos=[];
for(const o of tous){
  if(!(o.n>=o.min&&o.n<=o.max)) horsPlage++;
  const s=pas(o.min,o.max);
  if(Math.abs(Math.round(o.n/s)*s-o.n)/(o.max-o.min)>0.015) inatteignable++;
  pos.push((o.n-o.min)/(o.max-o.min));
}
const parTheme={}; for(const o of tous) parTheme[o.t]=(parTheme[o.t]||0)+1;
for(const t of THEMES) console.log(`${t.padEnd(8)} ${parTheme[t]||0}`);
console.log(`\nexistant=${existant.length}  nouvelles=${N}  TOTAL=${existant.length+N}`);
console.log(`rejets=${rejets.length}  hors plage=${horsPlage}  100 inatteignable=${inatteignable}`);
if(pos.length){
  const h=Array(10).fill(0); pos.forEach(p=>h[Math.min(9,Math.floor(p*10))]++);
  const moy=pos.reduce((a,b)=>a+b,0)/pos.length;
  const ec=Math.sqrt(pos.reduce((a,b)=>a+(b-moy)**2,0)/pos.length);
  console.log('positions par décile :',h.join(' '),`| moy ${moy.toFixed(2)} écart-type ${ec.toFixed(2)}`);
}
for(const [t,w,q] of rejets.slice(0,10)) console.log(`  - [${t}] ${w}: ${(q||'?').slice(0,64)}`);

/* --- écriture --- */
if(process.argv.includes('--write')){
  const esc=s=>s.replace(/\\/g,'\\\\').replace(/"/g,'\\"');
  const ligne=o=>`{t:'${o.t}',q:"${esc(o.q)}",n:${o.n},min:${o.min},max:${o.max},u:"${esc(o.u)}",e:"${esc(o.e)}"}`;
  // on garde l'existant tel quel, puis les nouvelles regroupées par thème
  const parT={}; for(const o of tous) (parT[o.t]=parT[o.t]||[]).push(o);
  const NOMS={geo:'Terre',histo:'Hier',sci:'Cerveau',espace:'Là-haut',pop:'Pop',sport:'Terrain',
    wtf:'WTF',litt:'Récits',musique:'Sons',art:'Pinceau',cuisine:'Miam',techno:'Machines',
    animaux:'Bêtes',langue:'Mots'};
  let out=`/* =========================================================
   NO WAY! — mode CURSEUR (« à vue de nez »)
   Chaque question a une réponse CHIFFRÉE : le joueur place un
   curseur sur une échelle, et le plus proche remporte la manche.
   Structure : {t, q, n, min, max, u, e}
     t = thème (pastille) · q = énoncé · n = bonne réponse
     min/max = bornes de l'échelle · u = unité · e = explication
   Les échelles sont calculées pour que la réponse tombe tantôt au
   début, tantôt à la fin : viser le milieu ne paie pas.
   Chargé avant curseur.html ; expose la globale \`QC\`.
   ========================================================= */
const QC = [
`;
  const blocs=[];
  for(const t of THEMES){
    const anciennes=existant.filter(o=>o.t===t).map(o=>ligne({...o,t}));
    const nouvelles=(parT[t]||[]).map(ligne);
    const L=anciennes.concat(nouvelles);
    if(L.length) blocs.push(`/* ---------- ${NOMS[t]} ---------- */\n`+L.join(',\n'));
  }
  out+=blocs.join(',\n\n')+'\n];\n';
  fs.writeFileSync(path.join(REPO,'questions-curseur.js'),out);
  console.log(`ÉCRIT questions-curseur.js — ${existant.length+N} questions`);
}
