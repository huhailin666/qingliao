import Request from '@src/utils/request'


const SPEAK_LIST = "/admin/speak";
// const USER_INFO_UPDATE = "/admin/user_info/update";

class Service {
    async querySpeakList(param) {
        return Request.get(SPEAK_LIST, param);
    }

    async updateUser(user: User) {
        return Request.post(SPEAK_LIST, user);
    }

    async addUser(user: User) {
        return Request.post(SPEAK_LIST, user);
    }
}

export default Service;