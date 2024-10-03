function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,

  'data-key': dataKey,
}) {
  return (
    <div className="input-group flex flex-col mb-3">
      <label htmlFor={id} className="mb-2">
        <span className="label-text font-semibold ">{labelText}</span>
      </label>

      {type === 'textarea' ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        ></textarea>
      ) : (
        <input
          className="p-[5px] rounded focus:outline-none focus:ring focus:[#3B83F6] bg-[#F3F4F6]"
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
        />
      )}
    </div>
  );
}

export default InputGroup;
