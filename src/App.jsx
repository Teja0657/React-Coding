import Colleagues from './Colleagues.jsx';
import Header from './Header.jsx'
import Card from './Card_comp.jsx';
import Button from './Button.jsx';
import Student from './Student_props.jsx';
import List from './List.jsx';
import Usestate from './usesate.jsx';
import Useeffect from './Useeffect.jsx';
import Onchange from './Onchange.jsx';
import ColorPicker from './ColorPicker.jsx';
import MyComponent from './ObjectsUpdate.jsx';
function App() {
      return(
        <>
          <Header/>
          <hr/>
          <Colleagues/>
          <hr/>
          <Card/>
          <hr/>
          <Button/>
          <hr/>
          <Student name={"Flashman"} age={23} isStudent={true}/>
          <Student name={"Police"} age={35} isStudent={false}/>
          <Student name={"Professor"} age={47} isStudent={false}/>
          <Student name={"Fireman"} age={29} isStudent={true}/>
          {/* <Student /> */}
          <hr/>
          <List/>
          <hr/>
          <Usestate/>
          <hr/>  
          <Useeffect/>
          <hr/>
          <Onchange/>
          <hr/>
          <ColorPicker/>
          <hr/>
          <MyComponent/>
        </>
      );
}

export default App;
