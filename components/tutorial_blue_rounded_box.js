import TutorialPictureCentered from "./tutorial_picture_centered";

export default function BlueRoundedBox(props) {
  return (
    <div relative>
      <img
        className="absolute left-96 max-w-full"
        loading="lazy"
        src="https://www.powrcdn.com/tutorial_pages_new_design/bg-element.png"
        alt={props.data.app_name}
      />

      <img
        className="absolute right-64 w-64 max-w-full align-middle"
        loading="lazy"
        src="https://www.powrcdn.com/tutorial_pages_new_design/bg-element1.png"
        alt={props.data.app_name}
      />
      <div
        className={`p-12 mx-auto w-full rounded-3xl bg-color1 ${props.className}`}
      >
        {props.children}
      </div> 
    </div>
  )
}
