import { forwardRef } from "react";

const TextareaInput = forwardRef(function TextareaInput(
  { label, type, id, name, value, onChange, isRequired, disabled },
  ref,
) {
  return (
    <div className="flex w-full flex-col gap-3">
      <label htmlFor={id} className="text-c2 font-bold text-neutral-300">
        {label}
      </label>
      <textarea
        ref={ref}
        type={type || "text"}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={isRequired}
        rows={3}
        className="font-cabinet-grotesk resize-none border-none bg-black/30 px-6 py-4.5 text-white focus:outline-none"
        autoComplete="off"
        disabled={disabled}
      />
    </div>
  );
});

export default TextareaInput;
