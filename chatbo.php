$sql = "CREATE TABLE ChatsBot (\n"

    . "    chat_id INT AUTO_INCREMENT PRIMARY KEY,\n"

    . "    user_id INT NOT NULL,\n"

    . "    user_name VARCHAR(255) NOT NULL,\n"

    . "    message TEXT NOT NULL,\n"

    . "    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP,\n"

    . "    status ENUM(\'enviado\', \'recibido\', \'leído\') DEFAULT \'enviado\',\n"

    . "    FOREIGN KEY (user_id) REFERENCES Usuarios(user_id) -- Asegúrate de tener una tabla de usuarios\n"

    . ");";