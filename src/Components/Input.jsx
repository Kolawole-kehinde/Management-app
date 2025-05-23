// Input.jsx
import React, { forwardRef } from 'react';

const Input = forwardRef(({ label, textarea, ...props }, ref) => {
  const classes =
    'w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-slate-600 focus:outline-none focus:border-stone-600';

  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </div>
  );
});

export default Input;
