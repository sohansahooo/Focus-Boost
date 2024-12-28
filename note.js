// Function to save a note
function saveNote() {
    const noteInput = document.getElementById('quickNote');
    const noteText = noteInput.value.trim();
    if (noteText) {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.innerHTML = `
            <div class="note-content">${noteText}</div>
            <button class="delete-note">
                <i class="fas fa-times"></i>
            </button>
        `;
        
        // Add event listener for the delete button
        noteItem.querySelector('.delete-note').addEventListener('click', function() {
            deleteNote(noteItem);
        });

        document.getElementById('savedNotes').appendChild(noteItem);
        noteInput.value = ''; // Clear input after saving
    }
}

// Function to delete a note
function deleteNote(noteItem) {
    noteItem.remove();
}

// Function to clear all notes and the input field
function clearNotes() {
    // document.getElementById('savedNotes').innerHTML = ''; // Clear all saved notes
    document.getElementById('quickNote').value = ''; // Clear the input field
}

// Event listener for the save note button
document.getElementById('saveNote').addEventListener('click', saveNote);

// Event listener for the clear note button
document.getElementById('clearNote').addEventListener('click', clearNotes);
