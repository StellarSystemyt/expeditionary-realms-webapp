const socket = io('https://uniprotkb-ips-eat-ministries.trycloudflare.com'); // Your server URL

// Check if the client is connecting
socket.on('connect', () => {
    console.log('Connected to server');
});

socket.on('load-messages', (messages) => {
    console.log('Loaded messages:', messages);  // Check if the server sends any initial messages
    messages.forEach(({ content, user }) => addMessage(content, user));
});

socket.on('receive-message', ({ content, user }) => {
    console.log('Received message:', content);  // Ensure the message is received
    addMessage(content, user);
});
