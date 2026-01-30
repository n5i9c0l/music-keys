export default function PixelButton({ text = "START", onClick = () => {} }) {
  return (
    <button
      onClick={onClick}
      className="
        relative
        px-6 py-3
        bg-yellow-400
        text-black font-bold
        text-lg
        border-4 border-black
        shadow-[4px_4px_0px_black]
        active:shadow-none
        active:translate-x-[4px]
        active:translate-y-[4px]
        hover:bg-yellow-300
        transition-all
        select-none
      "
      style={{
        imageRendering: "pixelated",
      }}
    >
      {text}
    </button>
  );
}
