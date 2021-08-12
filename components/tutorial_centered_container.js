export default function CenteredContainer(props) {
  return (
    <div className={`container max-w-[1140px] px-4 self-center ${props.className}`}>
      { props.children }
    </div>
  )
}
