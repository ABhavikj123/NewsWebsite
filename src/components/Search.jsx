import React, { useState,useEffect } from 'react'
import SearchNewsItem from './SearchNewsItem'
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"
import { useLocation } from 'react-router-dom'
const Search = (props) => {
    const location = useLocation()
    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults,settotalResults]=useState(0)
    const cap = () => {
        const tit="searchresult"
        return tit.charAt(0).toUpperCase() + tit.slice(1);
    }
    useEffect(()=>{
        updateNews();
    },[location.state.found])
    const updateNews = async () => {
        props.setprogress(10);
        const url = `https://newsapi.org/v2/top-headlines?q=${location.state.found}&apiKey=${props.apikey}&page=${page}`;
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
    useEffect(() => {
        document.title = `${cap()} - DailyNews`;
        updateNews();
    }
        , [])
    return (
        <>
            <h1 className='text-center ' style={{ margin: "35px 0px", marginTop: '90px' }}>{cap()}</h1>
            <InfiniteScroll
                dataLength={articles.length}
                hasMore={articles.length !== totalResults}
                loader={
                    <span className="visually-hidden">Loading...</span>}
            >
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            let a = <div className="col-md-4" key={element.url}>
                                <SearchNewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                            return a
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )
}
Search.defultProps = {
    pageSize: 8,
}
Search.propTypes = {
    pageSize: propTypes.number,
}
export default Search
