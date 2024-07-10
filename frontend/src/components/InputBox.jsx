export function InputBox({ label, placeholder, onChange }) {
    return (
        <div className="mb-4">
            <label htmlFor={label} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                onChange={onChange}
                placeholder={placeholder}
                className="block w-full mt-1 px-3 py-2 text-sm border-b-2 border-black focus:outline-none focus:border-green-500"
                id={label}
                type="text" // Change type if needed
                required
            />
        </div>
    );
}
