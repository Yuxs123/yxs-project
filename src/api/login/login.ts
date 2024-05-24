export const login = () => {
    return request("/admin/login", "POST")
}

export type loginParamsType= {
    /**
     * 密码
     */
    password: string;
    /**
     * 用户名
     */
    username: string;
}
