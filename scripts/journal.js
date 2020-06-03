/*
    Define the keys and value for a JavaScript object that
    represents a journal entry about what you learned today
*/
const journalEntry = {
    date: "5/26/2020",
    concept: "Github",
    content: "Today we were introduced to pushing and pulling with Github. My brain is fried.",
    mood: "excited"
}

const journalEntry2 = {
    date: "5/27/2020",
    concept: "More Github, CSS",
    content: "I feel much better about using github and have also crammed more flexbox usage into my brain.",
    mood: "sleepy"
}

const journalEntry3 = {
    date: "5/28/2020",
    concept: "generating a 'final' project merge",
    content: "Today we finished our first group project and went through the process of merging everyone's final versions into the final master",
    mood: "victorious"
}

const allJournalEntries = []

allJournalEntries.push(journalEntry,journalEntry2,journalEntry3)
console.log(allJournalEntries)

/*
    Purpose: To create, and return, a string template that
    represents a single journal entry object as HTML

    Arguments: journalEntry (object)
*/
const makeJournalEntryComponent = (journalEntry) => {
    // Create your own HTML structure for a journal entry
    return `<h2>${allJournalEntries.concept}</h2>
        <div>${allJournalEntries.content}</div>
        <div>${allJournalEntries.date}</div>    
    `
}