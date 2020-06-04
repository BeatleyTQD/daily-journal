/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const allJournalEntries = [
    {
        date: "5/26/2020",
        concept: "Github",
        content: "Today we were introduced to pushing and pulling with Github. My brain is fried.",
        mood: "excited"
    },
    {
        date: "5/27/2020",
        concept: "More Github, CSS",
        content: "I feel much better about using github and have also crammed more flexbox usage into my brain.",
        mood: "sleepy"
    },
    {
        date: "5/28/2020",
        concept: "generating a 'final' project merge",
        content: "Today we finished our first group project and went through the process of merging everyone's final versions into the final master",
        mood: "victorious"
    }
]

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML
*/
const makeJournalEntryComponent = () => {
    const journalHTMLRepresentation =
    `   <h2>${allJournalEntries.concept}</h2>
        <div>${allJournalEntries.content}</div>
        <div>${allJournalEntries.date}</div>    
    `
    return journalHTMLRepresentation
}


/*
    Purpose: To render all journal entries to the DOM

    Arguments: entries (array of objects)
*/
const renderJournalEntries = (entries) => {
    for (const entry of allJournalEntries) {
        const journalHTMLRepresentation = makeJournalEntryComponent(entry)
        const journalArticleElement = document.querySelector(".entryLog")
        journalArticleElement.innerHTML += journalHTMLRepresentation
    }
    
}

// Invoke the render function
renderJournalEntries()