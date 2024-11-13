import { backend } from 'declarations/backend';

document.addEventListener('DOMContentLoaded', async () => {
    const greetingElement = document.getElementById('greeting');
    const spinnerElement = document.getElementById('spinner');

    try {
        const greeting = await backend.greet();
        greetingElement.textContent = greeting;
    } catch (error) {
        console.error('Error fetching greeting:', error);
        greetingElement.textContent = 'Error: Could not fetch greeting';
    } finally {
        spinnerElement.style.display = 'none';
    }
});
