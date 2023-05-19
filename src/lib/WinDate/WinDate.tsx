import { useContext, useRef } from "react"
import { GlobalContext } from "../Context/Global"
import Calendar from "./Calendar/Calendar"
import DateInput from "./DateInput/DateInput"
import styles from "./winDate.module.css"
import type { WinDatePickerProps } from "../index"

const Windate = ({ calendarColors, inputProps }: WinDatePickerProps) => {
  const { isCalendarOpen } = useContext(GlobalContext)
  const winDateRef = useRef<HTMLDivElement>(null!)
  const dateInputRef = useRef<HTMLInputElement>(null!)

  if (inputProps.onDateChange === undefined) {
    console.error("onDateChange callback is missing from props and is required")
    return null
  }

  return (
    <div className={styles.winDate} ref={winDateRef}>
      <DateInput inputProps={inputProps} dateInputRef={dateInputRef} />
      {isCalendarOpen && (
        <Calendar
          winDateRef={winDateRef}
          dateInputRef={dateInputRef}
          calendarColors={calendarColors}
        />
      )}
    </div>
  )
}

export default Windate