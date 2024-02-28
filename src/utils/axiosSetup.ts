import axios, {
	AxiosError,
	AxiosInstance,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios';

function OnRequest(config: InternalAxiosRequestConfig) {
	console.log('OnRequest', config);
	return config;
}

function OnRequestError(error: AxiosError) {
	console.log('OnRequestError', error);
	return Promise.reject(error);
}

function OnResponse(response: AxiosResponse) {
	console.log('onResponse', response);
	return response;
}

function OnResponseError(error: AxiosError) {
	console.log('onResponseError', error);
	return Promise.reject(error); // catch kodu
}

// merkezi olarak axios'a interceptor özelliği kazandırdık
export function SetupInterceptors(axiosInstance: AxiosInstance) {
	axiosInstance.interceptors.request.use(OnRequest, OnRequestError);
	axiosInstance.interceptors.response.use(OnResponse, OnResponseError);

	return axiosInstance;
}

export function ClearInterceptors(axiosInstance: AxiosInstance) {
	axiosInstance.interceptors.request.clear();
	axiosInstance.interceptors.response.clear();
	return axiosInstance;
}
