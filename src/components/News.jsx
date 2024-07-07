import {useEffect, useState} from 'react'
import NewsItem from './NewsItem'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News=(props)=> {
  const [articles,setarticles]=useState([])
  const [loading,setloading]=useState(true)
  const [page,setpage]=useState(1)
  const [totalResults,settotalResults]=useState(0)

  const cap=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  const updateNews=async()=> {
    props.setprogress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    let data = await fetch(url);
    props.setprogress(30);
    let pd = await data.json();
    props.setprogress(50);
    setarticles(pd.articles)
    setloading(false)
    settotalResults(pd.totalResults)
    props.setprogress(100);
  }
  useEffect(()=>{
    document.title=`${cap(props.category)} - DailyNews`;
    updateNews();  
  }
  ,[])
  const fetchMoreData =async () => {
    setpage(page+1)
    const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    
    setloading(true)
    let data = await fetch(url);
    let pd = await data.json();
    setarticles(articles.concat(pd.articles))
    settotalResults(pd.totalResults)
    setloading(false)
    
    
  };
  
    return (
      <>
        <h1 className='text-center 'style={{margin:"35px 0px",marginTop:'90px'}}>Top {cap(props.category)} headlines</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length!==totalResults}
          loader={
          <span className="visually-hidden">Loading...</span>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
              let a=<div className="col-md-4" key={element.url}>
              <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
            </div>
            return a
          })}
          </div>
        </div>
        </InfiniteScroll>
        </>
    )
    
  }
News.defultProps = {
  country: "in",
  pageSize: 8,
  category: 'general'
}
News.propTypes = {
  country: propTypes.string,
  pageSize: propTypes.number,
  category: propTypes.string

}
export default News
