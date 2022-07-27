import { Component } from "react";
import { Row } from 'simple-flexbox';
import '../assets/css/footer.css';
class Footer extends Component{
    render() {
        return (
          <Row horizontal='spaced' vertical='center' flexGrow={ 1 }  style={ {width: '100%', backgroundColor: '#5ce1e6'} }>
            <footer align="center" className="footer"> “Fluffy Paws” © Всі права захищені 2022</footer>
          </Row>
        );
      }
    }
    export default Footer;