import React from 'react'
import nature1 from '../images/nature1.jpeg';
import nature2 from '../images/nature2.jpeg';
import GalleryProps from './GalleryProps';
function Gallary() {
  const student=[{ 
    sroll:1200,
    sname:"Sarita ",
    sbranch:"CSE",
    scollege:"ABES",
    pic:nature1

  },
{ 
    sroll:1201,
    sname:"Jyoti ",
    sbranch:"CSE",
    scollege:"ABES",
    pic:nature1

  },{ 
    sroll:1202,
    sname:"Sita ",
    sbranch:"CSE",
    scollege:"ABES",
    pic:nature1

  },{ 
    sroll:1203,
    sname:"Geeta",
    sbranch:"CSE",
    scollege:"ABES",
    pic:nature1

  }]
  return (
    <div div style = {{border:'2px solid green',width:'600px',height:'2000px',backgroundColor:'cyan',}} >
{/* <h2> Welcome to Photo Gallery</h2>
<div>

<img src={nature1} height={200} width={200} alt="nature image"></img>
</div>
<div>

<img src={nature2} height={200} width={200} alt="nature image"></img>
</div>
<GalleryProps /> */}
{/* <GalleryProps pic={nature1} sroll="144" sname="Sarita" sbranch="CSE" scollege="ABES"></GalleryProps>
<GalleryProps pic={nature1} sroll="200" sname="Sita" sbranch="CSE" scollege="ABES"></GalleryProps> */}

{/* <GalleryProps data={student[0]} />
<GalleryProps data={student[1]} />
<GalleryProps data={student[2]} />
<GalleryProps data={student[3]} /> */}

{
student.map((ele)=>(
  <div>
    <GalleryProps data={ele} />
  </div>
))
    } 
  
</div>)}

export default Gallary
