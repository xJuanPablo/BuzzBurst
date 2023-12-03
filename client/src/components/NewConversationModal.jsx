import React, {useState} from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { useContacts } from '../Context/ContactsProvider';
import {useConversations} from '../Context/ConversarionProvider'

function NewConversationModal({closeModal}) {
  const {contacts} = useContacts()
  const [selectedContactIds, setSelectedContactIds] = useState([])
  const {createConversation} = useConversations()

  const handleSubmit = (e) => {
    e.preventDefault();

    createConversation(selectedContactIds)
    closeModal()
  }

  const handleCheckboxChange = (contactId) => {
    setSelectedContactIds(prevSelectedContactIds => {
      if (prevSelectedContactIds.includes(contactId)) {
        return prevSelectedContactIds.filter(prevId =>{
          return contactId !== prevId
        })
      } else {
        return [...prevSelectedContactIds, contactId]
      }
    })
  }

  return (
    <>
    <Modal.Header closeButton>
      Create Conversation
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        {contacts.map(contact => (
          <Form.Group controlId={contact.id} key={contact.id}>
            <Form.Check type='checkbox' value={selectedContactIds.includes(contact.id)} label={contact.name} onChange={() => handleCheckboxChange(contact.id)}></Form.Check>
          </Form.Group>
        ))}
      <Button type='submit'>Create</Button>

      </Form>
    </Modal.Body>
    </>
  )
}

export default NewConversationModal