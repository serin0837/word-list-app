import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import WordCard from '../WordCard'
import faker from 'faker'

describe("rendered word card would work with different properties",() =>{
    const sampleWord = {
        name : "Cha",
        meaning: "Tea",
        note: "Some Note"
    }
    let screen 
    //run before every single unit test//beforeEach
    beforeEach(()=>{
        screen = render(<WordCard word={sampleWord}/>)
    })
    test('The word card shows the word name', () => {
        // Assertion
        const wordNameElement = screen.getByText(sampleWord.name, { exact: false })
        expect(wordNameElement).toBeDefined()
    })
    
    test('The word card shows the word meaning', () => {
        const wordMeaningElement = screen.getByText(sampleWord.meaning, { exact: false })
        expect(wordMeaningElement).toBeDefined()
    })
    
    test('The word card shows the word note', () => {
        // Assertion
        const wordNoteElement = screen.getByText(sampleWord.note, { exact: false })
        expect(wordNoteElement).toBeDefined()
    })
})

describe("Clicking the I know this word button", () => {
    const sampleWord = {
        name : faker.random.word(),
        meaning: faker.random.word(),
        note: faker.random.words(),
        _id: faker.random.word()
    }

    const mockRemoveWordFunction = jest.fn()

    test('Should invoke the function passed to the WordCard via props', () => {
        //Arrange
        const screen = render(<WordCard word={sampleWord} removeWord={mockRemoveWordFunction}/>)

        //Action
        // Get reference to button
        const iKnowThisWordButton = screen.getByText('I know this word!', { exact: false })

        fireEvent(
            iKnowThisWordButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true
            })
          )

        //Ensure that our mockRemoveWordFunction was invoked
        expect(mockRemoveWordFunction).toHaveBeenCalledTimes(1)
    })
})