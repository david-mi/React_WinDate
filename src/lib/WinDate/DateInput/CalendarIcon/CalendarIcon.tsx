
interface Props {
  className: string
  openCalendar: () => void
}

const CalendarIcon = ({ className, openCalendar }: Props) => {
  return (
    <svg
      onClick={openCalendar}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      tabIndex={1}
    >
      <path fill="#888888" d="M11 14v-2h2v2h-2Zm-4 0v-2h2v2H7Zm8 0v-2h2v2h-2Zm-4 4v-2h2v2h-2Zm-4 0v-2h2v2H7Zm8 0v-2h2v2h-2ZM3 22V4h3V2h2v2h8V2h2v2h3v18H3Zm2-2h14V10H5v10Z">
      </path>
    </svg>
  )
}

export default CalendarIcon