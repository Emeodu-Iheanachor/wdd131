// References
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Add Chapter button event listener
button.addEventListener('click', function () {

    // Check if input is not empty
    if (input.value.trim() !== '') {

        // Create li element
        const li = document.createElement('li');
        li.textContent = input.value;

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';

        // Accessibility label
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Add delete button to li
        li.append(deleteButton);

        // Add li to the list
        list.append(li);

        // Delete button event listener
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear input
        input.value = '';

    } else {
        // If blank: do nothing, just refocus
        input.focus();
        return;
    }

    // Always return focus to the input
    input.focus();
});
