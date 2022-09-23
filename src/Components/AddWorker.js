import React, { Component } from 'react';
import './AddWorker.css';


class AddWorker extends Component {
    state = {
        name: '',
        surname: ""
    }

    handleClick = (e) => {
        e.preventDefault() //m_manka: Ta funkcja używa na początku blokuje odświeżanie strony w momencie kliknięcia przycisku "Add". Jest to domyslne zachowanie formularza które trzeba zablokować 
        const { name, surname } = this.state;
        console.log("add: ", name, surname);
        const add = this.props.add(name, surname)
        if (add) {
            this.setState({
                name: "",
                surname: ""
            })
        }
    }

    //m_manka: Nigdzie nie ustawiałeś stanu - ignorowaliśmy to co użytkownik wpisuje w kontrolkę. 
    //Aby poprawnie ustawić stan aplikacji tym co użytkownik wpsiuje w kontrolkę należy do tego celu stworzyć funkcję onChange dla kontrolki.
    handleInputChange = (e) => {
        //m_manka: Funkcja .split(" ") dzieli dany ciąg znaków względem tego co przekażesz jako argument (w naszym przypadku przekazujemy spację)
        // Efektem użycia funkcji .split() jest to że zmienna userInput staje się tablicą. Tablica ta będzie miałą tyle elementów ile spacji użyjesz w kontrolce.
        // Chcemy pobrać od użytkownika imię i nazwisko - więc użytkownik będzie musiał wcisnać "spację" po imieniu. W efekcie userInput będzie tablicą która będzie mieć dwa elementy
        // pierwszy element userInput[0] będzie imieniem, drugi userInput[1] będzie nazwiskiem.

        const userInput = e?.target?.value.split(" ") 

        // console.log("Imię i nazwisko: ", userInput) //m_manka: Wyloguj sobie w konsoli wartość userInput i zobacz jak działa funkcja .split()

        //m_manka: Tutaj sprawdzamy czy imię i nazwisko nie są "puste", jeśli nie przypisujemy do stanu aplikacji
        if(userInput[0].length && userInput[1].length){
            this.setState({
                name: userInput[0], //m_manka: Imię to pierwsza wartość z tablicy
                surname: userInput[1] //m_manka: Imię to druga wartość z tablicy
            })
        }  
    }

    render() {
        return (


            <form className="add" onSubmit={this.handleClick}>
                <label htmlFor="worker">Add worker:
                </label>
                <input type="text" placeholder="Name and Surname" id="worker"
                    defaultValue={this.state.name + this.state.surname} onChange={this.handleInputChange}/>
                <button>Add</button>
                <hr />
            </form>


        );
    }
}

export default AddWorker;