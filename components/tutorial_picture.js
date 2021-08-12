export default function TutorialPicture(props) {
  return (
    <picture className={`${props.className}`}>
      <source
        srcset={props.webp}
        type="image/webp"
      />
      <source
        srcset={props.png}
        type="image/png"
      />
      <img
        alt={props.alt}
        class="align-middle border-0"
        loading="lazy"
        data-cfsrc={props.png}
        src={props.png}
      />
    </picture>
  )
}
