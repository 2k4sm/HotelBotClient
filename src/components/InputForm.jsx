/* eslint-disable react/prop-types */
const InputForm = ({ input, setInput, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="flex justify-center w-[75%]">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                required
                className="w-[75%] p-2 rounded-l-lg border border-gray-300"
            />
            <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-lg border border-blue-500">
                Send
            </button>
        </form>
    );
};

export default InputForm;
