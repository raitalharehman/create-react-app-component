import { apiCall, generateProductUrl } from "../utils";
const getExample = (context, upc) => {
    return apiCall(generateProductUrl(upc)).then(res => {
        context.setState({ res: res.data })
    })
}
export default getExample;