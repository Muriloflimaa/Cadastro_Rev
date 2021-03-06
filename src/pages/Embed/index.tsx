export default function Embed() {
  return (
    <div className="flex mx-auto max-w-7xl md:w-2/3 items-center mt-32 flex-col">
      <h1 className="text-purple-store opacity-10 text-6xl md:text-8xl font-bold md:absolute md:leading-3">
        ENTENDA
      </h1>
      <h2 className="uppercase text-2xl text-center ml-4 font-bold pb-2 md:mt-2">
        ASSISTA AO VÍDEO E ENTENDA MELHOR!
      </h2>
      <div className="bg-button w-20 h-[5px] rounded-3xl"></div>
      <div className="flex relative justify-center mt-2 max-w-7xl h-full pb-[45%] md:pb-[56.25%]">
        <iframe
          className="absolute w-[80vw] max-w-7xl h-full border-none"
          src="https://www.youtube.com/embed/FrYS9Hj_yEk"
          loading="lazy"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}
