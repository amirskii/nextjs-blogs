import TutorailHeader18 from './tutorial_header18'
import TutorailParagraph from './tutorial_paragraph'

export default function TutorialAppBoxYellow(props) {
  return (
    <div className="p-6 md:p-8 bg-yellow-50 rounded-md">
    <img 
      className="ml-1"
      loading="lazy"
      alt={props.title}
      src={props.img}
    />
    <TutorailHeader18 className="mt-6">
      {props.title}
    </TutorailHeader18>
    <TutorailParagraph className="mt-2">
      {props.text}
    </TutorailParagraph>
  </div>
)
}
