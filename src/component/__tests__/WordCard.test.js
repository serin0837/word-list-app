import React from 'react'
import { render } from '@testing-library/react'
import WordCard from '../WordCard'


test('The word card shows the word name', () => {
    // Arrange
    const sampleWord = {
        name : "Cha",
        meaning: "Tea",
        note: "Some Note"
    }
    // Action
    const screen = render(<WordCard word={sampleWord}/>)

    // Assertion
    const wordNameElement = screen.getByText(sampleWord.name, { exact: false })

    expect(wordNameElement).toBeDefined()
})

test('The word card shows the word meaning', () => {
    // Arrange
    const sampleWord = {
        name : "Cha",
        meaning: "Tea",
        note: "Some Note"
    }
    // Action
    const screen = render(<WordCard word={sampleWord}/>)

    // Assertion
    const wordMeaningElement = screen.getByText(sampleWord.meaning, { exact: false })

    expect(wordMeaningElement).toBeDefined()
})

test('The word card shows the word note', () => {
    // Arrange
    const sampleWord = {
        name : "Cha",
        meaning: "Tea",
        note: "Some Note"
    }
    // Action
    const screen = render(<WordCard word={sampleWord}/>)

    // Assertion
    const wordNoteElement = screen.getByText(sampleWord.note, { exact: false })

    expect(wordNoteElement).toBeDefined()
})