const getUrl = (method) => {
    const id = document.getElementById('idInstance').value;
    const token = document.getElementById('apiTokenInstance').value;
    return `https://api.green-api.com/waInstance${id}/${method}/${token}`;
};

const showResponse = (data) => {
    document.getElementById('responseOutput').value = JSON.stringify(data, null, 4);
};

async function getSettings() {
    const response = await fetch(getUrl('getSettings'));
    showResponse(await response.json());
}

async function getStateInstance() {
    const response = await fetch(getUrl('getStateInstance'));
    showResponse(await response.json());
}

async function sendMessage() {
    const chatId = document.getElementById('chatIdMessage').value;
    const message = document.getElementById('messageText').value;
    const response = await fetch(getUrl('sendMessage'), {
        method: 'POST',
        body: JSON.stringify({ chatId: `${chatId}@c.us`, message })
    });
    showResponse(await response.json());
}

async function sendFileByUrl() {
    const chatId = document.getElementById('chatIdFile').value;
    const urlFile = document.getElementById('fileUrl').value;
    const fileName = urlFile.split('/').pop();
    const response = await fetch(getUrl('sendFileByUrl'), {
        method: 'POST',
        body: JSON.stringify({ chatId: `${chatId}@c.us`, urlFile, fileName })
    });
    showResponse(await response.json());
}
