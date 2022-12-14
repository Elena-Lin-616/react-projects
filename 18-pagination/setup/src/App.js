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
  }, [loading]);

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
      </section>
    </main>
  );
}

export default App;
