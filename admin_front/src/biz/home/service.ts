import Request from '@src/utils/request'


const USER_INFO = "/admin/user_info";
const USER_INFO_UPDATE = "/admin/user_info/update";

class Service {
    async queryUserList(param) {
        return Request.get(USER_INFO, {page: 1, size: 10});
    }
    async updateUser(user:User) {
        return Request.post(USER_INFO_UPDATE, user);
    }
    async addUser(user:User) {
        return Request.post(USER_INFO, user);
    }
}

export default Service;