import React, {useContext, useState} from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext();

export const useConversations = () => {
  return useContext(ConversationsContext)
}

export function ConversationsProvider({id, children}) {

  const [conversations, setConversations] = useLocalStorage('Conversations', []);

  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  const { contacts } = useContacts();

  const createConversation = (recipients) => {
    setConversations(prevConversations => {
      return [...prevConversations, {recipients, messages: []}]
    })
  };

  const addMessageToConversation = ({ recipients, text, sender }) => {
    setConversations((prevConversations) => {
      let madeChange = false;
      const newMessage = { sender, text };
      const newConversations = prevConversations.map((conversation) => {
        if (arrayEquality(conversation.recipients, recipients)) {
          madeChange = true;
          return { ...conversation, messages: [...conversation.messages, newMessage] };
        }
        return conversation;
      });
  
      if (madeChange) {
        return newConversations;
      } else {
        return [...prevConversations, { recipients, messages: [newMessage] }];
      }
    });
  };
  

  const sendMessage = (recipients, text) => {
    addMessageToConversation({recipients, text, sender: id})
  }

  const formattedConversation = conversations.map((conversation, index) => {
    const recipients = conversation.recipients.map(recipient => {
      const contact = contacts.find(contact => {
        return contact.id ===recipient
      })
      const name = (contact && contact.name) || recipient;
      return {id: recipient, name}
    })
    const selected = index === selectedConversationIndex
    return {...conversation, recipients, selected}
  })

  const value = {
    conversations: formattedConversation,
    selectedConversation: formattedConversation[selectedConversationIndex],
    sendMessage,
    selectedConversationIndex: setSelectedConversationIndex,
    createConversation
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
};

const arrayEquality = (a,b) => {
  if (a.length !== b.length){
    return false
  }

  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}