import { Component } from "react";
import MainPage from "./MainPage";
import { Row } from 'simple-flexbox';
import { Route } from 'react-router-dom';

class Module extends Component{
    render() {
        return (
          <Row flexGrow={ 1 }>
            <Route exact path="/" component={ MainPage }/>
         </Row>
      );
    }
}

export default Module;