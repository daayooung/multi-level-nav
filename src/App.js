import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/common/Header';
import Home from './components/route/Home';
import Intro from './components/route/Intro';
import Profiles from './components/route/Profiles';
import Series from './components/route/Series';
import Sitemap from './api/Sitemap';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <div className="container">
        <Header />

        <section className="contents">
          <Switch>
            <Route
              path="/"
              render={({ match }) => <Home sitemap={Sitemap} match={match} />}
              exact
            />
            <Route
              path="/intro"
              render={({ match }) => <Intro sitemap={Sitemap} match={match} />}
            />
            <Route
              path="/profiles"
              render={({ match }) => (
                <Profiles sitemap={Sitemap} match={match} />
              )}
            />
            <Route
              path="/series"
              render={({ match }) => <Series sitemap={Sitemap} match={match} />}
            />
            <Route
              render={({ location }) => (
                <div>
                  <h1>페이지를 찾을 수 없습니다.</h1>
                  <p>{location.pathname}</p>
                </div>
              )}
            />
          </Switch>
        </section>
      </div>
    </div>
  );
};

export default App;
