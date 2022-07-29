import React from 'react';
import './App.css';
import { ThemeContext } from './theme-context'

function App() {

  
  const { theme, toggle, dark } = React.useContext(ThemeContext)
  

  return (
    <div className='app'>
         <h1>Theme Toggler</h1>
         <div   
            className='app_header'
            onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color
              }}
         
         >
           <h1>Context API Theme Toggler</h1>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tincidunt tincidunt tincidunt. Proin condimentum placerat laoreet. Suspendisse ex urna, vehicula sagittis imperdiet nec, rhoncus ac urna. Morbi pretium dictum nisi, vitae dapibus purus ultrices sed. Mauris tellus nunc, luctus eu orci nec, aliquam bibendum nulla. Nam ullamcorper pharetra turpis semper placerat. In vulputate luctus mauris, pellentesque rutrum mauris sagittis et. Nunc efficitur orci id velit ullamcorper efficitur. Mauris vitae dolor convallis, molestie velit quis, facilisis mauris. Suspendisse venenatis quam quam, vestibulum bibendum magna venenatis sit amet. Vestibulum nec urna ullamcorper, ornare ex eu, auctor nisl. Nunc faucibus ut erat in euismod. Quisque in ornare ligula.

              Nulla feugiat vitae est in fermentum. Nam leo velit, vulputate id massa ac, condimentum elementum dolor. Integer at nisi pretium, varius diam nec, auctor ligula. Nam semper dui feugiat risus facilisis blandit. Aliquam quis lorem eu velit volutpat aliquam eget nec enim. Integer condimentum luctus accumsan. Vivamus non tortor elit. Proin dapibus massa a mi lobortis dictum. Nunc in egestas nulla.</p>
           <div 
              
              className="button_container"
            >
              {`Toggle to ${!dark  ? 'Dark' : 'Light'} theme`}
           </div>
         </div>
         
            
     
    </div>
  );
}

export default App;
