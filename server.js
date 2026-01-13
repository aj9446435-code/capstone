const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Database file path for storing messages
const messagesFile = path.join(__dirname, 'messages.json');

// Initialize messages file if it doesn't exist
if (!fs.existsSync(messagesFile)) {
    fs.writeFileSync(messagesFile, JSON.stringify([]));
}

// Helper function to read messages
function getMessages() {
    try {
        const data = fs.readFileSync(messagesFile, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
}

// Helper function to save messages
function saveMessages(messages) {
    fs.writeFileSync(messagesFile, JSON.stringify(messages, null, 2));
}

// Handle contact form submissions
app.post('/contact', (req, res) => {
    try {
        const { firstName, lastName, email, phone, interest, message, timestamp } = req.body;
        
        // Validate required fields
        if (!firstName || !lastName || !email || !message) {
            return res.json({ 
                success: false, 
                message: 'Missing required fields' 
            });
        }
        
        // Get existing messages
        let messages = getMessages();
        
        // Create new message object
        const newMessage = {
            id: Date.now(),
            firstName,
            lastName,
            email,
            phone: phone || 'Not provided',
            interest: interest || 'Not specified',
            message,
            timestamp: timestamp || new Date().toISOString(),
            status: 'unread'
        };
        
        // Add to messages array
        messages.push(newMessage);
        
        // Save messages to file
        saveMessages(messages);
        
        console.log(`✅ New message received from ${firstName} ${lastName}`);
        
        res.json({ 
            success: true, 
            message: 'Message saved successfully',
            id: newMessage.id
        });
    } catch (error) {
        console.error('Error saving message:', error);
        res.json({ 
            success: false, 
            message: 'Server error while saving message' 
        });
    }
});

// Get all messages (admin endpoint)
app.get('/messages', (req, res) => {
    try {
        const messages = getMessages();
        res.json({ success: true, messages, count: messages.length });
    } catch (error) {
        res.json({ success: false, message: 'Error retrieving messages' });
    }
});

// Get message by ID
app.get('/message/:id', (req, res) => {
    try {
        const messages = getMessages();
        const message = messages.find(m => m.id === parseInt(req.params.id));
        
        if (!message) {
            return res.json({ success: false, message: 'Message not found' });
        }
        
        res.json({ success: true, message });
    } catch (error) {
        res.json({ success: false, message: 'Error retrieving message' });
    }
});

// Mark message as read
app.put('/message/:id/read', (req, res) => {
    try {
        let messages = getMessages();
        const message = messages.find(m => m.id === parseInt(req.params.id));
        
        if (!message) {
            return res.json({ success: false, message: 'Message not found' });
        }
        
        message.status = 'read';
        saveMessages(messages);
        
        res.json({ success: true, message: 'Message marked as read' });
    } catch (error) {
        res.json({ success: false, message: 'Error updating message' });
    }
});

// Delete message
app.delete('/message/:id', (req, res) => {
    try {
        let messages = getMessages();
        messages = messages.filter(m => m.id !== parseInt(req.params.id));
        
        saveMessages(messages);
        
        res.json({ success: true, message: 'Message deleted successfully' });
    } catch (error) {
        res.json({ success: false, message: 'Error deleting message' });
    }
});

app.listen(3000, () => {
    console.log('✅ Server running on http://localhost:3000');
    console.log('📨 Contact messages will be stored in messages.json');
});
