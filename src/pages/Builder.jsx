import React from 'react'
import Container from '../components/Container'
import ResumeBuilder from '../components/ResumeBuilder'
import { EditorProvider } from '../context/EditorContext'

function Builder() {
  return (
    <Container>
      <EditorProvider>
        <ResumeBuilder />
      </EditorProvider>
    </Container>
  )
}

export default Builder