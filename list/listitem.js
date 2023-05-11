import React from 'react';
import label from './label';

function listitem(){
    return(
      <div className='list-item'>
          <hr />
          <div className='list title'>
          <h4>my first title</h4>
          </div>
          <div className='listdescribtion'>
            any discribtion about the list
          </div>
          <div className='listlabel'>
            {label()}
            {label()}
            {label()}


            
          </div>
          <hr />
        </div>
    );
  }
  export default listitem;