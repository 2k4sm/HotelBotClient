/* eslint-disable react/prop-types */
import Message from './Message';

const ChatBox = ({ messages }) => {
    return (
        <div className="w-[75%] h-[70vh] bg-purple-500 border rounded-lg overflow-y-auto p-4 mb-5">
            {messages.map((msg, index) => (
                <Message key={index} sender={msg.sender} text={msg.text} />
            ))}
        </div>
    );
};

export default ChatBox;
