export default function BlueGrayRoundedBox(props) {
  return (
      <div
        className={`p-8 mx-auto w-full rounded-3xl bg-blue-gray-50 ${props.className}`}
      >
        {props.children}
      </div> 
  )
}
