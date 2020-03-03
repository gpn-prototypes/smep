import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from './pages/Login';
import { NotFoundPage } from './pages/NotFound';
import { AllProjectsPage } from './pages/Main';
import { ProjectPage } from './pages/Project';

import "@gpn-design/uikit/dist/style.css";
import './App.css';

const App = (props) => {
  const { projects } = props;
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
          <AllProjectsPage projects={projects.projects} />
        </Route>
        <Route exact path="/project/:number">
          <ProjectPage projects={projects.projects}/>
        </Route>
        <Route path="/login" component={LoginPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
};

export default App;
