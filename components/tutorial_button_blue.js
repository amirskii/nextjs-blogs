export default function TutorailButtonBlue(props) {
  return (
    <a
      className={`py-4 px-20 text-blue-600 no-underline bg-blue-500 rounded cursor-pointer
       focus:text-blue-800 focus:underline hover:font-normal hover:text-blue-800 hover:no-underline ${props.className}`}
      href="/plugins/about-us/standalone?platform=html"
    >
      <span
        className="font-semibold text-white box-border h-max"
      >
      { props.children }
      </span>
    </a>
  )
}

