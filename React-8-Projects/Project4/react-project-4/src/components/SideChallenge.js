import Box from './Box'
import { Boxes } from './BoxData'

export default function SideChallenge() {

    const allBoxes = Boxes.map((box) => <Box key={box.id} on={box.on}/>)
    return (
        <>
        <div className="main--container boxes--layout">
            {allBoxes}
        </div>
        </>
    )
}