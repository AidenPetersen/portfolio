const Menu = () => (
  <div class="
      flex flex-col gap-2  items-end mt-0.8 lg:justify-start lg:flex-row lg:mt-0 lg:mb-2 md:justify-end md:-mb-4 md:gap-1 md:mt-0
      ">
    <a
      href={`/`}
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src="/vectors/home.svg"
        class="
          w-full h-full transition-colors duration-150"
        alt="Home"
      />
    </a>
    <a
      href={`/info`}
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src="/vectors/info.svg"
        class="
          w-full h-full transition-colors duration-150"
        alt="Resume"
      />
    </a>
    <a
      href={`/resume.pdf`}
      target="_blank"
      class="h-4 w-4 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
    >
      <img
        src="/vectors/document.svg"
        class="
          w-full h-full transition-colors duration-150"
        alt="Resume"
      />
    </a>
  </div>
);
export default Menu;