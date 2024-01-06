import axios from "axios";

const url = process.env.NEXT_PUBLIC_URL || "/api/patient";
const url_dt = process.env.NEXT_PUBLIC_URL_DT || "/api/doctor"

const fetchData = async (requestUrl, requestData) => {
    try {
        const response = await axios(requestUrl, requestData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getAccounts = async () => {
    try {
        const requestUrl = `${url_dt}`;
        return await fetchData(requestUrl, { method: "get" });
    } catch (error) {
        throw error;
    }
}

export const getAccount = async (username) => {
    try {
        const requestUrl = `${url_dt}/search?username=${username}`;
        const result = await fetchData(requestUrl, { method: "get" });
        return result
    } catch (error) {
        throw error;
    }
}

export const createAccounts = async (formData) => {
    try {
        const requestUrl = `${url_dt}`;
        return await fetchData(requestUrl, { method: "post", data: formData });
    } catch (error) {
        throw error;
    }
}

export const getDatas = async () => {
    try {
        const requestUrl = `${url}`;
        return await fetchData(requestUrl, { method: "get" });
    } catch (error) {
        throw error;
    }
};

export const getData = async (id) => {
    try {
        const requestUrl = `${url}/${id}`;
        return await fetchData(requestUrl, { method: "get" });
    } catch (error) {
        throw error;
    }
};

export const createData = async (formData) => {
    try {
        const requestUrl = `${url}`;
        return await fetchData(requestUrl, { method: "post", data: formData });
    } catch (error) {
        throw error;
    }
};

export const updateData = async (id, formData) => {
    try {
        const requestUrl = `${url}/${id}`;
        return await fetchData(requestUrl, { method: "put", data: formData });
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        const requestUrl = `${url}/${id}`;
        return await fetchData(requestUrl, { method: "delete" });
    } catch (error) {
        throw error;
    }
};

export const deleteUserAll = async () => {
    try {
        const requestUrl = `${url}`;
        return await fetchData(requestUrl, { method: "delete" });
    } catch (error) {
        throw error;
    }
};

export const searchUser = async (data) => {
    try {
        let query = "";
        const isNumeric = !isNaN(data);
        if (data.length === 10 && isNumeric) {
            query = `tel=${data}`;
        } else if (isNaN(Number(data))) {
            query = `name=${encodeURIComponent(data)}`;
        } else if (data.length === 13 && isNumeric) {
            query = `idcard=${data}`;
        } else {
            throw new Error("Invalid data format");
        }

        const requestUrl = `${url}/search?${query}`;
        return await fetchData(requestUrl, { method: "get" });
    } catch (error) {
        throw error;
    }

};

