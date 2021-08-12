export default function TutorailHeader20White(props) {
  return (
  <h4 className={`font-gordita-bold text-lg font-bold leading-6 text-white md:text-xl md:leading-7 box-border ${props.className}`}>
    { props.children }
  </h4>
  )
}

