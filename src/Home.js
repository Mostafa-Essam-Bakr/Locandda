

import {  Link, NavLink } from "react-router-dom";
import Pro from "./Product";
import IndividualIntervalsExample from "./Sliderimg"
import IndividualIntervalsExample2 from "./Sliderbigimg";
import Example from "./Lunch";
import cover from "./Assets/image13.webp"

import "./Home.css"
import Footer from "./Components/Footer";
import im31 from "../src/Assets/image31.jpg"
import im32 from "../src/Assets/image32.jpg"
import im33 from "../src/Assets/image33.jpg"
import im37 from "../src/Assets/image37.jpg"
import im38 from "../src/Assets/image38.jpg"
import im39 from "../src/Assets/image39.jpg"
import im40 from "../src/Assets/image40.jpg"
import im42 from "../src/Assets/image422.jpg"
import im41 from "../src/Assets/image41.jpg"


import im19 from "../src/Assets/image19.webp"
import im18 from "../src/Assets/image18.webp"
import im17 from "../src/Assets/image17.webp"
import im16 from "../src/Assets/image16.webp"
import im15 from "../src/Assets/image15.webp"
import im26 from "../src/Assets/image26.webp"
import Search from "./Components/Serach";
export default function Home(){
    return(<div>
        <nav className="navhom" style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"white",height:"50px",
    backgroundColor: "rgb(82, 113, 141)"}}> <h1 className="logo"><i className="fa-solid fa-square-h fa-lg " style={{color:"white"}}></i>ome</h1>
               <div className="pbook" style={{display:"flex" , flexDirection:"column"}}><Link to="./Book" className="h1 book" >
                 Book                           <i className="fa-solid fa-square-caret-down"></i>

                 
                 
                 
                  </Link>
                  <ul className="bkslide">       

<Link id="RouterLink" to="/Hotel"> <li>Hotel</li></Link> 
<Link id="RouterLink" to="/Room"> <li>Room</li></Link> 
<Link id="RouterLink" to="/"> <li>place</li></Link></ul>
</div>


<Example/>


















               
                  

        <Link to="/Dashbord" className="h1" > <i className="fa-regular fa-user"></i> Admin </Link>   
             <Link to="/Login" className="h1" ><i className="fa-solid fa-arrow-right-from-bracket"></i> LOG OUT </Link>
</nav>

<div> <img src={cover} className="cover" /></div>

<div>

<IndividualIntervalsExample />


</div>

<div className="bs"><button className="b1" type="submit">Book your place</button>
<button  className="b2" type="submit" >Type Hotel</button></div>


<div>
    <Pro />
</div>


<div className="parent-servse">

<img src={im41} alt="im" className="cover-servse">


</img>
<div className="mother-img">



<div className="imgs"><img src={im33} alt="im"></img><h4>WE CLEAN EVERYDAY</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros. Fusce dapibus,
 tellus ac cursus commodo,
  tortor mauris condimentum. </div>




<div className="imgs"><img src={im37} alt="im"></img><h4>FREE BREAKFAST</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros. Fusce dapibus,
  tellus ac cursus commodo, 
  tortor mauris condimentum.</div>





<div className="imgs"><img src={im38} alt="im"></img><h4>ENJOY NIGHTLIFE</h4>
Morbi leo risus, porta ac consectetur ac, 
vesti bulum at eros. Fusce dapibus, 
tellus ac cursus commodo,
 tortor mauris condimentum.</div>


<div className="imgs"><img src={im42} alt="im"></img><h4>FREE BREAKFAST</h4>
Morbi leo risus,
 porta ac consectetur ac, 
vesti bulum at eros. Fusce dapibus,
 tellus ac cursus commodo,
 tortor mauris condimentum.</div>


<div className="imgs"><img src={im40} alt="im"></img><h4>MIDDLE OF DOWNTOWN</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros.
  Fusce dapibus,
   tellus ac cursus commodo, 
  tortor mauris condimentum.</div>





  <div className="imgs"><img src={im39} alt="im"></img><h4>MEET NEW PEOPLE</h4>
Morbi leo risus, porta ac consectetur ac,
 vesti bulum at eros.
  Fusce dapibus,
   tellus ac cursus commodo, 
  tortor mauris condimentum.</div>
  </div>




</div>


<IndividualIntervalsExample2 />

<Search />

<Footer />



    </div>)
}