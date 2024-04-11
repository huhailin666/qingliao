import Request from '@src/utils/request'


const USER_INFO = "/admin/user_info";
const SPEAK_LIST = "/admin/speak";
class Service {
    async queryUserInfo(param) {
        return Request.get(USER_INFO, param);
    }
    async querySpeakList(param) {
        return Request.get(SPEAK_LIST, param);
    }
}

export default Service;