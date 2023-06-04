import HorizontalTabs from "../reusable/HorizontalTabs"
import Input from "./Input"

const FormFeilds = () => {
    const tabs = [
        {title: 'Input Form', content: <Input />},
        {title: '', content:''}
    ]
    return(
        <>
            <HorizontalTabs tabs={tabs} />
        </>
    )
}

export default FormFeilds