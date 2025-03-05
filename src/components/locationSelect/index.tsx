import { ArrowDownIcon, LocationIcon } from "@/assets"
import { Card } from "@heroui/react"

export const LocationSelect=()=>{
    return(
        <Card isPressable>
            <div className="flex items-center cursor-pointer">
                <LocationIcon/>
                <div className="px-2">
                    <p className="font-source text-body4 font-semibold">Chennai</p>
                </div>
                <ArrowDownIcon/>
            </div>
        </Card>
    )
}