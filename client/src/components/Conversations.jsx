import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { useConversations } from '../Context/ConversarionProvider';

function Conversations() {

  const {conversations, selectedConversationIndex} = useConversations()

  return (
    <ListGroup varient="flush">
    {conversations.map((conversation, index) => (
      <ListGroup.Item key={index}
      action
      onClick={() => selectedConversationIndex(index)}
      active={conversation.selected}
      >
        {conversation.recipients.map(r => r.name).join(', ')}
      </ListGroup.Item>
    ))}
  </ListGroup>
  )
}

export default Conversations