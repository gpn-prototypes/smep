import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { NotFoundPage } from './pages/NotFound';
import { AllProjectsPage } from './pages/Main';
import { ProjectPage } from './pages/Project';
import ProjectProvider from './context/ProjectContext';

import "./uikit.css";
import './App.css';

const App = (props) => {
  const { data } = props;
  return (
    <div className="App 
        theme 
        theme_color_gpn-default 
        theme_size_gpn-default 
        theme_control_gpn-default
        theme_breakpoint_default
        theme_font_gpn-default
        theme_gap_medium 
        theme_space_gpn-default
      ">
      <Switch>
        <Route exact path="/">
          <AllProjectsPage projects={data.projects} />
        </Route>
        <Route exact path="/project/:number">
          <ProjectProvider>
            <ProjectPage projects={data.projects} drivers={data.drivers}/>
          </ProjectProvider>
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
