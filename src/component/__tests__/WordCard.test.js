import React from 'react'
import { render } from '@testing-library/react'
import WordCard from '../WordCard'

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
