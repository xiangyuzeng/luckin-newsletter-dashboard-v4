'use client';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, AreaChart, Area, Legend } from 'recharts';
import { META, EXEC_SIGNALS, MARKET_SHARE, KEY_METRICS, DASHBOARD_ROWS, PRICING, COMPETITORS, CHINESE_BRANDS, STORE_ECON, NEW_PRODUCTS, INDUSTRY_NEWS, DIGITAL_DATA, ACTIONS, TIMELINE, LUCKIN_SWOT, SOURCES } from './data';

const B='#0365C0',N='#1A365D',T='#00A5A5',G='#059669',R='#DC2626',A='#D97706',t2='#6B7280',GOLD='#DCBD23';
const Card=({children,style})=><div style={{background:'#fff',borderRadius:14,padding:24,boxShadow:'0 1px 4px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)',transition:'box-shadow 0.2s',...style}}>{children}</div>;
const Badge=({type,children})=>{const c=type==='pos'?{b:'#ECFDF5',c:G}:type==='neg'?{b:'#FEF2F2',c:R}:{b:'#F3F4F6',c:t2};return<span style={{display:'inline-block',padding:'2px 8px',borderRadius:99,fontSize:11,fontWeight:600,background:c.b,color:c.c}}>{children}</span>};
const PB=({l})=>{const c=l==='\u6781\u9ad8'?R:l==='\u9ad8'?A:'#3B82F6';return<span style={{padding:'2px 10px',borderRadius:99,fontSize:11,fontWeight:700,background:c,color:'#fff'}}>{l}</span>};
const SH=({children,s})=><h3 style={{margin:'0 0 16px',fontSize:16,fontWeight:700,color:N}}>{children}{s&&<span style={{fontSize:10,color:'#94A3B8',marginLeft:6}}>({s})</span>}</h3>;
const Dot=()=><div style={{width:5,height:5,borderRadius:99,background:B,flexShrink:0,marginTop:6}}/>;

const tabs=['\u7f16\u8005\u6309','\u6570\u636e\u603b\u89c8','\u6d88\u8d39\u8005\u4e0e\u5b9a\u4ef7','\u5e02\u573a\u8d8b\u52bf','\u54c1\u724c\u4e0e\u7ade\u4e89','\u65b0\u54c1\u4e0e\u884c\u4e1a','\u6218\u7565\u5efa\u8bae'];

export default function Page(){
  const [tab,setTab]=useState(0);
  const [exp,setExp]=useState(null);
  const [dc,setDc]=useState('\u5168\u90e8');
  const cats=['\u5168\u90e8','\u5e02\u573a','\u6d88\u8d39\u8005','\u8d8b\u52bf','\u4f9b\u5e94\u94fe','\u7ade\u4e89','\u5e76\u8d2d'];
  const fRows=dc==='\u5168\u90e8'?DASHBOARD_ROWS:DASHBOARD_ROWS.filter(r=>r.cat===dc);

  return(
  <div style={{minHeight:'100vh',background:'#F7F8FA',fontFamily:"'DM Sans','Noto Sans SC',-apple-system,sans-serif",color:'#1F2937'}}>
    <header style={{background:`linear-gradient(135deg,${N} 0%,#0C4A6E 60%,#164E63 100%)`,color:'#fff',position:'sticky',top:0,zIndex:50}}>
      <div style={{maxWidth:1320,margin:'0 auto',padding:'24px 24px 0'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',flexWrap:'wrap',gap:12}}>
          <div>
            <div style={{display:'flex',alignItems:'center',gap:10,marginBottom:6}}>
              <div style={{width:30,height:30,borderRadius:8,background:'linear-gradient(135deg,#0365C0,#00A5A5)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800,color:'#fff'}}>L</div>
              <div style={{fontSize:11,fontWeight:600,color:'#93C5FD',letterSpacing:1}}>{META.docId} \u00B7 {META.issue}</div>
            </div>
            <h1 style={{margin:0,fontSize:27,fontWeight:800,letterSpacing:'-0.02em'}}>{META.title}</h1>
            <p style={{margin:'5px 0 0',fontSize:13,color:'#BFDBFE'}}>{META.date} \u00B7 {META.team} \u00B7 {META.period}</p>
          </div>
          <div style={{background:'rgba(255,255,255,0.06)',borderRadius:12,padding:'10px 18px',border:'1px solid rgba(255,255,255,0.1)',backdropFilter:'blur(8px)',maxWidth:440}}>
            <div style={{fontSize:10,color:'#DCBD23',fontWeight:600,letterSpacing:1,marginBottom:2}}>{'\u672C\u671F\u4E3B\u9898'}</div>
            <div style={{fontSize:12,fontWeight:500,lineHeight:1.4}}>{META.theme}</div>
          </div>
        </div>
        <div style={{display:'flex',gap:2,flexWrap:'wrap',marginTop:14,borderTop:'1px solid rgba(255,255,255,0.08)',paddingTop:10,paddingBottom:10}}>
          {tabs.map((t,i)=><button key={i} onClick={()=>setTab(i)} style={{padding:'7px 16px',borderRadius:8,border:'none',cursor:'pointer',fontSize:12,fontWeight:tab===i?700:500,background:tab===i?B:'transparent',color:tab===i?'#fff':'rgba(255,255,255,0.65)',transition:'all 0.15s'}}>{t}</button>)}
        </div>
      </div>
      <div style={{height:3,background:'linear-gradient(90deg,#0365C0,#00A5A5,#DCBD23)'}}/>
    </header>

    <main style={{maxWidth:1320,margin:'0 auto',padding:'28px 24px 56px'}}>

    {tab===0&&<>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))',gap:14,marginBottom:20}}>
        {EXEC_SIGNALS.map((s,i)=>(
          <Card key={i} style={{borderLeft:`4px solid ${[B,R,G][i]}`,padding:'18px 20px'}}>
            <div style={{fontSize:14,fontWeight:700,color:N,marginBottom:6}}>{i+1}. {s.title}</div>
            <div style={{fontSize:12,color:'#374151',lineHeight:1.6,marginBottom:6}}>{s.detail}</div>
            <div style={{fontSize:10,color:'#94A3B8'}}>{'\u6765\u6E90'}: {s.source}</div>
          </Card>
        ))}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:16}}>
        <Card>
          <SH s="Placer.ai">{'\u7F8E\u56FD\u5496\u5561\u5E02\u573A\u4EFD\u989D\u53D8\u8FC1'}</SH>
          <div style={{height:260}}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MARKET_SHARE} margin={{left:10,right:30}}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
                <XAxis dataKey="year" style={{fontSize:11}}/>
                <YAxis domain={[0,100]} tickFormatter={v=>v+'%'} style={{fontSize:11}}/>
                <Tooltip formatter={v=>v+'%'}/>
                <Legend wrapperStyle={{fontSize:11}}/>
                <Area type="monotone" dataKey="sbuxDk" name="SBUX+DK" stackId="1" fill="#00704A" stroke="#00704A" fillOpacity={0.7}/>
                <Area type="monotone" dataKey="mid" name={'\u4E2D\u578B\u8FDE\u9501'} stackId="1" fill={B} stroke={B} fillOpacity={0.7}/>
                <Area type="monotone" dataKey="small" name={'\u5C0F\u578B\u8FDE\u9501'} stackId="1" fill={T} stroke={T} fillOpacity={0.7}/>
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div style={{background:'#FFFBEB',borderLeft:'3px solid '+A,borderRadius:6,padding:'8px 12px',marginTop:10,fontSize:11}}>
            <b>{'\u5173\u952E\u6D1E\u5BDF\uFF1A'}</b>SBUX+DK{'\u4EFD\u989D'}5{'\u5E74\u964D'}8ppt(85.9%{'\u2192'}77.9%){'\uFF0C'}SBUX FY25{'\u518D\u5173'}627{'\u5BB6\u2014\u2014\u745E\u5E78\u8FDB\u5165\u6700\u4F73\u7A97\u53E3\u3002'}
          </div>
        </Card>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <Card style={{background:'#ECFDF5',border:'1px solid #A7F3D0',flex:1}}>
            <SH style={{color:G}}>{'\u6838\u5FC3\u4F18\u52BF'}</SH>
            {LUCKIN_SWOT.str.map((s,i)=><div key={i} style={{fontSize:11,padding:'2px 0',display:'flex',gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
          </Card>
          <Card style={{background:'#FEF2F2',border:'1px solid #FECACA',flex:1}}>
            <SH style={{color:R}}>{'\u4E3B\u8981\u6311\u6218'}</SH>
            {LUCKIN_SWOT.chg.map((s,i)=><div key={i} style={{fontSize:11,padding:'2px 0',display:'flex',gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
          </Card>
        </div>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(175px,1fr))',gap:10}}>
        {KEY_METRICS.map((m,i)=><Card key={i} style={{padding:'12px 14px'}}><div style={{fontSize:10,color:t2}}>{m.label}</div><div style={{fontSize:24,fontWeight:800,color:m.trend==='up'?G:R,margin:'2px 0'}}>{m.value}</div><div style={{fontSize:9,color:t2}}>{m.sub}</div><div style={{fontSize:9,fontWeight:600,color:m.trend==='up'?G:R}}>{m.delta}</div><div style={{fontSize:8,color:'#CBD5E1'}}>{m.src}</div></Card>)}
      </div>
    </>}

    {tab===1&&<>
      <Card>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:14,flexWrap:'wrap',gap:8}}>
          <SH style={{margin:0}}>{'\u5B8C\u6574\u6570\u636E\u4EEA\u8868\u76D8'} ({fRows.length}{'\u9879'})</SH>
          <div style={{display:'flex',gap:3,flexWrap:'wrap'}}>
            {cats.map(c=><button key={c} onClick={()=>setDc(c)} style={{padding:'3px 10px',borderRadius:5,border:'none',cursor:'pointer',fontSize:11,fontWeight:dc===c?700:500,background:dc===c?B:'#F3F4F6',color:dc===c?'#fff':'#374151'}}>{c}</button>)}
          </div>
        </div>
        <div style={{overflow:'auto'}}>
          <table style={{width:'100%',borderCollapse:'collapse',fontSize:12}}>
            <thead><tr style={{background:N,color:'#fff'}}>{['\u5206\u7C7B','\u6307\u6807','\u6570\u636E','\u53D8\u5316','\u5F71\u54CD','\u6765\u6E90'].map(h=><th key={h} style={{padding:'8px 10px',textAlign:'left',fontWeight:600}}>{h}</th>)}</tr></thead>
            <tbody>{fRows.map((r,i)=><tr key={i} style={{background:i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
              <td style={{padding:'7px 10px',fontWeight:600,color:B,whiteSpace:'nowrap'}}>{r.cat}</td>
              <td style={{padding:'7px 10px',fontWeight:600}}>{r.m}</td>
              <td style={{padding:'7px 10px'}}>{r.d}</td>
              <td style={{padding:'7px 10px'}}>{r.c}</td>
              <td style={{padding:'7px 10px'}}><Badge type={r.impact}>{r.impact==='pos'?'\u5229\u597D':r.impact==='neg'?'\u98CE\u9669':'\u5173\u6CE8'}</Badge></td>
              <td style={{padding:'7px 10px',fontSize:10,color:'#94A3B8'}}>{r.s}</td>
            </tr>)}</tbody>
          </table>
        </div>
      </Card>
    </>}

    {tab===2&&<>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:16,marginBottom:16}}>
        <Card>
          <SH s="NCA 2025">{'\u6D88\u8D39\u5168\u666F'}</SH>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8}}>
            {[{l:'\u6BCF\u65E5\u996E\u7528\u7387',v:'66%',d:'\u8D85\u74F6\u88C5\u6C34(64%)'},{l:'\u51B7\u5496\u5561\u5360\u6BD4',v:'31%',d:'+23% YoY'},{l:'\u5F97\u6765\u901F\u8D2D\u4E70',v:'59%',d:'\u5386\u53F2\u65B0\u9AD8'},{l:'APP\u4E0B\u5355',v:'36%',d:'+6% YoY'},{l:'\u7CBE\u54C1\u6E17\u900F',v:'46%',d:'100\u676F\u4E2D59\u676F'},{l:'\u5496\u5561\u5E97\u5E02\u573A',v:'$3430\u4EBF',d:'\u5168\u7403\u6700\u5927'}].map((s,i)=><div key={i} style={{background:'#F0F9FF',borderRadius:6,padding:10}}><div style={{fontSize:10,color:t2}}>{s.l}</div><div style={{fontSize:20,fontWeight:800,color:B}}>{s.v}</div><div style={{fontSize:9,color:t2}}>{s.d}</div></div>)}
          </div>
        </Card>
        <Card>
          <SH s="NCA, EY, Tastewise">Z{'\u4E16\u4EE3\u753B\u50CF'}</SH>
          {[{p:'80%',t:'\u81F3\u5C11\u6BCF\u4E24\u5468\u6D88\u8D39\u529F\u80FD\u996E\u54C1(EY)'},{p:'75%',t:'\u793E\u4EA4\u5A92\u4F53\u53D1\u73B0\u54C1\u724C'},{p:'72%',t:'\u6BCF\u6708\u5C1D\u8BD5\u65B0\u996E\u54C1'},{p:'68%',t:'\u504F\u597D\u51B7\u5496\u5561'},{p:'38%',t:'\u5E0C\u671B\u5496\u5561\u6709\u8BA4\u77E5/\u60C5\u7EEA\u589E\u5F3A'},{p:'~15\u5C81',t:'\u5F00\u59CB\u559D\u5496\u5561(\u5386\u53F2\u6700\u65E9)'}].map((s,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'6px 0',borderBottom:i<5?'1px solid #F3F4F6':'none'}}><div style={{minWidth:44,fontSize:16,fontWeight:800,color:T}}>{s.p}</div><div style={{fontSize:12}}>{s.t}</div></div>)}
        </Card>
      </div>
      <Card>
        <SH>{'\u5404\u54C1\u724C\u4E2D\u676F\u62FF\u94C1\u4EF7\u683C\u5BF9\u6BD4'}</SH>
        <div style={{height:260}}>
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={PRICING} layout="vertical" margin={{left:76,right:30}}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB"/>
              <XAxis type="number" domain={[0,8]} tickFormatter={v=>'$'+v} style={{fontSize:11}}/>
              <YAxis type="category" dataKey="brand" style={{fontSize:11}} width={70}/>
              <Tooltip formatter={v=>'$'+v.toFixed(2)}/>
              <Bar dataKey="latte" radius={[0,6,6,0]} barSize={24}>{PRICING.map((e,i)=><Cell key={i} fill={e.color}/>)}</Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div style={{background:'#EFF6FF',borderLeft:'4px solid '+B,borderRadius:6,padding:'10px 14px',marginTop:14,fontSize:12}}>
          <b>{'\u5B9A\u4EF7\u7B56\u7565\uFF1A'}</b><span style={{color:B,fontWeight:700}}>$1.99{'\u57FA\u7840\u6B3E'}</span> {'\u2192'} <span style={{color:B,fontWeight:700}}>$2.99{'\u4E3B\u529B\u6B3E'}</span> {'\u2192'} <span style={{color:B,fontWeight:700}}>$3.99{'\u529F\u80FD\u6B3E'}</span>
        </div>
      </Card>
    </>}

    {tab===3&&<>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(340px,1fr))',gap:14}}>
        {[
          {icon:'\u{1F9EC}',t:'\u86CB\u767D\u8D28+\u7EA4\u7EF4\u4E09\u5927\u529F\u80FD\u540C\u7206',stats:['80%\u7F8E\u56FD\u4EBA\u4F18\u5148\u86CB\u767D(IFIC)','57%\u8BA1\u5212\u589E\u52A0\u86CB\u767D(Talker)','SBUX RTD 22g+5g\u7EA4\u7EF4/$3.99','DK\u86CB\u767D\u597615g+Tim Hortons 23g','PepsiCo CEO:\u7EA4\u7EF4=\u4E0B\u4E00\u4E2A\u86CB\u767D\u8D28'],tip:'USDA 2026.01\u65B0\u6307\u5357\u5F3A\u8C03\u6BCF\u9910\u86CB\u767D',src:'IFIC,Starbucks,CNBC'},
          {icon:'\u26A1',t:'\u5496\u5561\u94FE\u4E0E\u80FD\u91CF\u996E\u8FB9\u754C\u6D88\u5931',stats:['SBUX Energy Refreshers(125mg,+$0.80)','DK Zero(145mg,\u96F6\u7CD6,6\u53E3\u5473)','Dutch Bros Blue Rebel=24%\u9500\u552E','Panera\u65B0Energy Refreshers','Tim Hortons TimBoost'],tip:'\u6BCF\u5BB6\u4E3B\u6D41\u5496\u5561\u94FE\u73B0\u5728\u76F4\u63A5\u4E0EMonster/Celsius\u7ADE\u4E89',src:'SBUX/DK/Panera\u5B98\u65B9'},
          {icon:'\u2728',t:'\u51B7\u6CE1\u6CAB\u6210\u4E3A\u4EA7\u54C1\u521B\u65B0\u6838\u5FC3\u5E73\u53F0',stats:['SBUX\u672C\u5B63\u63A84+\u79CD\u98CE\u5473\u6CE1\u6CAB','DK Cloud Latte\u5E73\u53F0','Dutch Bros\u82992\u4E07+\u98CE\u5473\u7EC4\u5408','\u51B7\u6CE1\u6CAB\u53D6\u4EE3\u7CD6\u6D46\u6210\u5BA2\u5236\u5316\u6838\u5FC3','\u7206\u70B8\u73E0$37.7\u4EBFboba\u5E02\u573A(CAGR11.1%)'],tip:'\u8D28\u611F\u521B\u65B0\u9A71\u52A8Z\u4E16\u4EE3\u8D2D\u4E70:75-80%\u5173\u6CE8\u8D28\u611F',src:'BRI,Innova'},
          {icon:'\u{1F375}',t:'\u629B\u8336\u4E3B\u6D41\u5316\u7A81\u7834',stats:['\u83DC\u5355+30.2%,\u793E\u4EA4+107%','Yelp\u8BC42026 #1\u98DF\u54C1\u8D8B\u52BF','Blank Street\u54C1\u724C\u5316Coffee&Matcha','SBUX\u8336\u9500\u552E2021\u4EE5\u6765+70%','\u8C03\u5473\u629B\u8336\u641C\u7D22+180%,\u793C\u4EEA\u629B\u8336+210%'],tip:'\u629B\u8336\u662F\u745E\u5E78\u4F5C\u4E3A\u4E2D\u56FD\u54C1\u724C\u7684\u5929\u7136\u4F18\u52BF\u54C1\u7C7B',src:'Tastewise,Yelp'},
          {icon:'\u{1F30F}',t:'\u4E9A\u6D32\u98CE\u5473+\u6000\u65E7\u98CE\u5473\u53CC\u7EBF\u5347\u6E29',stats:['Ube(\u7D2B\u85AF)\u6210SBUX\u6625\u5B63\u4E3B\u9898','T.Hasegawa:\u9ED1\u751C\u6A31\u6843=2026\u5E74\u5EA6\u53E3\u5473','\u9999\u8549\u6210\u6625\u5B63\u7A81\u7834\u98CE\u5473(DK 8\u6B3E)','Poppi/Olipop\u540C\u63A8Shirley Temple','Nestle:swangy(\u7518+\u9178)\u5B9A\u4E492026\u5173\u952E\u8BCD'],tip:'\u745E\u5E78\u5929\u7136\u5177\u5907\u4E9A\u6D32\u98CE\u5473\u521B\u65B0\u4F18\u52BF(\u751F\u6930/\u6842\u82B1/\u8354\u679D)',src:'PR Newswire,BevNET,Food Dive'},
          {icon:'\u{1F4F1}',t:'TikTok\u6210\u4E3A\u65B0\u83DC\u5355\u677F',stats:['64% Z\u4E16\u4EE3TikTok\u641C\u7D22\u4EA7\u54C1','Cloud Coffee(\u6930\u5B50\u6C34+\u6D53\u7F29)\u7206\u706B','ube\u62FF\u94C1(\u8DDF\u968FSBUX\u53D1\u5E03)\u75C5\u6BD2\u5F0F','32oz\u51B0\u5496\u5561\u6876\u75C5\u6BD2\u5F0F\u4F20\u64AD','SBUX\u96C72\u540D\u5168\u804C\u5185\u5BB9\u521B\u4F5C\u8005'],tip:'\u5F71\u54CD\u8005ROI $5.78/$1,\u5FADKOL CPM\u4EC5$119',src:'Accio,VICE,NRN'},
        ].map((t,i)=>(
          <Card key={i} style={{padding:18}}>
            <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:10}}>
              <span style={{fontSize:22}}>{t.icon}</span>
              <h4 style={{margin:0,fontSize:14,fontWeight:700,color:N}}>{t.t}</h4>
            </div>
            {t.stats.map((s,j)=><div key={j} style={{fontSize:12,padding:'3px 0',display:'flex',alignItems:'flex-start',gap:6}}><Dot/><span style={{marginTop:1}}>{s}</span></div>)}
            <div style={{marginTop:10,fontSize:11,color:T,fontWeight:600,borderTop:'1px solid #E5E7EB',paddingTop:8}}>{'\u{1F4A1}'} {t.tip}</div>
            <div style={{fontSize:9,color:'#CBD5E1',marginTop:4}}>{'\u6765\u6E90'}: {t.src}</div>
          </Card>
        ))}
      </div>
    </>}

    {tab===4&&<>
      <Card style={{marginBottom:14}}>
        <SH>{'\u7ADE\u4E89\u683C\u5C40\u77E9\u9635'}</SH>
        <div style={{overflow:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
          <thead><tr style={{background:N,color:'#fff'}}>{['\u54C1\u724C','\u95E8\u5E97','\u5BA2\u5355','\u683C\u5F0F','\u529F\u80FD\u6027','\u6570\u5B57\u5316','\u5A01\u80C1','\u672C\u671F\u5173\u952E'].map(h=><th key={h} style={{padding:'7px 8px',textAlign:'left',fontWeight:600}}>{h}</th>)}</tr></thead>
          <tbody>{COMPETITORS.map((c,i)=><tr key={i} style={{background:c.n==='Luckin'?'#EFF6FF':i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
            <td style={{padding:'7px 8px',fontWeight:700,color:c.n==='Luckin'?B:'#1F2937'}}>{c.n}</td>
            <td style={{padding:'7px 8px'}}>{c.s}</td><td style={{padding:'7px 8px'}}>{c.t}</td>
            <td style={{padding:'7px 8px'}}>{c.f}</td><td style={{padding:'7px 8px',fontSize:10}}>{c.fn}</td>
            <td style={{padding:'7px 8px',fontSize:10}}>{c.dg}</td>
            <td style={{padding:'7px 8px'}}>{c.th>0?'\u2605'.repeat(c.th)+'\u2606'.repeat(5-c.th):'\u2014'}</td>
            <td style={{padding:'7px 8px',fontSize:10,maxWidth:220}}>{c.move}</td>
          </tr>)}</tbody>
        </table></div>
      </Card>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14}}>
        <Card>
          <SH style={{color:R}}>{'\u4E2D\u56FD\u54C1\u724C\u7ADE\u4E89\u76D1\u63A7'}</SH>
          {CHINESE_BRANDS.map((b,i)=><div key={i} style={{border:'1px solid #FCA5A5',borderRadius:8,padding:12,background:'#FEF2F2',marginBottom:i<3?8:0}}>
            <div style={{display:'flex',justifyContent:'space-between',marginBottom:4}}>
              <b style={{fontSize:13,color:N}}>{b.n}</b>
              <span style={{fontSize:10,fontWeight:700,padding:'1px 6px',borderRadius:99,background:b.rc,color:'#fff'}}>{'\u98CE\u9669'}{b.risk}</span>
            </div>
            <div style={{fontSize:11,color:t2}}>{b.d}</div>
            <div style={{fontSize:11,marginTop:4}}><b>{'\u7F8E\u56FD'}{b.st}{'\u5E97'}</b> \u00B7 {b.p} \u00B7 {b.k}</div>
          </div>)}
        </Card>
        <Card>
          <SH s={'\u5404\u516C\u53F8\u8D22\u62A5'}>{'\u95E8\u5E97\u683C\u5F0F\u7ECF\u6D4E\u5B66'}</SH>
          <div style={{overflow:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
            <thead><tr style={{background:N,color:'#fff'}}>{['\u54C1\u724C','\u95E8\u5E97','\u5E74\u5747\u6536\u5165','\u6295\u8D44','\u5907\u6CE8'].map(h=><th key={h} style={{padding:'6px 8px',textAlign:'left'}}>{h}</th>)}</tr></thead>
            <tbody>{STORE_ECON.map((s,i)=><tr key={i} style={{background:s.c.includes('\u745E\u5E78')?'#EFF6FF':i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
              <td style={{padding:'6px 8px',fontWeight:600}}>{s.c}</td>
              <td style={{padding:'6px 8px'}}>{s.s}</td>
              <td style={{padding:'6px 8px',fontWeight:700,color:G}}>{s.rev?'$'+s.rev+'\u4E07':'\u2014'}</td>
              <td style={{padding:'6px 8px',fontSize:10}}>{s.inv}</td>
              <td style={{padding:'6px 8px',fontSize:10}}>{s.note}</td>
            </tr>)}</tbody>
          </table></div>
        </Card>
      </div>
      <Card>
        <SH>{'\u6570\u5B57\u5316\u4E0E\u9009\u5740\u80FD\u529B'}</SH>
        <div style={{overflow:'auto'}}><table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
          <thead><tr style={{background:N,color:'#fff'}}>{['\u54C1\u724C','\u4F1A\u5458','\u79FB\u52A8','\u5FE0\u8BDA\u5EA6','\u5173\u952E\u6570\u636E'].map(h=><th key={h} style={{padding:'7px 8px',textAlign:'left'}}>{h}</th>)}</tr></thead>
          <tbody>{DIGITAL_DATA.chains.map((c,i)=><tr key={i} style={{background:c.n.includes('\u745E\u5E78')?'#EFF6FF':i%2===0?'#F9FAFB':'#fff',borderBottom:'1px solid #E5E7EB'}}>
            <td style={{padding:'7px 8px',fontWeight:700,color:c.n.includes('\u745E\u5E78')?B:'#1F2937'}}>{c.n}</td>
            <td style={{padding:'7px 8px'}}>{c.members}</td><td style={{padding:'7px 8px'}}>{c.mobile}</td>
            <td style={{padding:'7px 8px'}}>{c.loyalty}</td>
            <td style={{padding:'7px 8px',fontSize:10}}>{c.hl}</td>
          </tr>)}</tbody>
        </table></div>
      </Card>
    </>}

    {tab===5&&<>
      <SH style={{fontSize:17,marginBottom:12}}>{'\u65B0\u54C1\u76D8\u70B9'}</SH>
      <div style={{display:'grid',gap:8,marginBottom:24}}>
        {NEW_PRODUCTS.map((p,i)=><Card key={i} style={{padding:'14px 18px'}}>
          <div style={{display:'flex',alignItems:'center',gap:8,marginBottom:6,flexWrap:'wrap'}}>
            <span style={{fontSize:16}}>{p.c}</span>
            <b style={{fontSize:13,color:N}}>{p.b}</b>
            <span style={{fontSize:11,color:t2}}>{p.d}</span>
            <Badge type="neu">{p.tag}</Badge>
          </div>
          <div style={{display:'flex',flexWrap:'wrap',gap:5,marginBottom:6}}>
            {p.items.map((it,j)=><span key={j} style={{background:'#F3F4F6',borderRadius:4,padding:'2px 8px',fontSize:11}}>{it}</span>)}
          </div>
          <div style={{fontSize:11,color:T,fontWeight:600}}>{p.insight}</div>
        </Card>)}
      </div>
      <SH style={{fontSize:17,marginBottom:12}}>{'\u884C\u4E1A\u8981\u95FB'}</SH>
      <div style={{display:'grid',gap:8}}>
        {INDUSTRY_NEWS.map((n,i)=><Card key={i} style={{padding:'12px 16px',borderLeft:'4px solid '+(n.impact==='pos'?G:n.impact==='neg'?R:A)}}>
          <div style={{display:'flex',alignItems:'center',gap:6,marginBottom:4}}>
            <span style={{fontSize:10,fontWeight:700,padding:'1px 6px',borderRadius:99,background:'#F3F4F6',color:t2}}>{n.cat}</span>
            <b style={{fontSize:12,color:N}}>{n.t}</b>
            <Badge type={n.impact}>{n.impact==='pos'?'\u5229\u597D':n.impact==='neg'?'\u98CE\u9669':'\u5173\u6CE8'}</Badge>
          </div>
          <div style={{fontSize:11,color:'#374151',lineHeight:1.4}}>{n.d}</div>
          <div style={{fontSize:9,color:'#94A3B8',marginTop:2}}>{'\u6765\u6E90'}: {n.s}</div>
        </Card>)}
      </div>
    </>}

    {tab===6&&<>
      <SH style={{fontSize:17,marginBottom:12}}>{'\u4E94\u5927\u4F18\u5148\u884C\u52A8'}</SH>
      <div style={{display:'grid',gap:8,marginBottom:20}}>
        {ACTIONS.map(a=><Card key={a.id} style={{padding:0,overflow:'hidden',cursor:'pointer',border:exp===a.id?'2px solid '+B:'2px solid transparent'}} onClick={()=>setExp(exp===a.id?null:a.id)}>
          <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',padding:'12px 16px',background:exp===a.id?'#EFF6FF':'#fff'}}>
            <div style={{display:'flex',alignItems:'center',gap:10}}>
              <div style={{width:30,height:30,borderRadius:6,background:a.pc,color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:14,fontWeight:800}}>{a.id}</div>
              <div><div style={{fontSize:13,fontWeight:700,color:N}}>{a.t}</div><div style={{fontSize:10,color:t2}}>{a.tl}</div></div>
            </div>
            <div style={{display:'flex',alignItems:'center',gap:6}}><PB l={a.p}/><span style={{fontSize:14,color:t2,transform:exp===a.id?'rotate(180deg)':'none',transition:'0.2s'}}>{'\u25BE'}</span></div>
          </div>
          {exp===a.id&&<div style={{padding:'10px 16px 14px',borderTop:'1px solid #E5E7EB'}}>
            <div style={{fontSize:11,color:B,fontWeight:600,marginBottom:8,background:'#EFF6FF',padding:'5px 10px',borderRadius:5}}>{'\u4F9D\u636E'}: {a.why}</div>
            <table style={{width:'100%',borderCollapse:'collapse',fontSize:11}}>
              <thead><tr style={{background:'#F9FAFB'}}><th style={{padding:'5px 8px',textAlign:'left',color:t2}}>{'\u884C\u52A8\u9879'}</th><th style={{padding:'5px 8px',textAlign:'left',color:t2}}>{'\u5B9A\u4EF7'}</th><th style={{padding:'5px 8px',textAlign:'left',color:t2}}>{'\u7ADE\u54C1\u57FA\u51C6'}</th></tr></thead>
              <tbody>{a.items.map((it,j)=><tr key={j} style={{borderBottom:'1px solid #F3F4F6'}}><td style={{padding:'6px 8px'}}>{it.a}</td><td style={{padding:'6px 8px',fontWeight:600,color:B}}>{it.pr}</td><td style={{padding:'6px 8px',color:t2}}>{it.bm}</td></tr>)}</tbody>
            </table>
          </div>}
        </Card>)}
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:16}}>
        <Card>
          <SH>{'\u793E\u4EA4\u5A92\u4F53\u5173\u952E\u6570\u636E'}</SH>
          {DIGITAL_DATA.social.disc.map((s,i)=><div key={i} style={{display:'flex',alignItems:'center',gap:10,padding:'6px 0',borderBottom:i<2?'1px solid #F3F4F6':'none'}}><div style={{minWidth:44,fontSize:16,fontWeight:800,color:T}}>{s.s}</div><div style={{fontSize:12}}>{s.l}</div></div>)}
          <div style={{background:'#F0F9FF',borderRadius:6,padding:10,marginTop:10}}>
            <div style={{fontSize:10,color:t2}}>{'\u7F51\u7EA2\u8425\u9500ROI'}</div>
            <div style={{fontSize:17,fontWeight:800,color:N}}>{'\u6BCF$1\u2192'}{DIGITAL_DATA.social.roi.per$}</div>
            <div style={{fontSize:10,color:t2}}>{'\u5FADKOL CPM '}{DIGITAL_DATA.social.roi.cpm}{', \u4E92\u52A8'}{DIGITAL_DATA.social.roi.eng}</div>
          </div>
          <div style={{marginTop:10}}><div style={{fontSize:11,fontWeight:600,color:N,marginBottom:4}}>TikTok{'\u70ED\u95E8\u8D8B\u52BF'}</div>
            {DIGITAL_DATA.social.tiktok.map((t,i)=><div key={i} style={{fontSize:11,padding:'2px 0',display:'flex',gap:6}}><Dot/><span style={{marginTop:1}}>{t}</span></div>)}
          </div>
        </Card>
        <Card>
          <SH>{'\u5173\u952E\u65F6\u95F4\u8282\u70B9'}</SH>
          {TIMELINE.map((t,i)=><div key={i} style={{display:'flex',gap:12,paddingBottom:12,borderLeft:i<TIMELINE.length-1?'2px solid #D1D5DB':'none',marginLeft:6,paddingLeft:18,position:'relative'}}>
            <div style={{position:'absolute',left:-1,top:0,width:12,height:12,borderRadius:99,background:i===0?B:'#D1D5DB',border:'2px solid #fff',marginLeft:-7}}/>
            <div><div style={{fontSize:12,fontWeight:700,color:N,marginBottom:3}}>{t.d}</div>{t.evs.map((e,j)=><div key={j} style={{fontSize:11,padding:'1px 0'}}>{'\u2022'} {e}</div>)}</div>
          </div>)}
        </Card>
      </div>
      <Card style={{background:'#F9FAFB'}}>
        <SH>{'\u6570\u636E\u6765\u6E90'}</SH>
        <div style={{display:'flex',flexWrap:'wrap',gap:5}}>{SOURCES.map((s,i)=><span key={i} style={{background:'#fff',border:'1px solid #E5E7EB',borderRadius:4,padding:'2px 7px',fontSize:10,color:t2}}>{s}</span>)}</div>
      </Card>
    </>}
    </main>
    <footer style={{background:N,color:'#94A3B8',textAlign:'center',fontSize:10}}>
      <div style={{height:2,background:'linear-gradient(90deg,#0365C0,#00A5A5,#DCBD23)'}}/>
      <div style={{padding:'16px 0'}}>
        <div>{META.team} {'\u00B7'} {META.docId} {'\u00B7'} {META.date} {'\u00B7'} {'\u5185\u90E8\u4F7F\u7528'} {'\u00B7'} v5.0</div>
        <div style={{marginTop:3,fontSize:9,color:'#64748B'}}>{'\u672C\u62A5\u544A\u57FA\u4E8E\u516C\u5F00\u6570\u636E\u6E90\u7F16\u5236\uFF0C\u4EC5\u4F9B\u5185\u90E8\u53C2\u8003\u3002'}</div>
      </div>
    </footer>
  </div>);
}