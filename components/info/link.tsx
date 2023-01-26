const Link = (
  props: { label: string; icon: string; dest: string; alt?: string },
) => (
  <>
    <div>
    <h3 class="mt-1">{props.label}</h3>
    </div>
    <div class="space-y-3 ">
      <div class="flex justify-between ">
        <a
          href={props.dest}
          class="h-4 w-20 bg-gray-dark rounded-xl p-0.5 cursor-pointer group transition-colors border-2 border-transparent hover:border-gray-light"
        >
          <img
            src={props.icon}
            class="w-full h-full transition-colors duration-150"
            alt={props.alt ?? ""}
          />
        </a>
      </div>
    </div>
  </>
);
export default Link;
