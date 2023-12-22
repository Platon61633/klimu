import './App.css';
import logo from "./img/logo.svg";
import slash from './img/slash.svg';
import glaz from './img/glaz.svg';


function App() {
  return (
    <div className="App">
      <div className='main'>
        <form>
          <div className='logo'>
            <img src={logo}/>
            <div className='title'>
              <img src={slash}/>
              <p>АРМ диспетчера ЖД станции</p>
            </div>
          </div>
          <div className='auth'>Авторизация</div>
          <div className='sep'></div>
          <div className='inputs'>
            <div>
              <p>Станция</p>
              <select>
                <option value='Новокузнецк Северный'>Новокузнецк Северный</option>
                <option value='Новокузнецк Северный'>Новокузнецк Северный</option>
                <option value='Новокузнецк Северный'>Новокузнецк Северный</option>
                <option value='Новокузнецк Северный'>Новокузнецк Северный</option>
              </select>
            </div>
            <div>
              <p>Логин<span style={{color: '#BB2532'}}>*</span></p>
              <input className='inpLogin'/>
            </div>
            <div>
              <p>Пароль<span style={{color: '#BB2532'}}>*</span></p>
              <input type='password' className='inpPassword'/>
              <img className='glaz' width={24} src={glaz}/>
            </div>
          </div>
          <div className='sep'></div>
          <div className='submit'>Войти</div>
        </form>
      </div>
    </div>
  );
}

export default App;
