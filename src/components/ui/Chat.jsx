import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Smile } from "lucide-react";
import User from "../../assets/image1.png";

const Chat = ({ onClose }) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [chatMessages, setChatMessages] = useState([]);

  //This is just for demo of how socketio will handle the message
  const onMessageReceive = (message, user, timeStamp, profilePicUrl) => {
    setChatMessages((prev) => [
      ...prev,
      {
        message,
        user,
        timeStamp,
        profilePicUrl,
      },
    ]);
  };

  const onEmojiClick = (emojiObject) => {
    setMessage((prevMessage) => prevMessage + emojiObject.emoji);
  };

  const handleSend = () => {
    if (message.trim()) {
      setMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-4 py-3 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <h1 className="text-[#002752] text-xl font-semibold">Chat</h1>
          <button
            className="p-1 hover:bg-gray-100 rounded-full"
            onClick={handleClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/*  TODO: */}
      {/* Make the input element add the messages to the chat state  */}
      {/* On the basis of state render the messages */}
      {/* Make a seperate component for each message */}
      {/* If message is sent by you it should be in the right else it should on the left */}

      {/* chatMessages.map(msg => {
        return <IndividualMessage />
      }) */}

      {/* Rest of your existing chat component code */}
      <div className="flex-1 p-4 space-y-6 overflow-y-auto">
        <div className="text-center">
          <span className="text-xs text-gray-400">03:54</span>
        </div>

        <div className="space-y-1">
          <div className="flex justify-end">
            <span className="text-sm text-gray-500">Prabhleen Kaur (You)</span>
          </div>
          <div className="flex justify-end space-x-2">
            <div className="bg-pink-100 rounded-lg px-4 py-2 max-w-[200px]">
              <p>Hey!👋</p>
            </div>
            <img src={User} alt="avatar" className="w-8 h-8 rounded-full" />
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-center">
            <span className="text-xs text-gray-400">04:32</span>
          </div>
          <div className="ml-10">
            <span className="text-sm text-gray-500">User1</span>
          </div>
          <div className="flex space-x-2">
            <img src={User} alt="avatar" className="w-8 h-8 rounded-full" />
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[200px]">
              <p>Hey!👋</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="flex space-x-2">
            <img src={User} alt="avatar" className="w-8 h-8 rounded-full" />
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[200px]">
              <p>Hey!</p>
              <p>When will the webinar start?</p>
            </div>
          </div>
        </div>

        <div className="space-y-1">
          <div className="text-center">
            <span className="text-xs text-gray-400">04:50</span>
          </div>
          <div className="ml-10">
            <span className="text-sm text-gray-500">User1</span>
          </div>
          <div className="flex space-x-2">
            <img src={User} alt="avatar" className="w-8 h-8 rounded-full" />
            <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-[200px]">
              <p>In 10 minutes</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        {showEmojiPicker && (
          <div className="absolute bottom-32 left-4">
            <EmojiPicker onEmojiClick={onEmojiClick} width={300} height={400} />
          </div>
        )}

        <div className="flex items-center p-4 gap-2">
          <button
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Smile className="w-6 h-6 text-gray-500" />
          </button>

          {/* TODO: When input is submitted send the message to socketIO */}
          {/* Append it to the state */}
          {/* For testing if you are not using socket.io */}
          {/* Make sure that 80% of the it comes from someone */}
          {/* But for 20% of the time it is from you */}
          {/* Wrap the input and submit button functionality inside a form */}

          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            onClick={handleSend}
            className="px-4 py-2 bg-[#00E5BE] text-white rounded-md hover:bg-[#00D1AD] transition-colors"
            disabled={!message.trim()}
          >
            Send
          </button>
        </div>
      </div>

      <div className="p-4 bg-gray-50 border-t border-gray-200">
        <p className="text-sm text-gray-600">
          You don't have permission by the host to chat.
          <button className="text-blue-500 hover:underline ml-1">
            Ask for permission
          </button>
        </p>
      </div>
    </div>
  );
};

// {
//   chatMessages.map((message) => {
//     return <IndividualMessage message={message} />;
//   });
// }

//TODO: This will only include a message
// A message will have profilePic, messageContent, userName, timeStamp
function IndividualMessage() {
  return <></>;
}

export default Chat;
