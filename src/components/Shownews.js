import React from "react";

const Shownews = (prop) => {  
   const newslist=prop.newslist
      return (
         <div>
            <div className="nav-text"> {newslist}
         </div>
            </div>

      )
   
}

export default Shownews;