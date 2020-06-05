// const getJournalEntry = () => {
//     return fetch("http://localhost:3000/entries").then(
//         (httpResponse) => {
//             return httpResponse.json()
//         }
//     )
//         .then(
//             (arrayJournalEntries) => {
//                 // 100 percent sure the data is back
//                 allJournalEntries = arrayJournalEntries
//             }
//         )
// }

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json())
    }
}
