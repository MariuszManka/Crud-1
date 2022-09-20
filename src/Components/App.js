import React, { Component } from 'react';
import AddWorker from './AddWorker';

import ListWorker from './ListWorker';

class App extends Component {
  counter = 4; //m_manka: counter powinien być częścią state
  state = {
    // counter: 4 //m_manka
    worker: [ //m_manka: zamiast worker, nazwij to workers - to jest tablica wielu pracowników
      {
        id: 0,//m_manka: Nazwy kluczy z małej litery
        Name: "John",//m_manka: Nazwy kluczy z małej litery
        Surname: "Test",//m_manka: Nazwy kluczy z małej litery
        BirthDate: "10.01.2//m_manka: Nazwy kluczy z małej litery022",
        Position: "CTO",//m_manka: Nazwy kluczy z małej litery
        Location: "USA",//m_manka: Nazwy kluczy z małej litery
        active: true


      },
      {
        id: 1,
        Name: "Paweł",
        Surname: "Gawron",
        BirthDate: "12.02.2022",
        Position: "Programmer",
        Location: "Poland",
        active: true


      },
      {
        id: 2,
        Name: "Nada",
        Surname: "Martins",
        BirthDate: "14.03.2022",
        Position: "HR",
        Location: "Italy",
        active: true


      },
      {
        id: 3,
        Name: "Ellena",
        Surname: "Cobb",
        BirthDate: "20.04.2022",
        Position: "HELPER",
        Location: "Portugal",
        active: true

      },
    ]
  }



  deleteTask = (id) => {
    console.log("delete id " + id);
    let worker = [...this.state.worker];
    worker = worker.filter(worker => worker.id !== id)

    this.setState({
      worker
    })

  }


  EditWorker = (Name, Surname) => { //m_manka: nazwy funkcji zawsze z małej litery. W React tylko komponenty zaczynamy z wielkiej
    console.log("edit element on id:" + Name + Surname);
    const edit = [...this.state.worker];
    const numberTwo = edit.findIndex(worker => worker.Name && worker.Surname === Name && Surname);
    edit.forEach(numberTwo, 1);
    console.log(edit);

    this.setState({
      Name: Name,
      Surname: Surname
    })
  }

  AddWorker = (Name, Surname) => {//m_manka: nazwy funkcji zawsze z małej litery. W React tylko komponenty zaczynamy z wielkiej
    //m_manka: Wywołując tą funckję w pliku AddWorker, pamiętaj żeby przekazać wszystkie argumenty, wywołanie będzie wyglądać tak: AddWorker(this.state.Name, this.state.Surname)
    const workers = {//m_manka: zamiast nazwy "workers" użyj "worker" - dodajesz jednego pracownika
      id: this.counter,
      Name: Name,
      Surname: Surname,
      BirthDate: "10.01.2022",
      Position: "CTO",
      Location: "USA",
      active: true
    }
    this.counter++ //m_manka: Zmieniaj counter za pomocą setState
    console.log(this.state.worker)
    
    //m_manka: W tym miejscu zrób tak:
    // const currentWorkers = this.state.worker
    // currentWorkers.push(workers)

    this.setState(prevState => ({
      worker: [...prevState.worker, workers]  //m_manka: W tym miejscu zrób tak: worker: currentWorkers
    }))

    return true
  }

  render() {


    return (
      <div className="App">

        IT group Workers
        {/* <EditWorker edit={this.EditWorker} /> */}
        {/* <AddWorker add={this.AddWorker} /> */}
        <AddWorker /> {/*m_manka: Tutaj dodaj propsa add w ten sposób - add={this.AddWorker} */}
        <ListWorker worker={this.state.worker} delete={this.deleteTask} change={this.changeTaskStatus} />


      </div>
    );
  }
}

export default App;
