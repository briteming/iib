import Vue from 'vue'
import { owner, repo } from './const'

export const User = {
    async token() {
        return (await Vue.http.get('token')).json();
    },
    async info() {
        return (await Vue.http.get('https://api.github.com/user')).json();
    },
    async exchange(code) {
        return (await Vue.http.post('token', { code })).json();
    },
    async logout() {
        return Vue.http.post('logout');
    }
};

export const Post = {
    async get(number) {
        const data = await(await Vue.http.get(`https://api.github.com/repos/briteming/iib/issues/${number}`)).json();
        return {
            title: data.title,
            date: data.created_at,
            body: data.body,
            state: data.state,
            number: data.number,
            tags: data.labels.map(label => {
                return {
                    name: label.name,
                    color: label.color
                };
            })
        };
    },
    async all() {
        const data = await(await Vue.http.get(`https://api.github.com/repos/briteming/iib/issues?creator=briteming&state=all`)).json();
        return data
            .filter(single => single.state !== 'closed')
            .map(single => {
                return {
                    title: single.title,
                    state: single.state,
                    number: single.number,
                    body: single.body,
                    date: single.created_at,
                    tags: single.labels.map(label => {
                        return {
                            name: label.name,
                            color: label.color
                        };
                    }),
                    comments: single.comments
                }
            });
    }
};

export const Comment = {
    async all(id) {
        return (await Vue.http.get(`https://api.github.com/repos/briteming/iib/issues/${id}/comments`)).json();
    },
    async create(id, body) {
        return (await Vue.http.post(`https://api.github.com/repos/briteming/iib/issues/${id}/comments`, { body })).json();
    }
};
