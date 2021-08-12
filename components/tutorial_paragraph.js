export default function TutorailParagraph(props) {
  return (
  <p className={`font-normal text-paragraph box-border leading-6 ${props.className}`}>
    { props.children }
  </p>
  )
}

