"use client"

import * as React from "react"
import { ChevronDownIcon } from "lucide-react"
import { Label } from "./label"
import { Popover, PopoverContent, PopoverTrigger } from "./popover"
import { Button } from "./button"
import { Calendar } from "./calendar"



export function Calendar2() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState<Date | undefined>(undefined)

  return (
    <div className=" bg-creamwhite flex flex-col  mb-6 gap-3">
      <Label htmlFor="date" className="px-1">
       تاریخ انقضا
      </Label>
      
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline"
            id="date"
            className=" bg-creamwhite w-[320px] h-auto text-md justify-between font-normal "
          >
            {date ? date.toLocaleDateString() : "1/3/2025"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
              
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}
