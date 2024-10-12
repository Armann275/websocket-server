## Overview

This project implements a simple WebSocket broadcast server that allows multiple clients to connect and send messages to each other in real-time. The server listens for incoming WebSocket connections and broadcasts messages received from one client to all other connected clients. It serves as a foundational example for understanding real-time communication using WebSockets.

## Features

- WebSocket server running on port 8080
- Multiple client support
- Broadcasting messages to all connected clients
- Simple username generation for each client
- Command-line interface for client interaction

## Requirements

- Node.js
- npm (Node package manager)

## Installation

1. Clone the repository: git clone https://github.com/Armann275/websocket-server
   
2. Navigate to the project directory: cd websocket-server
    
3. Install the required packages: npm install
   


## Usage

Starting the Server
To start the WebSocket server, run the following command: npm run start
    
Connecting a Client
To connect a client to the server, open a new terminal window and run: npm run connect

Once connected, you can start typing messages in the terminal. These messages will be sent to all other connected clients.


## Example Interaction

1.Start the server in one terminal.

2.Connect multiple clients in separate terminals.

3.Send messages from any client and observe them being broadcast to all others.



## Error Handling
The server includes basic error handling to manage connection issues and unexpected behavior. Any errors encountered will be logged to the console.

## Contributing
If you'd like to contribute to this project, please fork the repository and create a pull request. Any feedback or suggestions are welcome!
