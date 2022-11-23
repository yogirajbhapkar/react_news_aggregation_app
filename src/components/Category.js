import React from "react";
import newsFromJson from './news.json';
import Shownews from './Shownews';
// import Create from './Create';
import { useState } from "react";


const Category = (props) => {
   const [allnews, setAllnews] = useState([])
   const [newslist, setNewsList] = useState(null)

   const allCategory = Object.keys(newsFromJson)

// Create dropdown category 
   const catList = allCategory.map((item) => {
         return (
            <option key={item} value={item}>{item}</option>
         )
      });

//Add all news from JSON to allNews array
   allCategory.map((key) => (
      console.log(newsFromJson[key]),
      newsFromJson[key].forEach(news => {
         console.log(news);
         news.category = key  //Adding property
         if(allnews.indexOf(news) === -1){
            allnews.push(news)
         }            
      })
   ))      
   console.log(allnews)
   const getNews = (e) => {
      const list = allnews.map((news) => {
         if (e.target.value === news.category || e.target.value === 'All')
            return <li><a href={news.source} target="_blank" rel="noopener noreferrer">{news.title}</a>
               <p>{news.description}<br /></p></li>
      })
      setNewsList(list)

   }

   const [title, setTitle] = useState(null);
   const [author, setAuthor] = useState(null);
   const [category, setCategory] = useState(null);
   const [source, setSource] = useState(null);
   const [description, setDescription] = useState(null);

   const handleSubmit = (e) => {
      e.preventDefault();
      const newNews = { title, author, category, source, description };
      allnews.push(newNews);
      console.log(JSON.stringify(allnews));
      setTitle("")
      setAuthor("")
      setAuthor("")
      setSource("")
      setDescription("")
   }
   return (
      <div>
{/* News Creation Form */}

         <div className="create">
            <br></br>
            <form onSubmit={handleSubmit}>
               <label>Title:</label>
               <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
               <label>Author:</label>
               <input
                  type="text"
                  required
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
               />

               <label>Description:</label>
               <input
                  type="text"
                  required
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />

               <label>Source:</label>
               <input
                  type="text"
                  required
                  value={source}
                  onChange={(e) => setSource(e.target.value)}
               />

               <label>Category:</label>
               <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
               >
                  <option required>-- select category --</option>

                  {catList}
               </select>
               <button>Add News</button>
            </form>
         </div>

{/* To get news for category selected from dropdown */}

         <div className="horizontal-div">
            <h3>Show News</h3>
            <p>
               <select id="selcategory" name="category" onChange={getNews}>
                  <option>-- select category --</option>
                  <option key="All" value="All">All</option>

                  {catList}
               </select>
            </p>
         </div>
         <div className="newscontent">
            <Shownews newslist={newslist} /></div>
      </div>
   )
}

export default Category;