const chatBox = document.getElementById("chat-box");

function loadMessages() {
  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  chatBox.innerHTML = "";

  messages.forEach(msg => {
    chatBox.innerHTML += `
      <div class="message">
        <strong>${msg.username}</strong>
        <p>${msg.text}</p>
      </div>
    `;
  });

  chatBox.scrollTop = chatBox.scrollHeight;
}

function sendMessage() {
  const username = document.getElementById("username").value;
  const message = document.getElementById("message").value;

  if (!username || !message) return;

  const messages = JSON.parse(localStorage.getItem("messages")) || [];

  messages.push({
    username: username,
    text: message
  });

  localStorage.setItem("messages", JSON.stringify(messages));

  document.getElementById("message").value = "";

  loadMessages();
}

loadMessages();
