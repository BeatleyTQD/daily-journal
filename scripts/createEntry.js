const createJournalEntry = (date, concept, content, mood) => {
    const journalEntry = {
        "date": date,
        "concept": concept,
        "content": content,
        "mood": mood
    }
    console.log(journalEntry)
    return journalEntry
}

export default createJournalEntry