export default function TutorialMenu(props) {
  return (
    <div className={`${props.className} flex-col`}>
      <div className="text-white font-gordita-medium text-base leading-6">{props.title}</div>
      {props.items.map(item =>
        <a href={item.url}>
          <div className="text-color8 font-gordita-medium text-sm leading-5 mt-4">{item.name}</div>
        </a>
      )}
    </div>
  )
}
