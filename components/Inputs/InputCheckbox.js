export default function InputCheckbox({ type, id, label }) {
  return (
    <div>
      <input type={type} name={id} id={id} />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
