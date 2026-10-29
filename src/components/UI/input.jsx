
function Input({
    type = "text",
    label,
    placeholder,
    name,
    value,
    onChange,
    required = false,
    error,
    className = ""
}) {
    return (
        <div className="flex w-full flex-col gap-2">
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-semibold text-gray-700"
                >
                    {label}
                    {required && (
                        <span className="ml-1 text-red-500">*</span>
                    )}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${name}-error` : undefined}
                className={`w-full rounded-xl border bg-white px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:ring-4 ${
                    error
                        ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                        : "border-gray-200 focus:border-blue-500 focus:ring-blue-100"
                } ${className}`}
            />

            {error && (
                <p
                    id={`${name}-error`}
                    className="text-sm text-red-600"
                    role="alert"
                >
                    {error}
                </p>
            )}
        </div>
    );
}

export default Input;
