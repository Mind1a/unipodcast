import { Suspense } from "react"

import BecomeSpeaker from "./BecomeSpeaker"

const Landing = () => {
    return (
        <div>
            <Suspense fallback={null}>
                <BecomeSpeaker />
            </Suspense>
        </div>
    )
}

export default Landing
