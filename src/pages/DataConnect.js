import React, {useState, useEffect} from "react";
import axios from "axios";
// import CourseService from "../services/auth.service";
import { Link } from "react-router-dom";

function DataConnect() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get('https://reactserver-production.up.railway.app/')
            .then(res => {
                console.log(res)
            setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })
    // let [courseData, setCourseData] = useState(null);
    // useEffect(() => {
    //   CourseService.getCourseByName("Article")
    //     .then((data) => {
    //       console.log(data);
    //       setCourseData(data.data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }, []);
    return (
        <div className="Home">
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                  <ul>
                      {
                          posts.map(post => <div key={post.id}>
                              <div class="article-container">
                                  <h1>Article{post.id}</h1>
                                  <p class="content">By {post.name}</p>
                                  <br/>
                                  <div class="content">{post.title}</div>
                                  <br/>
                                  <Link to={`/Article/${post.id}`}>More</Link>
                              </div>
                          </div>)
                      }
                  </ul>
              </div>
            </div>
          </div>
        </div>
      );
}

export default DataConnect;
