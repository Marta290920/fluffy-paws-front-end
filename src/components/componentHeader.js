import React, { Component } from 'react';
import { Column, Row } from 'simple-flexbox';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.state = {};
      };
    
      render() {
        const { title, lastUpdate } = this.props;
        console.log(this.props)
        console.log(title)
    
        return (
          <Row className="header" flexGrow={ 1 } horizontal='space-between' vertical='center'>
            <Column>
              <Row horizontal='center' vertical='center' style={ {paddingLeft: 15} }>
                {/* <img src={ img } alt="" style={ {marginRight: 10} }/> */}
                { title }
              </Row>
            </Column>
            {
              lastUpdate && <Column horizontal='end'>
                  <Row horizontal='end' vertical='center'>
                    <Column horizontal='end' style={ {paddingRight: 15} }>
                      <Row horizontal='end' vertical='center' style={ {color: '#ccc', fontSize: '12px'} }>
                              Last Update:
                      </Row>
                      <Row horizontal='end' vertical='center' style={ {color: '#000', fontSize: '12px', fontWeight: 700} }>
                        {lastUpdate.replace("-", "UTC -")}
                      </Row>
                    </Column>
                  </Row>
                </Column>
            }
          </Row>
        );
      }
    }
    
    export default Header;