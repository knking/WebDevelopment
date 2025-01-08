

function Button({color,changeColor}) {
  return (
    <>
      <button onClick={()=>changeColor(color)}
        className="outline-none px-4 py-1 rounded-full text-white shadow-sm back"
        style={{ backgroundColor: color }}
      >
       { color}
      </button>
    </>
  );
}

export default Button;
