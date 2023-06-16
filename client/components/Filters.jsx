import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import dotenv from 'dotenv'
import axios from 'axios'

//dotenv.config({ path: '../.env' })

const Filters = () => {
    const [filterButtons, setFilterButtons] = useState([]);
  //  const api_key = process.env.API_KEY

    useEffect(() => {
        // Fetch video categories
        // const fetchCategories = async () => {
        //     try {
        //         const response = await axios.get(
        //             `https://www.googleapis.com/youtube/v3/videoCategories`,
        //             {
        //                 //we can adjust the params based on the google docs to get more results, order it differently and have our type return different stuff -sp
        //                 params: {
        //                     part: 'snippet',
        //                     regionCode: 'US',
        //                     key: `${api_key}`,
        //                 },
        //             }
        //         )
        //         setFilterButtons(response.data.items);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
    
        // fetchCategories();
            setFilterButtons(['All', 'Category 1', 'Category 2']);
        }, []);
    

    return (
        <div>
        {filterButtons.map((button, index) => (
          <button className="filter-options" key={index}>
            {button}
          </button>
        ))}
      </div>
    );
};



export default Filters;