import React, { useState, useEffect } from "react";
import { useFetch } from "./useFetch";
import Follower from "./Follower";
function App() {
  const { loading, data } = useFetch();
  // 3. single page
  // 1) which page to show up at the time
  const [page, setPage] = useState(0);
  // 2) actual followers item to show up
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    // data initialy is []
    if (loading) return;
    setFollowers(data[page]);
  }, [loading, page, data]);

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <main>
      <div className="section-title">
        <h1>{loading ? "loading..." : "Pagination"}</h1>
      </div>
      <section className="followers">
        <div className="container">
          {followers.map((follower) => {
            return <Follower key={follower.id} {...follower} />;
          })}
        </div>
        {!loading && (
          <div className="btn-container">
            {data.map((_, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? "active-btn" : ""}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
// 4) display button
// 1. conditional render -> after loading is done, show buttons
// 2. function to control which page show up
export default App;
