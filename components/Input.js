"use client";

export default function Input({ 
  label, 
  id, 
  type = "text", 
  placeholder, 
  required = false,
  className = "",
  ...props 
}) {
  return (
    <div className={`flex flex-col space-y-2 w-full ${className}`}>
      {label && (
        <label 
          htmlFor={id} 
          className="label-md text-[#414750] transition-colors group-focus-within:text-[#004e85]"
        >
          {label} {required && <span className="text-[#990032]">*</span>}
        </label>
      )}
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        className="input-ghost text-sm py-4 outline-none focus:border-b-2"
        {...props}
      />
    </div>
  );
}

export function TextArea({ label, id, placeholder, required = false, ...props }) {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && (
        <label 
          htmlFor={id} 
          className="label-md text-[#414750]"
        >
          {label} {required && <span className="text-[#990032]">*</span>}
        </label>
      )}
      <textarea
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        rows={4}
        className="input-ghost text-sm py-4 resize-none outline-none"
        {...props}
      />
    </div>
  );
}
