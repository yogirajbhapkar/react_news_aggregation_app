import { useState } from "react";
import all_news from './news.json';

const Create = () => {
  const [title, setTitle] = useState(null);
  const [author, setAuthor] = useState(null);
  const [category, setCategory] = useState(null);
  const [source, setSource] = useState(null);
  const [description, setDescription] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNews = {title, author , category, source, description };
    console.log(JSON.stringify(newNews));
    all_news.push(newNews);
    console.log(JSON.stringify(all_news));
  }

  return (
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
          <option value="Politics">Politics</option>
          <option value="Technology">Technology</option>
        </select>
        <button>Add News</button>
      </form>
    </div>
  );
}
 
export default Create;