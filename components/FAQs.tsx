import { CalciteBlock, CalciteBlockGroup, CalciteLabel } from "@esri/calcite-components-react"
import "@esri/calcite-components/components/calcite-block-group"
import "@esri/calcite-components/components/calcite-block"


const Faqs = () => {

    return(
        <CalciteBlockGroup className="p-10">
            <CalciteBlock 
            open
            heading="How do I go to a laundromat?">
                some text
            </CalciteBlock>
            <CalciteBlock 
            open
            heading="How do I go to a laundromat?">
                some text
            </CalciteBlock>
        </CalciteBlockGroup>
    )
}

export default Faqs