import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import style from './style/index'
import MyHeader from './components/MyHeader'
import MyNavbar from './components/MyNavbar'
import Home from './pages/Home/index'
import Detail from './pages/Detail/index'
import MyPokemon from './pages/MyPokemon/index'
import MyPokemonDetail from './pages/MyPokemon/Detail'

function App() {
  return (
    <div className="App">
        <Router>
          <MyHeader />
          <MyNavbar />
          <style.Container>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/detail/:name" component={Detail}></Route>
              <Route path="/my-pokemon" component={MyPokemon}></Route>
              <Route path="/my-detail/:name" component={MyPokemonDetail}></Route>
            </Switch>
          </style.Container>
        </Router>
    </div>
  );
}

export default App;
