import { Component } from "react";
import { Row, Column } from 'simple-flexbox';
import DogCat from '../assets/images/dogcat.jpg';
import '../assets/css/mainPage.css';

class MainPage extends Component {
    render() {

        return (
            <Row flexGrow={1} vertical='start'>
                    <Column flexGrow={1} style={{ width: '100%' }}>
                        <img src={DogCat} style={{ width: '800px', height: '550px' }} alt="DogCat" />
                    </Column>
                    <Column style={{ width: '100%' }}>
                        <p className="title-about" style={{ textAlign: 'center' }}>About Vet Clinic</p>
                        <h1 className="about-clinic">Our pets are more than just furry friends, they are family. We want your pet to have a good life.
                            For us, this means using all our knowledge and experience to keep your four-legged friend happy and healthy.

                            With a focus on health, Animal Clinic takes a modern, real-world US approach to animal care while minimizing
                            fear and stress at every vet visit.

                            The minute you walk in our door, we do everything we can to make you and your pet feel cared for and comfortable - as
                            if you were visiting a good friend who seems to know a lot about medicine.

                            Does your pet need advanced diagnosis or treatment? We are a veterinary clinic in Kyiv, which adheres to an exclusively professional approach to the prevention,
                            diagnosis and treatment of animal diseases, which helps preserve and prolong the lives of pets.</h1>
                            <h2 className="adress">Adress: Knyahyni Ol'hy 98p, Lviv</h2>
                            <h3 className="phone">Number: +380977233722</h3>
                    </Column>
            </Row>

        );
    }
}

export default MainPage;