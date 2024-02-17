import React, { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: ReactNode;
  title?: ReactNode;
  type?:ReactNode;
  placeholder?:ReactNode
};

const Input: FunctionComponent<InputProps> = ({ icon, type, title, placeholder, ...rest }) => {
  return (
    <div>
      <label
  htmlFor={title}
  className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-purple-600 focus-within:ring-1 focus-within:ring-purple-600"
>
  <span className="text-xs font-semibold text-gray-700"> {title} </span>

  <input
    type={type}
    id={title}
    placeholder={placeholder}
    className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
  />
</label>
</div>
  );
};

export default Input;
