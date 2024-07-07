/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { marked } from "marked";
const Message = ({ sender, text }) => {
    const val = useRef(null);
    const messageClass = sender === 'user' ? 'bg-green-200 self-end' : 'bg-gray-200 self-start';

    useEffect(() => {
        // Parse the Markdown text when component mounts or text changes
        const parsedText = marked(text);
        val.current.innerHTML = parsedText; // Set the parsed HTML content
    }, [text]);

    return (
        <div className={`message ${messageClass} my-2 p-3 rounded-lg w-fit`}>
            <pre ref={val} className="w-fit text-wrap text-left"></pre>
        </div>
    );
};

export default Message;
