export default function TutorailButtonWhite(props) {
  return (
    <a
      className={`py-4 px-20 bg-white rounded cursor-pointer ${props.className}`}
      href="/plugins/about-us/standalone?platform=html"
    >
      <span
        className="text text-color1 box-border whitespace-nowrap"
      >
      { props.children }
      </span>
    </a>
  )
}

