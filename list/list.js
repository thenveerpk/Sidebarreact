import react from 'react';
import listitem from './listitem';

class list extends react.Component{
    render(){
        return(
            <div className='app-list'>
      
      {listitem()}
      {listitem()}

      {listitem()}

      </div> 
        );
    }
}

export default list;