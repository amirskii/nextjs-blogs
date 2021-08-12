export default function TutorialFeature(props) {
  return (
    <div
      class="relative px-4 text-center box-border md:float-left md:w-1/3"
    >
      <div class="box-border flex justify-center">
        <picture>
          <source
            srcset={props.webp}
            type="image/webp"
          />
          <source
            srcset={props.png}
            type="image/png"
          />
          <img
            alt="Feature"
            class="mb-4 h-12 max-w-full align-middle border-0"
            loading="lazy"
            data-cfsrc={props.png}
            src={props.png}
          />
        </picture>
      </div>
      <div className="mt-6">
        {props.children}
      </div>
    </div>
  )
}
