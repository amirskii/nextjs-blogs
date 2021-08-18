export default function TutorialFeature(props) {
  return (
    <div
    className="relative px-4 text-center box-border md:float-left md:w-1/3"
    >
      <div className="box-border flex justify-center">
        <picture>
          <source
            srcSet={props.webp}
            type="image/webp"
          />
          <source
            srcSet={props.png}
            type="image/png"
          />
          <img
            alt="Feature"
            className="mb-4 h-12 max-w-full align-middle border-0"
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
