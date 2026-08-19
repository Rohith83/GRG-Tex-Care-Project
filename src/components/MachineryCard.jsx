export default function MachineryCard({ name, image }) {
  return (
    <div
      className="
        group
        relative
        w-full
        aspect-[5/6]
        rounded-[24px]
        overflow-hidden
        bg-cream
        cursor-pointer
        shadow-[0_10px_25px_-12px_rgba(18,51,48,0.35)]
        transition-all
        duration-500
        hover:-translate-y-1
      "
    >

      <img
        src={image}
        alt={name}
        className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          block
          transition-transform
          duration-700
          group-hover:scale-[1.03]
        "
        loading="lazy"
      />


      <span
        className="
          absolute
          top-4
          left-3
          z-10
          bg-white
          text-dark
          text-[11.5px]
          font-bold
          leading-none
          px-6
          py-[8px]
          rounded-full
          whitespace-nowrap
          shadow-[0_3px_10px_-3px_rgba(0,0,0,0.22)]
        "
      >
        {name}
      </span>

    </div>
  );
}