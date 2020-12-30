import React, { useState, useEffect } from 'react';

const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading]=useState(true);
  const [jobs,setJobs]=useState([]);
  const [value, setValue]=useState(0);

  const fetchJobs = async ()=>{
    try {
      const response = await fetch(url);
      const newJobs = await response.json();
      setJobs(newJobs);
      setLoading(false)
    } catch (error) {
      setJobs([]);
      setLoading(false);
      console.log(error);
    }
  }

  useEffect(()=>{
    fetchJobs();
  },[])


  if(loading){
    return(
      <section className="section loading">
        <h1>Loading...</h1>
        <div className="container-loading">
          <div className="box1 box"></div>
          <div className="box2 box"></div>
          <div className="box3 box"></div>
          <div className="box4 box"></div>
        </div>
      </section>      
    )
  }
  
  const { company, dates, duties, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <div className="btn-container">
          {
            jobs.map((job,index)=>(
              <button 
                key={ index } 
                className={`job-btn ${index === value && 'active-btn'}`} 
                onClick={ ()=> setValue(index) }
              >
                { job.company}
              </button>
            ))
          }
        </div>
        <article className="job-info">
          <h3>{ title }</h3>
          <h4>{ company }</h4>
          <p className="job-date">{ dates }</p>
          {
            duties.map((duty,index)=>(
              <div key={ index } className="job-desc">
                <p>{ duty }</p>
              </div>
            ))
          }
        </article>
      </div>
    </section>


  );
}

export default App;
