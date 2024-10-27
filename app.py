from flask import Flask, request, jsonify
import os

app = Flask(__name__)

# Lista para almacenar los mensajes
messages = []

# Carpeta para guardar los audios
UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/messages', methods=['POST'])
def send_message():
    data = request.get_json()
    sender = data.get('sender')
    message = data.get('message')
    if sender and message:
        messages.append({'sender': sender, 'message': message})
        return jsonify({'status': 'success', 'message': 'Mensaje enviado.'}), 201
    return jsonify({'status': 'error', 'message': 'Faltan datos.'}), 400

@app.route('/messages', methods=['GET'])
def get_messages():
    return jsonify(messages), 200

@app.route('/audio', methods=['POST'])
def upload_audio():
    if 'audio' not in request.files:
        return jsonify({'status': 'error', 'message': 'No se encontró el archivo.'}), 400
    
    audio = request.files['audio']
    
    if audio.filename == '':
        return jsonify({'status': 'error', 'message': 'No se seleccionó un archivo.'}), 400
    
    # Guardar el archivo de audio en un directorio
    audio.save(os.path.join(UPLOAD_FOLDER, audio.filename))
    return jsonify({'status': 'success', 'message': 'Archivo de audio subido.'}), 201

if __name__ == '__main__':
    app.run(debug=True)
    
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/upload_audio', methods=['POST'])
def upload_audio():
    if 'audio' not in request.files:
        return jsonify({"error": "No se proporcionó el archivo de audio"}), 400

    audio_file = request.files['audio']
    # Guardar el archivo de audio en el servidor
    audio_file.save(f'./uploads/{audio_file.filename}')
    
    return jsonify({"message": "Audio recibido exitosamente"}), 200

if __name__ == '__main__':
    app.run(debug=True)
