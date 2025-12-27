import commonAPI from "./commonAPI"
import SERVERURL from "./serverURL"

export const registerAPI = async(reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

export const loginAPI = async(reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}

export const getAllCropsAPI = async() => {
    return await commonAPI("GET", `${SERVERURL}/crops`)
}

export const getAcropAPI = async(id, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/userviewcrop/${id}`, "", reqHeader)
}
export const getAToolAPI = async(id, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/userviewtool/${id}`, "", reqHeader)
}

export const addProductAPI = async(reqbody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/addproduct`, reqbody, reqHeader)
}

export const getAllNewsAPI = async() => {
    return await commonAPI("GET", `${SERVERURL}/news`)
}

export const getAllTipsAPI = async() => {
    return await commonAPI("GET", `${SERVERURL}/tips`)
}

export const AddToCartAPI = async(reqBody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/addtocart`, reqBody, reqHeader)
}

export const getCartAPI = async(reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/getcart`, "", reqHeader)
}

export const CartQuantityAPI = async(reqbody, reqHeader) => {
    return await commonAPI("PUT", `${SERVERURL}/updatecart`, reqbody, reqHeader)
}


// farmer
export const getAcropFarmerAPI = async(id, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/farmerviewcrop/${id}`, "", reqHeader)
}
export const getAToolFarmerAPI = async(id, reqHeader) => {
    return await commonAPI("GET", `${SERVERURL}/farmerviewtool/${id}`, "", reqHeader)
}
export const addCropAPI = async(reqbody, reqHeader) => {
    return await commonAPI("POST", `${SERVERURL}/addcrop`, reqbody, reqHeader)
}