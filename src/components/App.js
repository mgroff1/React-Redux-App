import React from 'react'
import Search from '../containers/Search'
import Repos from '../containers/Repos'


const App = () => (
  <div className="app">
  <h2 className="header">Getting Git repos by username</h2>
    <Search user='mgroff1' />
    <div className="repolist">
    <Repos />
    </div>
  </div>
)

export default App
