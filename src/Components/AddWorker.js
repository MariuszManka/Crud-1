import React, { Component } from 'react';
import './AddWorker.css';


class AddWorker extends Component {
    state = {
        name: '',
        surname: ""
    }

    handleClick = (e) => {
        e.preventDefault()
        const { name, surname } = this.state;
        const add = this.props.add(name, surname)
        if (add) {
            this.setState({
                name: "",
                surname: ""
            })
        }
    }

    handleInputChange = (e) => {

        const userInput = e?.target?.value.split(" ")
        console.log()

        if (userInput[0]?.length && userInput[1]?.length) {//m_manka: Znaki zapytania przed kropkami pozwolą pozbyć Ci się błędów z konsoli
            this.setState({
                name: userInput[0],
                surname: userInput[1]
            })
        }

    }
    changeEditMode = (id) => {
        const changedWorker = this.state.worker.filter(worker => worker.id !== id);

        const selectedWorker = this.state.worker.find(worker => worker.id === id);

        this.setState({
            worker: changedWorker,
            name: selectedWorker.name,
            surname: selectedWorker.name
        })

        console.log(this.changeEditMode)
    }

    
    render() {
        // m_manka: Do linijki 60 i zapisu "this.handleInputChange && this.changeEditMode", wyloguj to sobie w konsoli :D
        console.log(this.handleInputChange && this.changeEditMode)
        // m_manka: Z takiego zapisu zwracana jest "goła" funkcja - której nie wywołujesz, w takim kontekście ten zapis nic nie znaczy. Musisz wywołać jedną i drugą funkcję
        return (


            <form className="add" onSubmit={this.handleClick}>
                <label htmlFor="worker">Add worker:
                </label>
                <input type="text" placeholder="Name and Surname" id="worker"
                    defaultValue={this.state.name + this.state.surname} onChange={this.handleInputChange && this.changeEditMode}/> {/* m_manka: Błądny zapis w funkcji onChange, poprawny zapis poniżej: */}
                    {/* defaultValue={this.state.name + this.state.surname} onChange={() => { this.handleInputChange(); this.changeEditMode()} }/> m_manka: Błądny zapis w funkcji onChange, poprawny zapis poniżej: */}

                <button>Add</button>
                <hr />
            </form>


        );
    }
}

export default AddWorker;