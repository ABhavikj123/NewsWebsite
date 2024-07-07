import React, { useContext, useState, createContext } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import News from './components/News'
import LoadingBar from 'react-top-loading-bar'
import Countrystate from './components/Countrystate'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import Search from './components/Search'
const App = () => {
  const apikey = import.meta.env.VITE_REACT_APP_NEWS_API;
  const [progress, setprogress] = useState(0)
  return (
    <>
      <Countrystate>
        <div>
          <div style={{ color: "white" }} to="/"></div>
          <Router>
            <Navbar />
            <LoadingBar
              color='red'
              height={3}
              progress={progress} />

            <Routes>
              <Route exact path="/business" element={<News setprogress={setprogress} apikey={apikey} key="business" pageSize={6} category="business" />} />
              <Route exact path="/entertainment" element={<News setprogress={setprogress} apikey={apikey} key="entertainment" pageSize={6} category="entertainment" />} />
              <Route exact path="/" element={<News setprogress={setprogress} apikey={apikey} key="general" pageSize={6} category="general" />} />
              <Route exact path="/health" element={<News setprogress={setprogress} apikey={apikey} key="health" pageSize={6} category="health" />} />
              <Route exact path="/science" element={<News setprogress={setprogress} apikey={apikey} key="science" pageSize={6} category="science" />} />
              <Route exact path="/sports" element={<News setprogress={setprogress} apikey={apikey} key="sports" pageSize={6} category="sports" />} />
              <Route exact path="/technology" element={<News setprogress={setprogress} apikey={apikey} key="technology" pageSize={6} category="technology" />} />
              <Route exact path="/category" element={<Search setprogress={setprogress} apikey={apikey} key="search" pageSize={6} />} />
            </Routes>
          </Router>
        </div>
      </Countrystate>
    </>
  )
}


export default App
