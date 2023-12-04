import React from 'react';
import Sidebar from '../../components/Sidebar';
import OpenConversation from '../../components/OpenConversation';
import { useConversations } from '../../Context/ConversarionProvider';

function Dashboard({id}) {
  const {selectedConversation} = useConversations()

  return (
    <div className='d-flex' style={{height: '100vh'}}>
      <Sidebar id={id}/>
      {selectedConversation && <OpenConversation/>}
    </div>
  )
}

export default Dashboard