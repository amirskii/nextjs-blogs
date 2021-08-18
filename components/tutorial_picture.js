export default function TutorialPicture(props) {
  return (
    <picture className={`${props.className}`}>
      <source
        srcSet={props.webp}
        type="image/webp"
      />
      <source
        srcSet={props.png}
        type="image/png"
      />
      <img
        alt={props.alt}
        className="align-middle border-0"
        loading="lazy"
        data-cfsrc={props.png}
        src={props.png}
      />
    </picture>
  )
}
