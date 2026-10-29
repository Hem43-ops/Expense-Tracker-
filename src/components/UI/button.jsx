
function Button({
    children,
    type = "button",
    disabled = false,
    variant = "primary",
    className = "",
    onClick
}) {
    const baseStyles =
        "rounded-xl px-5 py-3 font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-50";

    const variants = {
        primary: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50",
        danger: "bg-red-600 text-white hover:bg-red-700"
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
        >
            {children}
        </button>
    );
}

export default Button;
