const API_URL = 'https://api.green-api.com';

// Универсальная функция для отправки запросов
async function request(method, body = null) {
    const idInstance = document.getElementById('idInstance').value;
    const apiToken = document.getElementById('apiTokenInstance').value;
    const responseField = document.getElementById('responseOutput');

    if (!idInstance || !apiToken) {
        alert("Заполните idInstance и ApiTokenInstance!");
        return;
    }

    const url = `${API_URL}/waInstance${idInstance}/${method}/${apiToken}`;
    
    try {
        const options = {
            method: body ? 'POST' : 'GET',
            headers: { 'Content-Type': 'application/json' }
        };
        if (body) options.body = JSON.stringify(body);

        const response = await fetch(url, options);
        const data = await response.json();
        
        // Красиво выводим JSON в правое поле
        responseField.textContent = JSON.stringify(data, null, 4);
    } catch (error) {
        responseField.textContent = `Ошибка: ${error.message}`;
    }
}

// Привязываем функции к кнопкам
function getSettings() { request('getSettings'); }
function getStateInstance() { request('getStateInstance'); }

function sendMessage() {
    const chatId = document.getElementById('chatIdMessage').value;
    const message = document.getElementById('messageText').value;
    request('sendMessage', { 
        chatId: `${chatId}@c.us`, 
        message: message 
    });
}

function sendFileByUrl() {
    const chatId = document.getElementById('chatIdFile').value;
    const urlFile = document.getElementById('fileUrl').value;
    const fileName = urlFile.split('/').pop() || 'file';
    
    request('sendFileByUrl', {
        chatId: `${chatId}@c.us`,
        urlFile: urlFile,
        fileName: fileName
    });
}
