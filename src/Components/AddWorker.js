import React, { Component } from 'react';
import './AddWorker.css';


class AddWorker extends Component {
    state = {
        Name: '', //m_manka: Z małej litery
        Surname: "" //m_manka: Z małej litery
    }

    handleClick = () => {

        //mmanka: TODO - Na samym poczatku tej funkcji musisz odczytać wartości z kontrolek. Całość zamiast w div'ie ma być w tagu <form /> (łącznie z przyciskiem). 
        // Tag <form /> ma mieć zdarzenie onSubmit- <form onSubmit={Twoja_Funkcja} />
        // W "Twoja_Funkcja" odczytujesz wartości z kontrolek <input />
        // Po tym jak odczytasz wartości z kontrolek używasz funkcji this.props.add(imię, nazwisko) - gdzie imię oraz nazwisko to odczytane przez Ciebie wartości
        // Tutaj masz trochę informacji o obsłudze formularzy w react: https://stackoverflow.com/questions/28479239/setting-onsubmit-in-react-js
        
        console.log("add");
        const { Name, Surname } = this.state
        const add = this.props.add(Name, Surname) //m_manka: Nie przekazujesz funkcji "add" do tego komponentu, użyj console.log(this.props); w następnej linijce a zobaczysz że propsy są puste - dodaj odpowiedniego propsa w pliku App.js
        if (add) { //m_manka: Dodając nowego pracownika musisz go dodać do tablicy wszystkich pracowników znajdujących się w state w pliku App.js. Tutaj powinieneś wywołać funckję dodającą pracownika którą przekażesz jako propsa. Uwagi do funkcji dodającej pracownika w pliku App.js
            this.setState({
                Name: "",
                Surname: ""
            })
        }
    }


    render() {
        return (
            <div
                className="add">
                <input type="text" placeholder="add worker" value={this.state.text} /> {/*m_manka: W "state" (linijka 6) w tym komponencie nie masz takiej właściwości jak "text", masz tylko "Name" oraz "Surname" */}
                <button onClick={this.handleClick}>Add</button>
                {/*m_manka: Brakuje kontrolki z której pobierasz nazwisko */}
                <hr />

            </div>
        );
    }
}

export default AddWorker;