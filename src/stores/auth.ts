import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token') || '',
        expire: parseInt(localStorage.getItem('expire') || '0'),
    }),
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem('token', token);
        },
        clearToken() {
            this.token = '';
            localStorage.removeItem('token');
        },
        getToken(){
            return this.token;
        },
        setExpire(expire){
            this.expire = expire;
            localStorage.setItem('expire', expire);
        }
    },
    getters: {
        isLoggedIn: (state) => !!state.token && state.expire > (Date.parse(new Date().toString()) / 1000),
    },
});