import './App.css';

function App() {

  return (
    <form>
      <h3>Calculating alcohol blood level</h3>
      <div>
        <label>Weight</label>
        <input type="number"/>
      </div>
      <div>
        <label>Bottles</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
      </div>
      <div>
        <label>Time</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
          </select>
      </div>
      <div id="radio">
        <input type="radio" value="Male" name="gender"/> Male
        <input type="radio" value="Female" name="gender"/> Female
      </div>
      <div>
        <output></output>
      </div>
      <div>
        <button>Calculate</button>
      </div>
    </form>
  );
}

export default App;
