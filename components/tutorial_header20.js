export default function TutorailHeader20(props) {
  return (
  <h4 className={`font-gordita-bold text-lg font-bold leading-6 text-color7 md:text-xl md:leading-7 box-border ${props.className}`}>
    { props.children }
  </h4>
  )
}

