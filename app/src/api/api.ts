/* tslint:disable */
/* eslint-disable */
/**
 * Вычислитель
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface AuthUserResponseDto
 */
export interface AuthUserResponseDto {
    /**
     * Почта пользователя
     * @type {string}
     * @memberof AuthUserResponseDto
     */
    email: string;
    /**
     * Пароль пользователя
     * @type {string}
     * @memberof AuthUserResponseDto
     */
    password: string;
    /**
     * Токен пользователя
     * @type {string}
     * @memberof AuthUserResponseDto
     */
    token: string;
}
/**
 * 
 * @export
 * @interface CreateEntityDto
 */
export interface CreateEntityDto {
    /**
     * Название сущности
     * @type {string}
     * @memberof CreateEntityDto
     */
    name: string;
    /**
     * Дата с которой сущности начинает работать
     * @type {string}
     * @memberof CreateEntityDto
     */
    startDate: string;
    /**
     * Дата когда сущности заканчивает работать
     * @type {string}
     * @memberof CreateEntityDto
     */
    finishDate?: string;
    /**
     * Учитывать время в дате или нет
     * @type {boolean}
     * @memberof CreateEntityDto
     */
    time: boolean;
    /**
     * Стартовае значение сущности
     * @type {string}
     * @memberof CreateEntityDto
     */
    startValue: string;
    /**
     * Увеличиваем или уменьшем значение сущности
     * @type {string}
     * @memberof CreateEntityDto
     */
    action: CreateEntityDtoActionEnum;
}

/**
    * @export
    * @enum {string}
    */
export enum CreateEntityDtoActionEnum {
    Increment = 'INCREMENT',
    Decrement = 'DECREMENT'
}

/**
 * 
 * @export
 * @interface CreateUserDto
 */
export interface CreateUserDto {
    /**
     * Почта пользователя
     * @type {string}
     * @memberof CreateUserDto
     */
    email: string;
    /**
     * Пароль пользователя
     * @type {string}
     * @memberof CreateUserDto
     */
    password: string;
}
/**
 * 
 * @export
 * @interface GetEntityDto
 */
export interface GetEntityDto {
    /**
     * Название сущности
     * @type {string}
     * @memberof GetEntityDto
     */
    name: string;
    /**
     * Дата с которой сущности начинает работать
     * @type {string}
     * @memberof GetEntityDto
     */
    startDate: string;
    /**
     * Дата когда сущности заканчивает работать
     * @type {string}
     * @memberof GetEntityDto
     */
    finishDate?: string;
    /**
     * Учитывать время в дате или нет
     * @type {boolean}
     * @memberof GetEntityDto
     */
    time: boolean;
    /**
     * Стартовае значение сущности
     * @type {string}
     * @memberof GetEntityDto
     */
    startValue: string;
    /**
     * Увеличиваем или уменьшем значение сущности
     * @type {string}
     * @memberof GetEntityDto
     */
    action: GetEntityDtoActionEnum;
    /**
     * ID сущности
     * @type {number}
     * @memberof GetEntityDto
     */
    id: number;
}

/**
    * @export
    * @enum {string}
    */
export enum GetEntityDtoActionEnum {
    Increment = 'INCREMENT',
    Decrement = 'DECREMENT'
}

/**
 * 
 * @export
 * @interface UpdatedEntityDto
 */
export interface UpdatedEntityDto {
    /**
     * Название сущности
     * @type {string}
     * @memberof UpdatedEntityDto
     */
    name: string;
    /**
     * Дата с которой сущности начинает работать
     * @type {string}
     * @memberof UpdatedEntityDto
     */
    startDate: string;
    /**
     * Дата когда сущности заканчивает работать
     * @type {string}
     * @memberof UpdatedEntityDto
     */
    finishDate?: string;
    /**
     * Учитывать время в дате или нет
     * @type {boolean}
     * @memberof UpdatedEntityDto
     */
    time: boolean;
    /**
     * Стартовае значение сущности
     * @type {string}
     * @memberof UpdatedEntityDto
     */
    startValue: string;
    /**
     * Увеличиваем или уменьшем значение сущности
     * @type {string}
     * @memberof UpdatedEntityDto
     */
    action: UpdatedEntityDtoActionEnum;
    /**
     * ID сущности
     * @type {number}
     * @memberof UpdatedEntityDto
     */
    id: number;
}

/**
    * @export
    * @enum {string}
    */
export enum UpdatedEntityDtoActionEnum {
    Increment = 'INCREMENT',
    Decrement = 'DECREMENT'
}


/**
 * DefaultApi - axios parameter creator
 * @export
 */
export const DefaultApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin: async (createUserDto: CreateUserDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDto' is not null or undefined
            assertParamExists('authControllerLogin', 'createUserDto', createUserDto)
            const localVarPath = `/auth/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRegistration: async (createUserDto: CreateUserDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createUserDto' is not null or undefined
            assertParamExists('authControllerRegistration', 'createUserDto', createUserDto)
            const localVarPath = `/auth/registration`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createUserDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Создание сущности
         * @param {CreateEntityDto} createEntityDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerCreateEntity: async (createEntityDto: CreateEntityDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'createEntityDto' is not null or undefined
            assertParamExists('entityControllerCreateEntity', 'createEntityDto', createEntityDto)
            const localVarPath = `/entity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createEntityDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Удаление сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerDeleteEntity: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('entityControllerDeleteEntity', 'id', id)
            const localVarPath = `/entity/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Получение всех сущностей пользователя
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerGetEntities: async (options: any = {}): Promise<RequestArgs> => {
            const localVarPath = `/entity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Получение одной сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerGetEntityById: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('entityControllerGetEntityById', 'id', id)
            const localVarPath = `/entity/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Обновление сущности
         * @param {UpdatedEntityDto} updatedEntityDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerUpdateEntity: async (updatedEntityDto: UpdatedEntityDto, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'updatedEntityDto' is not null or undefined
            assertParamExists('entityControllerUpdateEntity', 'updatedEntityDto', updatedEntityDto)
            const localVarPath = `/entity`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updatedEntityDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Декремент значения сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerUpdateEntityDecrement: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('entityControllerUpdateEntityDecrement', 'id', id)
            const localVarPath = `/entity/{id}/dec`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Инкремент значения сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerUpdateEntityIncrement: async (id: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('entityControllerUpdateEntityIncrement', 'id', id)
            const localVarPath = `/entity/{id}/inc`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter, options.query);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DefaultApi - functional programming interface
 * @export
 */
export const DefaultApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = DefaultApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerLogin(createUserDto: CreateUserDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthUserResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerLogin(createUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async authControllerRegistration(createUserDto: CreateUserDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AuthUserResponseDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.authControllerRegistration(createUserDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Создание сущности
         * @param {CreateEntityDto} createEntityDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerCreateEntity(createEntityDto: CreateEntityDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEntityDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerCreateEntity(createEntityDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Удаление сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerDeleteEntity(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerDeleteEntity(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Получение всех сущностей пользователя
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerGetEntities(options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<GetEntityDto>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerGetEntities(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Получение одной сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerGetEntityById(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<GetEntityDto>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerGetEntityById(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Обновление сущности
         * @param {UpdatedEntityDto} updatedEntityDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerUpdateEntity(updatedEntityDto: UpdatedEntityDto, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerUpdateEntity(updatedEntityDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Декремент значения сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerUpdateEntityDecrement(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerUpdateEntityDecrement(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Инкремент значения сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async entityControllerUpdateEntityIncrement(id: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.entityControllerUpdateEntityIncrement(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * DefaultApi - factory interface
 * @export
 */
export const DefaultApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = DefaultApiFp(configuration)
    return {
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerLogin(createUserDto: CreateUserDto, options?: any): AxiosPromise<AuthUserResponseDto> {
            return localVarFp.authControllerLogin(createUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CreateUserDto} createUserDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        authControllerRegistration(createUserDto: CreateUserDto, options?: any): AxiosPromise<AuthUserResponseDto> {
            return localVarFp.authControllerRegistration(createUserDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Создание сущности
         * @param {CreateEntityDto} createEntityDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerCreateEntity(createEntityDto: CreateEntityDto, options?: any): AxiosPromise<GetEntityDto> {
            return localVarFp.entityControllerCreateEntity(createEntityDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Удаление сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerDeleteEntity(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.entityControllerDeleteEntity(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Получение всех сущностей пользователя
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerGetEntities(options?: any): AxiosPromise<Array<GetEntityDto>> {
            return localVarFp.entityControllerGetEntities(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Получение одной сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerGetEntityById(id: string, options?: any): AxiosPromise<GetEntityDto> {
            return localVarFp.entityControllerGetEntityById(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Обновление сущности
         * @param {UpdatedEntityDto} updatedEntityDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerUpdateEntity(updatedEntityDto: UpdatedEntityDto, options?: any): AxiosPromise<void> {
            return localVarFp.entityControllerUpdateEntity(updatedEntityDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Декремент значения сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerUpdateEntityDecrement(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.entityControllerUpdateEntityDecrement(id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Инкремент значения сущности
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        entityControllerUpdateEntityIncrement(id: string, options?: any): AxiosPromise<void> {
            return localVarFp.entityControllerUpdateEntityIncrement(id, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DefaultApi - object-oriented interface
 * @export
 * @class DefaultApi
 * @extends {BaseAPI}
 */
export class DefaultApi extends BaseAPI {
    /**
     * 
     * @param {CreateUserDto} createUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authControllerLogin(createUserDto: CreateUserDto, options?: any) {
        return DefaultApiFp(this.configuration).authControllerLogin(createUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CreateUserDto} createUserDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public authControllerRegistration(createUserDto: CreateUserDto, options?: any) {
        return DefaultApiFp(this.configuration).authControllerRegistration(createUserDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Создание сущности
     * @param {CreateEntityDto} createEntityDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerCreateEntity(createEntityDto: CreateEntityDto, options?: any) {
        return DefaultApiFp(this.configuration).entityControllerCreateEntity(createEntityDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Удаление сущности
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerDeleteEntity(id: string, options?: any) {
        return DefaultApiFp(this.configuration).entityControllerDeleteEntity(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Получение всех сущностей пользователя
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerGetEntities(options?: any) {
        return DefaultApiFp(this.configuration).entityControllerGetEntities(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Получение одной сущности
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerGetEntityById(id: string, options?: any) {
        return DefaultApiFp(this.configuration).entityControllerGetEntityById(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Обновление сущности
     * @param {UpdatedEntityDto} updatedEntityDto 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerUpdateEntity(updatedEntityDto: UpdatedEntityDto, options?: any) {
        return DefaultApiFp(this.configuration).entityControllerUpdateEntity(updatedEntityDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Декремент значения сущности
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerUpdateEntityDecrement(id: string, options?: any) {
        return DefaultApiFp(this.configuration).entityControllerUpdateEntityDecrement(id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Инкремент значения сущности
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApi
     */
    public entityControllerUpdateEntityIncrement(id: string, options?: any) {
        return DefaultApiFp(this.configuration).entityControllerUpdateEntityIncrement(id, options).then((request) => request(this.axios, this.basePath));
    }
}


