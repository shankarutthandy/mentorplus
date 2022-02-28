import { useState ,useEffect, useRef} from 'react';
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import MenuBar from "./Components/MenuBar/MenuBar";
import Home from "./Components/Home/Home";
import data from './slots.json'
function dayFromDate(date,month,year)
{
  const t=[0, 3, 2, 5, 0, 3, 5, 1, 4, 6, 2, 4];
  year-=(month<3)?1:0;
  const day=(year + Math.floor(year/4) -  Math.floor(year/100) +  Math.floor(year/400) + t[month-1] + date) % 7;
  switch(day){
    case 0: return "Sun";
    case 1: return "Mon";
    case 2: return "Tue";
    case 3: return "Wed";
    case 4: return "Thu";
    case 5: return "Fri";
    case 6: return "Sat";
  }
}
function getMonth(month){
  switch(month){
    case 1: return "Jan";
    case 2: return "Feb"  
    case 3: return "Mar" 
    case 4: return "Apr"
    case 5: return "May"
    case 6: return "Jun"
    case 7: return "Jul"
    case 8: return "Aug"
    case 9: return "Sep"
    case 10: return "Oct"
    case 11: return "Nov"
    case 12: return "Dec"
  }
}
function App() {
  const [sidebar,setSideBar]=useState(false);
  const [selectedPage,setSelectedPage]=useState({home:true,profile:false});
  const [slots,setSlots]=useState([]);
  const [dropDown,setDropState]=useState([false,false,false])
  const [popup,setPopup]=useState(false)
  const homeRef=useRef(null)
  useEffect(()=>{
    var tmp=[];
     data.forEach((ele)=>{
       var date,month,day,year,availability;
       month=getMonth(Number(ele.date.slice(5,7)));
       date=Number(ele.date.slice(8,10));
       year=Number(ele.date.slice(0,4));
       day=dayFromDate(date,Number(ele.date.slice(5,7)),year)
       availability=[];
       ele.available.forEach((e)=>
         {
             let hr=e.hour;
             let hre=e.hour+1;
             let s="";
             if(e.min===0){
               s+=hr+" PM - "+hre+" PM";
             }
             else{
               s+=hr+":"+e.min+" PM - "+hre+":"+e.min+" PM";
             }
             availability.push(s);
         }
       )
       tmp.push({
         date:date,
         month:month,
         day:day,
         availability:availability
       })
     })
 setSlots(tmp);
 },[])
 useEffect(()=>{
    if(dropDown[0]||dropDown[1]||dropDown[2])homeRef.current.style.opacity="0.2";
    else homeRef.current.style.opacity="1";
 },[dropDown])
  const setPage=(path)=>{
    if(path=="home")
      setSelectedPage({home:true,profile:false});
    else if(path=="profile")
    setSelectedPage({home:false,profile:true});
  }
  return (
    <>
    <NavBar onMenuClick={()=>{
      if(!sidebar)homeRef.current.style.opacity="0.2";
      else homeRef.current.style.opacity="1";
      setSideBar(!sidebar);
    }}
    dropDown={dropDown}
    setDropState={setDropState}
    />
    <div style={{display:'flex'}}>
    <MenuBar onClose={()=>{homeRef.current.style.opacity="1";setSideBar(false)}} sidebar={sidebar} setPage={setPage} home={selectedPage.home} profile={selectedPage.profile}/>
    <Home onClose={()=>{homeRef.current.style.opacity="1";setSideBar(false)}} ref={homeRef} slots={slots} pay={()=>setPopup(true)}/>
    {/* <Modal>
      Message for popup
    </Modal> */}
    </div>
    </>
  );
}
export default App;
