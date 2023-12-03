import React, {useContext, useState} from 'react';
import useLocalStorage from '../Hooks/useLocalStorage';
import { useContacts } from './ContactsProvider';

const ConversationsContext = React.createContext();

export const useConversations = () => {
  return useContext(ConversationsContext)
}

export function ConversationsProvider({children}) {

  const [conversations, setConversations] = useLocalStorage('Conversations', []);

  const [selectedConversationIndex, setSelectedConversationIndex] = useState(0)

  const { contacts } = useContacts();

  const createConversation = (recipients) => {
    setConversations(prevConversations => {
      return [...prevConversations, {recipients, messages: []}]
    })
  };

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
    selectedConversationIndex: setSelectedConversationIndex,
    createConversation
  }

  return (
    <ConversationsContext.Provider value={value}>
      {children}
    </ConversationsContext.Provider>
  )
};