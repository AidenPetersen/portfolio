const Text = (
    props: { label: string; text: string },
  ) => (
    <>
      <div>
      <h3>{props.label}</h3>
      </div>
      <div class="space-y-3 ">
        <div class="flex justify-between ">
            <p>{props.text}</p>
        </div>
      </div>
    </>
  );
  export default Text;
  